import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import Profile from './Profile';
import Login from './Login';

export const Guide = () => {

  return (
    <Switch>
      <Route component={SignUp} exact path="/guide/" strict />
      <Route component={Home} exact path="/guide/home" strict />
      <Route component={Profile} exact path="/guide/profile" strict />
      <Route component={Login} exact path="/guide/login" strict />
      <Redirect to="/guide/" />
    </Switch>
  );
};
