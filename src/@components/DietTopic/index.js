import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { Avatar, Widget, Dropdown, DropdownItem } from '@duik/it';
import { Badge } from '@components';

import cls from './diet-topic.module.scss';

export const DietTopic = ({
  children,
  Component,
  className,
  mealTitle,
  id,
  healthScore,
  sourceUrl,
  servings,
  preparationMinutes,
  cookingMinutes,
  title,
  imgUrl,
  letsDoItUrl,
  creditText,
  ...rest
}) => (
  <Component
    className={classnames(cls['diet-list-topic'], className)}
    padding
    {...rest}
  >
    <div className={cls['diet-list-topic-content']}>
      <h1 className={cls['diet-list-topic-content']}>{mealTitle}</h1>
      <Badge color="green">
          Health Score: {healthScore}
      </Badge>
      <h2 className={cls['diet-list-topic-content']}>{title}</h2>
    </div>
    <a className={cls['diet-list-topic-link']} href={sourceUrl}>by {creditText}</a>
    <div className={cls['diet-list-topic-recipe']}>
        <Avatar jumbo key={id} imgUrl={imgUrl} />
      </div>
    <Dropdown
      className={cls['diet-list-topic-action']}
      menuPosition="bottom-left"
    >
      <DropdownItem Component={Link} to={letsDoItUrl} >I ate this!</DropdownItem>
      <DropdownItem>Randomize</DropdownItem>
      <DropdownItem>No thanks</DropdownItem>
    </Dropdown>
  </Component>
);

DietTopic.defaultProps = {
  className: null,
  description: null,
  children: null,
  Component: Widget
};

export default DietTopic;
