import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import DocumentationPage from './DocumentationPage';
import SignUp from './SignUp';
import UserSettings from './UserSettings';
import Login from './Login';

export const Guide = () => {

  return (
    <Switch>
      <Route component={SignUp} exact path="/guide/sign-up" strict />
      <Route component={Home} exact path="/guide/home" strict />
      <Route component={DocumentationPage} exact path="/guide/doc" strict />
      <Route component={UserSettings} exact path="/guide/settings" strict />
      <Route component={Login} exact path="/guide/login" strict />
      <Redirect to="/guide/" />
    </Switch>
  );
};
