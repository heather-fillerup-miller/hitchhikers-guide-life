import React from 'react';
import classnames from 'classnames';
import cls from './widget-link.module.scss';

import Avatar from '@duik/avatar';

export const WidgetLink = ({
  className,
  Component = 'a',
  imgUrl,
  title,
  rightEl,
  ...rest
}) => (
  <Component className={classnames(cls['card-link'], className)} {...rest}>
    {imgUrl && <Avatar imgUrl={imgUrl} className={cls['card-link-avatar']} />}
    <span className={cls['card-link-title']}>{title}</span>
    {rightEl && <span className={cls['card-link-count']}>{rightEl}</span>}
  </Component>
);

WidgetLink.defaultProps = {
  className: null,
  Component: 'a',
  imgUrl: null,
  rightEl: null
};

export default WidgetLink;
