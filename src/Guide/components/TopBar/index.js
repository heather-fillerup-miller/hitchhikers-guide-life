import React from "react";
import classnames from "classnames";
import { Link } from 'react-router-dom';

import Icon from "@duik/icon";
import { Divider, Button, DropdownItem, TopBar, TopBarSection, TextField } from "@duik/it";
import { NavBurger } from "@components";

import { UiContext } from "@context";
import { SelectCountry } from "@composed";

import cls from "./top-bar.module.scss";
import TopBarUserDropdown from "../TopBarUserDropdown";
import * as images from '@exampleAssets';

const Template = ({ children, className, isMenuOpen, rightEl }) => {
  const uiContext = React.useContext(UiContext);
  return (
    <TopBar className={classnames(cls["top-bar"], className)}>
      <Button
        className={cls["nav-burger"]}
        onClick={uiContext.menu.handleToggle}
        transparent
      >
        <NavBurger isOpen={uiContext.menu.isVisible} />
      </Button>
      {children}
      <TopBarSection className={cls["top-bar-actions"]}>
        {rightEl || (
          <TextField
            leftEl={<Icon>search_left</Icon>}
            placeholder="Type to search..."
          />
        )}
        <Divider
          className={cls["top-bar-mobile-hidden"]}
          vertical
          margin
        />
                <TopBarUserDropdown
          user={{
            imgUrl: images.a10,
            name: 'Heather'
          }}
        >
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem Component={Link} to='/guide/settings'> Your Profile</DropdownItem>
          <DropdownItem>Help & Support center</DropdownItem>
          <DropdownItem Component={Link} to='/guide/sign-up'>Logout</DropdownItem>
        </TopBarUserDropdown>
      </TopBarSection>
    </TopBar>
  );
};

Template.defaultProps = {
  children: null,
  className: null,
  rightEl: null
};

export default Template;
