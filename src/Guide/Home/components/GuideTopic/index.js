import React from 'react';
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
  isAdmin,
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
      <h2 className={cls['guide-list-topic-title']}>
        <a className={cls['guide-list-topic-link']}>{title}</a>
        {isAdmin && (
          <Badge className={cls['guide-list-topic-tag']} color="green">
            Admin
          </Badge>
        )}
      </h2>
      <p>{description}</p>
    </div>
    {users && (
      <div className={cls['guide-list-topic-users']}>
        {users.map(user => (
          <Avatar key={user.imgUrl} {...user} />
        ))}
      </div>
    )}
    {isAdmin && (
      <Dropdown
        className={cls['guide-list-topic-action']}
        menuPosition="bottom-left"
      >
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Your Profile</DropdownItem>
        <DropdownItem>Help & Support</DropdownItem>
        <DropdownItem>Logout</DropdownItem>
      </Dropdown>
    )}
  </Component>
);

GuideTopic.defaultProps = {
  className: null,
  description: null,
  users: null,
  isAdmin: false,
  children: null,
  Component: Widget
};

export default GuideTopic;
