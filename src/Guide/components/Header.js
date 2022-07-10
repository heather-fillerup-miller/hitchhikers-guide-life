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

import * as images from '@exampleAssets';

import TopBarUserDropdown from './TopBarUserDropdown';
import cls from './guide-top-bar.module.scss';

const GuideHeader = ({ isMenuOpen, toggleMenu, isHome }) => {
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
          Hitchhiker's Guide to a Better Life
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
            imgUrl: images.a10,
            name: 'Heather'
          }}
        >
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem Component={Link} to='/guide/profile'> Your Profile</DropdownItem>
          {!isHome && <DropdownItem Component={Link} to='/guide/home'> Home</DropdownItem>}
          <DropdownItem>Help & Support</DropdownItem>
          <DropdownItem Component={Link} to='/guide/sign-up'>Logout</DropdownItem>
        </TopBarUserDropdown>
      </TopBarSection>
    </TopBar>
  );
};

export default GuideHeader;
