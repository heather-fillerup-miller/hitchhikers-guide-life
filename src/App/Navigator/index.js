import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import Icon from '@duik/icon';
import { OuterEventsHandler, NavLink, Divider } from '@duik/it';

import cls from './navigator.module.scss';

const Navigator = props => {
  const {
    location: { pathname }
  } = props;
  const [isExpanded, setExpanded] = React.useState(false);
  const [isDark, setDark] = React.useState(false);

  React.useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  const handleHide = () => {
    setExpanded(false);
  };

  const toggleTheme = () => {
    setDark(!isDark);
  };

  return (
    <OuterEventsHandler
      className={classnames(cls['navigator-container'])}
      onOuterEvent={isExpanded ? handleHide : null}
    >
      {isDark && (
        <style>{`body {
        --bg-main: #252529;
        --bg-base: #2c2c31;
        --border-color-base: #34343a;
        --border-color-main: #44444e;
        --text-base: #ccc;
        --text-main: #ddd;
        }`}</style>
      )}
      <button
        className={classnames(cls.expandButton, {
          [cls.isExpanded]: isExpanded
        })}
        onClick={handleToggle}
        type="button"
      >
        <Icon>view_list</Icon>
      </button>
      <div
        className={classnames(cls.list, {
          [cls.isExpanded]: isExpanded
        })}
      >
        {/* <NavLink
          pill
          Component={Link}
          icon={<Icon>gallery_grid_view</Icon>}
          to="/"
        >
          Screen Previews
        </NavLink> */}
        <NavLink pill icon={<Icon>view_simple</Icon>} onClick={toggleTheme}>
          Switch Dark/Light Theme
        </NavLink>
        <Divider />
        <NavLink
          pill
          Component="a"
          icon={<Icon>view_list</Icon>}
          href="https://developer.dashboard-ui.com/docs/react/installation"
          target="_blank"
        >
          React Docs
        </NavLink>
        <Divider />
      </div>
    </OuterEventsHandler>
  );
};

Navigator.defaultProps = {
  className: null,
  Component: OuterEventsHandler
};

export default withRouter(Navigator);
