import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@duik/icon';
import {
  Avatar,
  Button,
  TextField,
  Widget,
  WidgetContent,
  FormGroupContainer,
  FormGroup
} from '@duik/it';

import * as images from '@exampleAssets';
import cls from './login.module.scss';

import LoginCard from './components/Card';
import LoginCardContainer from './components/CardContainer';

const Login = () => {
  return (
    <div className={cls['page-login-wrapper']}>
    <Widget className={cls['login-widget-wrapper']}>
      <div className={cls['login-content']}>
        <WidgetContent className={cls['login-content-left']}>
          <h2 id='login-description'>Login to Your Account</h2>
          <p className={cls['login-description']}>
           Take time today to improve on yourself!
          </p>
          <FormGroupContainer>
            <FormGroup>
              <TextField
                label="E-mail address"
                name="email"
                placeholder="your@email.com"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="Password"
                name="password"
                placeholder="·····"
                type="password"
              />
            </FormGroup>
          </FormGroupContainer>

          {/* <UikDivider margin /> */}
          <br />
          <h3 className={cls['login-headline']}>What do you want to improve?</h3>
          <LoginCardContainer>
            <LoginCard isSelected>
              <Icon>love</Icon>
              <p>Health</p>
            </LoginCard>
            <LoginCard>
              <Icon>smile</Icon>
              <p>Stress</p>
            </LoginCard>
            <LoginCard>
              <Icon>wallet</Icon>
              <p>Finances</p>
            </LoginCard>
          </LoginCardContainer>

          <Button Component={Link} success block to="/knowledge">
            Get Guidance to a Better Life!
          </Button>
        </WidgetContent>
        <div className={cls['login-content-right']}>
          <h3 className={cls['login-headline']}>
            <Icon mr>view_list</Icon> Hitchhiker's Guide to a Better Life
          </h3>
          <p className={cls['login-description']}>
          This planet has - or rather had - a problem, which was this: most of the people living on it were unhappy for pretty much of the time. Many solutions were suggested for this problem, but most of these were largely concerned with the movement of small green pieces of paper, which was odd because on the whole it wasn't the small green pieces of paper that were unhappy.”
          </p>
          <Avatar imgUrl={images.da1} name="Douglas Adams" sm />
        </div>
      </div>
    </Widget>
    <p>
      Already on HG to a Better Life? Let us take you to <a>Sign In!</a>
    </p>
  </div>
  );
  };

export default Login;
