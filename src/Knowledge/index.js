import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import DocumentationPage from './DocumentationPage';
import SignUp from './SignUp';
import UserSettings from './UserSettings';
import Login from './Login';

export const Knowledge = () => {

  return (
    <Switch>
      <Route component={SignUp} exact path="/knowledge/sign-up" strict />
      <Route component={Home} exact path="/knowledge" strict />
      <Route component={DocumentationPage} exact path="/knowledge/doc" strict />
      <Route component={UserSettings} exact path="/knowledge/settings" strict />
      <Route component={Login} exact path="/knowledge/login" strict />
      <Redirect to="/knowledge/" />
    </Switch>
  );
};
