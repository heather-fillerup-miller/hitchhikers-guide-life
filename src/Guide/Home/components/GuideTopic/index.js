import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { Avatar, Widget, Dropdown, DropdownItem } from '@duik/it';
import { IconWrap, Badge } from '@components';

import cls from './guide-topic.module.scss';

const GuideTopic = ({
  children,
  Component,
  className,
  icon: { className: iconClassName, ...icon },
  title,
  description,
  users,
  taskNo,
  letsDoItUrl,
  ...rest
}) => (
  <Component
    className={classnames(cls['guide-list-topic'], className)}
    padding
    {...rest}
  >
    <IconWrap
      {...icon}
      className={classnames(cls['guide-list-topic-icon'], iconClassName)}
    />
    <div className={cls['guide-list-topic-content']}>
      <h2 className={cls['guide-list-topic-title']}>{title}<Badge className={cls['guide-list-topic-tag']} color="green">
        {taskNo}
      </Badge></h2>

      <p>{description}</p>
    </div>
    {users && (
      <div className={cls['guide-list-topic-users']}>
        {users.map(user => (
          <Avatar key={user.imgUrl} {...user} />
        ))}
      </div>
    )}
    <Dropdown
      className={cls['guide-list-topic-action']}
      menuPosition="bottom-left"
    >
      {letsDoItUrl && <DropdownItem Component={Link} to={letsDoItUrl} >Let's Do It!</DropdownItem>}
      {!letsDoItUrl && <DropdownItem>Let's Do It!</DropdownItem>}
      <DropdownItem>Maybe Later...</DropdownItem>
      <DropdownItem>No thanks</DropdownItem>
    </Dropdown>
  </Component>
);

GuideTopic.defaultProps = {
  className: null,
  description: null,
  users: null,
  children: null,
  Component: Widget,
  letsDoItUrl: null,
};

export default GuideTopic;
