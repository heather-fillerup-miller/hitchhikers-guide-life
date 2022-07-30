import React from 'react';
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

import { DietTopic, WidgetVideoPreview, WidgetLink } from '@components';
//import WidgetLink from './components/WidgetLink';

import Header from '../../@components/Header/Header';

import cls from './diet-home.module.scss';

import meals from './assets/meals';
import sidebarNavigation from './assets/sidebarNavigation';
import sidebarVideos from './assets/sidebarVideos';

const Diet = ({ isMenuOpen }: { isMenuOpen: Boolean }) => {
  const uiContext = React.useContext(UiContext);
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
                {meals.map(item => (
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
                {/* <WidgetBottomCta>View All Videos</WidgetBottomCta> */}
              </Widget>
            </div>
          </div>
        </ScrollArea>
      </ContainerHorizontal>
    </ContainerVertical>
  );
};

export default Diet;
