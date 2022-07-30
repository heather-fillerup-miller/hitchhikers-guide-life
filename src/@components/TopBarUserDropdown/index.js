import React from 'react';

import { Dropdown } from '@duik/it';

import TopBarUserButton from './TopBarUserButton';

export const TopBarUserDropdown = ({ className, children, user, imgUrl, ...rest }) => (
  <Dropdown ButtonComponent={TopBarUserButton} buttonProps={user} {...rest}>
    {children}
  </Dropdown>
);

TopBarUserDropdown.defaultProps = {
  className: null,
  children: null,
  imgUrl: null
};

export default TopBarUserDropdown;
