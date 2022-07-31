import React from 'react';
import classnames from 'classnames';

import cls from './badge.module.scss';

export const Badge = props => {
  const { children, className, color, fill, ...rest } = props;
  return (
    <span
      className={classnames(cls['badge'], className, {
        [color]: color,
        [cls['badge-fill']]: fill
      })}
      {...rest}
    >
      {children}
    </span>
  );
};

Badge.defaultProps = {
  className: null,
  children: null,
  color: null,
  fill: false
};

export default Badge;
