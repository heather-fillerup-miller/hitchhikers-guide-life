import React from 'react';
import classnames from 'classnames';
import cls from './widget-link.module.scss';

import IconWrap from '../IconWrap';
import Avatar from '@duik/avatar';

export const WidgetLink = ({
  className,
  Component = 'a',
  icon,
  imgUrl,
  title,
  rightEl,
  ...rest
}) => (
  <Component className={classnames(cls['card-link'], className)} {...rest}>
    {imgUrl && <Avatar imgUrl={imgUrl} className={cls['card-link-avatar']} />}
    {icon && <IconWrap {...icon} className={cls['card-link-icon']} />}
    <span className={cls['card-link-title']}> {title}</span>
    {rightEl && <span className={cls['card-link-count']}>{rightEl}</span>}
  </Component>
);

WidgetLink.defaultProps = {
  className: null,
  Component: 'a',
  icon: null,
  rightEl: null,
  imgUrl: null,
};

export default WidgetLink;
