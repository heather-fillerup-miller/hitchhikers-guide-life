import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { UiContext } from '@context';
import {
  WidgetHeader,
  Widget,
  ContainerVertical,
  ContainerHorizontal,
  ScrollArea
} from '@duik/it';

import { WidgetLink, WidgetVideoPreview, Header, GuideTopic } from '@components';

import cls from './guide-home.module.scss';

import topics from './assets/topics';
import sidebarNavigation from './assets/sidebarNavigation';
import sidebarVideos from './assets/sidebarVideos';

const GuideHome = ({ isMenuOpen }: { isMenuOpen: Boolean }) => {
  const uiContext = React.useContext(UiContext);
  return (
    <ContainerVertical>
      <Header isHome={true}/>
      <ContainerHorizontal>
        <ScrollArea>
          <div className={cls['guide-home']}>
            <div>
              <h2 className={cls['guide-home-title']}>
                Today's Suggested Actions
              </h2>
              <p><Link to='/guide/home'>Home</Link> / About / <Link to='/guide/diet'> Meals</Link> / Fitness / Stress Relief / Finances</p>
              <div className={cls['guide-list']}>
                {topics.map(item => (
                  <div key={item.title}>
                    <GuideTopic key={item.title} {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={classnames(cls['guide-home-menu-container'], {
                [cls['guide-home-menu-container-open']]:
                  uiContext.menu.isVisible
              })}
            >
              <Widget>
                <WidgetHeader>
                  <h3>To Do </h3>
                </WidgetHeader>
                {sidebarNavigation.map(item => (
                  <WidgetLink key={item.title} {...item} />
                ))}
              </Widget>
              <Widget>
                <WidgetHeader>
                  <h3>Suggested Motivational Videos</h3>
                </WidgetHeader>
                <div className={cls['guide-video-preview-container']}>
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

export default GuideHome;
