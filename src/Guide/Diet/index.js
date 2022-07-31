import React, { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import { UiContext } from '@context';
import { Link } from 'react-router-dom';
import {
  WidgetHeader,
  Widget,
  ContainerVertical,
  ContainerHorizontal,
  ScrollArea
} from '@duik/it';
import { BarLoader } from 'react-spinners';
import { DietTopic, WidgetVideoPreview, WidgetLink, Header } from '@components';

import cls from './diet-home.module.scss';

import sidebarNavigation from './assets/sidebarNavigation';
import sidebarVideos from './assets/sidebarVideos';

const Diet = ({ isMenuOpen }: { isMenuOpen: Boolean }) => {

  const [ microServiceMeals, setMicroServiceMeals ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const uiContext = React.useContext(UiContext);

  // map a meal object to use with Diet Topic Component
  const mapMeal = useCallback ((mealTitle, meal) => {
    const mappedMeal = meal.map(item => ({
      mealTitle: mealTitle,
      id: item.id,
      title: item.title,
      healthScore: item.healthscore,
      sourceUrl: item.spoonacularSourceUrl,
      imgUrl: item.imgUrl,
      letsDoItUrl: '/guide/profile',
      creditText: item.creditText
    }));
    return mappedMeal[0];
  }, []);

  // get a recipe from the recipe microservice
  const fetchMeal = useCallback(async (mealTitle, tags) => {
      const url = 'http://localhost:9000/?tags=' + tags;
      const response = await fetch(url);
      const meal = await response.json();
      return mapMeal(mealTitle, meal);
  }, [mapMeal]);

  // fetch three meals from the recipe microservice and add them to the microServiceMeals
  const generateMeals = useCallback(async () => {
    let fetchedMeals = [];
    try {
      fetchedMeals.push(await fetchMeal("Breakfast", "breakfast"));
      fetchedMeals.push(await fetchMeal("Lunch", "lunch"));
      fetchedMeals.push(await fetchMeal("Dinner", "dinner"));
    } catch(err) {
      console.error(err);
    } finally {
      setMicroServiceMeals(fetchedMeals);
      setIsLoading(false);
    }
  }, [fetchMeal]);

  // generate the meals
  useEffect(() => {
    if(isLoading) {
      generateMeals();
    }
  },[isLoading, generateMeals]);

  return (
    <ContainerVertical>
      <Header isHome={false}/>
      <ContainerHorizontal>
        <ScrollArea>
          <div className={cls['diet-home']}>
            <div>
              <h2 className={cls['diet-home-title']}>
                Today's Suggested Meal Plan
              </h2>
              <p><Link to='/guide/home'>Home</Link> / About /<Link to='/guide/diet'> Meals</Link> / Fitness / Stress Relief / Finances</p>
              <div className={cls['diet-list']}>
                {isLoading && <BarLoader/>}
                {!isLoading && microServiceMeals.map(item => (
                  <div key={item.title}>
                    <DietTopic key={item.title} {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={classnames(cls['diet-home-menu-container'], {
                [cls['diet-home-menu-container-open']]:
                  uiContext.menu.isVisible
              })}
            >
              <Widget>
                <WidgetHeader>
                  <h3>Daily Summary: 2000 Calories</h3>
                </WidgetHeader>
                {sidebarNavigation.map(item => (
                  <WidgetLink key={item.title} {...item} />
                ))}
              </Widget>
              <Widget>
                <WidgetHeader>
                  <h3>Suggested Diet Videos</h3>
                </WidgetHeader>
                <div className={cls['diet-video-preview-container']}>
                  {sidebarVideos.map(item => (
                    <WidgetVideoPreview key={item.title} {...item} />
                  ))}
                </div>
              </Widget>
            </div>
          </div>
        </ScrollArea>
      </ContainerHorizontal>
    </ContainerVertical>
  );
};

export default Diet;
