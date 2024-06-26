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

import * as images from '@images';
import cls from './signup.module.scss';

import { Card, CardContainer } from '@components';

const SignUp = () => {
  return (
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
          <CardContainer>
            <Card isSelected>
              <Icon>love</Icon>
              <p>Health</p>
            </Card>
            <Card>
              <Icon>smile</Icon>
              <p>Stress</p>
            </Card>
            <Card>
              <Icon>wallet</Icon>
              <p>Finances</p>
            </Card>
          </CardContainer>

          <Button Component={Link} success block to="/guide/home">
            Get Guidance to a Better Life!
          </Button>
        </WidgetContent>
        <div className={cls['signup-content-right']}>
          <h3 className={cls['signup-headline']}>
            <Icon mr>view_list</Icon> Hitchhiker's Guide to a Better Life
          </h3>
          <p className={cls['signup-description']}>
          All you really need to know for the moment is that the universe is a lot more complicated than you might think, 
          even if you start from a position of thinking it’s pretty damn complicated in the first place.
          </p>
          <Avatar imgUrl={images.da1} name="Douglas Adams" sm />
        </div>
      </div>
    </Widget>
    <p>
      Already on HG to a Better Life? Let us take you to <Button Component={Link} sm block to="/guide/login">
            Login <Icon ml>profile_round</Icon>
          </Button>
    </p>
  </div>
  );
  };

export default SignUp;
