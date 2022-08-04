import React from 'react';

// styles
import '@duik/it/dist/styles.css';
import '@duik/icon/dist/styles.css';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import './app.module.scss';

import { UiContext } from '@context';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Guide } from 'Guide';
import { useMenuVisibility } from '@utils';
import Themes from './Themes';

const RootRoute = props => {
  const uiContext = React.useContext(UiContext);

  React.useEffect(() => {
    // on route change hide the menus
    uiContext.menu.handleClose();
    uiContext.filter.handleClose();
  }, [props.location.pathname]); // eslint-disable-line

  return (
    <>
      <Themes />
      <Switch>
        <Route path="/guide" component={Guide} />
        {/* use redirect for handling logged in */}
        <Redirect to="/guide" component={Guide}/>
      </Switch>
    </>
  );
};

const App = () => {
  const menu = useMenuVisibility(false);
  const filter = useMenuVisibility(false);

  const contextValue = {
    menu,
    filter
  };

  return (
    <UiContext.Provider value={contextValue}>
      <BrowserRouter>
        <Route path="/" component={RootRoute} />
      </BrowserRouter>
    </UiContext.Provider>
  );
};

export default App;
