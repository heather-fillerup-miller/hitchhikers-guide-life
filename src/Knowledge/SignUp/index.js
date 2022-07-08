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
import cls from './buildings-signup.module.scss';

import LoginCard from './components/Card';
import LoginCardContainer from './components/CardContainer';

const SignUp = () => (
  <div className={cls['page-signup-wrapper']}>
    <Widget className={cls['signup-widget-wrapper']}>
      <div className={cls['signup-content']}>
        <WidgetContent className={cls['signup-content-left']}>
          <h2>Create an an Account</h2>
          <p className={cls['signup-description']}>
            Become a healthier version of you!
          </p>
          <FormGroupContainer>
            <FormGroupContainer horizontal>
              <FormGroup>
                <TextField label="Name" name="name" />
              </FormGroup>
              <FormGroup>
                <TextField label="Surname" name="surname" />
              </FormGroup>
            </FormGroupContainer>

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
          <h3 className={cls['signup-headline']}>What do you want to improve?</h3>
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
        <div className={cls['signup-content-right']}>
          <h3 className={cls['signup-headline']}>
            <Icon mr>view_list</Icon> Hitchhiker's Guide to a Better Life
          </h3>
          <p className={cls['signup-description']}>
          All you really need to know for the moment is that the universe is a lot more complicated than you might think, even if you start from a position of thinking it’s pretty damn complicated in the first place.
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

export default SignUp;
