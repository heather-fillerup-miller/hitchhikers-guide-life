import React from "react";
import classnames from "classnames";

import Icon from "@duik/icon";
import { Divider, Button, TopBar, TopBarSection, TextField } from "@duik/it";
import { NavBurger } from "@components";

import { UiContext } from "@context";
import { SelectCountry } from "@composed";

import cls from "./top-bar.module.scss";

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
        <SelectCountry className={cls["top-bar-mobile-hidden"]} />
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
