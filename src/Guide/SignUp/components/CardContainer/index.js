import React from 'react';
import classnames from 'classnames/dedupe';

import cls from './signup-card-container.module.scss';

export const LoginCardContainer = ({ children, className, ...rest }) => {
  return (
    <div
      className={classnames(cls['signup-card-container'], className)}
      {...rest}
    >
      {children}
    </div>
  );
};

LoginCardContainer.defaultProps = {
  className: null
};

export default LoginCardContainer;
