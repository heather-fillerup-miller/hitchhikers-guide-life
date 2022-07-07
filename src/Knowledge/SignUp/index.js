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
          <h2>Create Your Account</h2>
          <p className={cls['signup-description']}>
            Get started with Buildings and rent with love!
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
          <h3 className={cls['signup-headline']}>What are you looking for?</h3>
          <LoginCardContainer>
            <LoginCard isSelected>
              <Icon>wallet</Icon>
              <p>Rent</p>
            </LoginCard>
            <LoginCard>
              <Icon>lightbulb</Icon>
              <p>Co-work</p>
            </LoginCard>
            <LoginCard>
              <Icon>rocket</Icon>
              <p>Invest</p>
            </LoginCard>
          </LoginCardContainer>

          <Button Component={Link} success block to="/knowledge">
            Get Started With Buildings!
          </Button>
        </WidgetContent>
        <div className={cls['signup-content-right']}>
          <h3 className={cls['signup-headline']}>
            <Icon mr>building</Icon> Buildings
          </h3>
          <p className={cls['signup-description']}>
            Architecture begins when you place two bricks carefully together.
          </p>
          <Avatar imgUrl={images.a11} name="Ludwig Mies van der Rohe" sm />
        </div>
      </div>
    </Widget>
    <p>
      Already on Buildings? Let us take you to <a>Sign In!</a>
    </p>
  </div>
);

export default SignUp;
