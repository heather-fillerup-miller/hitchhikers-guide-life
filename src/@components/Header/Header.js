import React from 'react';
import Icon from '@duik/icon';
import { Link } from 'react-router-dom';
import {
  TopBar,
  TopBarSection,
  TopBarTitle,
  DropdownItem,
  TextField,
  Button
} from '@duik/it';
import { NavBurger } from '@components';
import { UiContext } from '@context';

import * as images from '@images';

import TopBarUserDropdown from '../TopBarUserDropdown/index';
import cls from './top-bar-header.module.scss';

export const Header = ({ isMenuOpen, toggleMenu, isHome }) => {
  const uiContext = React.useContext(UiContext);
  return (
    <TopBar className={cls['guide-top-bar']}>
      <Button
        className={cls['guide-top-bar-menu-btn']}
        onClick={uiContext.menu.handleToggle}
      >
        <NavBurger isOpen={uiContext.menu.isVisible} />
      </Button>
      <TopBarSection>
        <TopBarTitle>
          <Icon>help</Icon>
          <Link to='/guide/home'>Hitchhiker's Guide to a Better Life</Link>
        </TopBarTitle>
      </TopBarSection>
      <TopBarSection className={cls['guide-top-bar-actions']}>
        <TextField
          clear
          leftEl={<Icon>search_left</Icon>}
          placeholder="Type to search..."
        />
        <TopBarUserDropdown
          user={{
            imgUrl: images.a05,
            name: 'Heather'
          }}
        >
          <DropdownItem Component={Link} to='/guide/profile'> Your Profile</DropdownItem>
          {!isHome && <DropdownItem Component={Link} to='/guide/home'> Home</DropdownItem>}
          <DropdownItem>Advanced Options</DropdownItem>
          <DropdownItem>Help & Support</DropdownItem>
          <DropdownItem Component={Link} to='/guide/sign-up'>Logout</DropdownItem>
        </TopBarUserDropdown>
      </TopBarSection>
    </TopBar>
  );
};

export default Header;
