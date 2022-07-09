import React from 'react';
import { NavLink } from 'react-router-dom';

/* eslint-disable max-len */

import {
  Widget,
  WidgetContent,
  WidgetContainer,
  Select,
  Divider,
  NavLink as NavLinkKit,
  NavSection,
  FormGroupContainer,
  FormGroup,
  TextField,
  Button,
  Checkbox,
  ContainerVertical,
  ScrollArea,
  Progress
} from '@duik/it';

import TopBar from './components/TopBar';
import cls from './user.module.scss';

import optionsCountries from './assets/optionsCountries';
import optionsCities from './assets/optionsCities';

import ImgUserProfile from './assets/profilePic.jpg';

const links = [
  {
    text: 'Account Settings',
    to: '/settings'
  },
  {
    text: 'Teams',
    to: '/teams'
  },
  {
    text: 'Password',
    to: '/password'
  },
  {
    text: 'Invoices',
    to: '/invoices'
  },
  {
    text: 'Integrations',
    to: '/integrations'
  },
  {
    text: 'Privacy',
    to: '/privacy'
  }
];

const SettingsDashboard = () => {
  const [optionCountry, setOptionCountry] = React.useState(optionsCountries[0]);
  const [optionCity, setOptionCity] = React.useState(optionsCities[0]);

  const onClickCountry = option => setOptionCountry(option);
  const onClickCity = option => setOptionCity(option);

  return (
    <ContainerVertical>
      <TopBar
        rightEl={
          <div className={cls['guide-user-progress-container']}>
            <p>Profile Completeness: 70%</p>
            <Progress className={cls['guide-user-progress']} fill={0.7} />
          </div>
        }
      />
      <ScrollArea>
        <div className={cls['guide-user-layout']}>
          <WidgetContainer className={cls['guide-user-sub-nav']}>
            <Widget>
              <div
                className={cls['guide-user-profile-pic']}
                style={{ backgroundImage: `url("${ImgUserProfile}")` }}
              />
              <WidgetContent className={cls['guide-user-meta']}>
                <h2>Heather Fillerup</h2>
                <p>
                  {'Dallas, TX United States'}
                  <br />
                  {'Your time: 4:32 PM (GMT-4)'}
                </p>
              </WidgetContent>
              <Divider />
              <div className={cls['guide-user-menu']}>
                <NavSection>
                  {links.map(link => (
                    <NavLinkKit
                      key={link.to}
                      Component={NavLink}
                      to={`/guide/user${link.to}`}
                    >
                      {link.text}
                    </NavLinkKit>
                  ))}
                </NavSection>
              </div>
            </Widget>
          </WidgetContainer>
          <WidgetContainer>
            <Widget>
              <WidgetContent>
                <h3>Demographics</h3>
              </WidgetContent>
              <Divider />
              <form onSubmit={() => {}}>
                <WidgetContent>
                  <FormGroupContainer>
                    <FormGroupContainer horizontal>
                      <FormGroup>
                        <TextField
                          defaultValue="Heather"
                          label="First Name"
                          name="first_name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <TextField
                          defaultValue="Fillerup"
                          label="Last Name"
                          name="last_name"
                        />
                      </FormGroup>
                    </FormGroupContainer>
                    <FormGroupContainer horizontal>
                      <FormGroup>
                        <TextField
                          defaultValue="heather.fillerup@email.com"
                          label="Email Address"
                          name="email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <TextField
                          label="Phone Number"
                          name="phone"
                          placeholder="+1-000-000-0000"
                        />
                      </FormGroup>
                    </FormGroupContainer>
                    <FormGroupContainer horizontal>
                      <FormGroup>
                        <Select
                          block
                          label="Country"
                          activeOption={optionCountry}
                          options={optionsCountries}
                          onOptionClick={onClickCountry}
                          placeholder="Action"
                          position="bottomRight"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Select
                          block
                          label="City"
                          options={optionsCities}
                          onOptionClick={onClickCity}
                          activeOption={optionCity}
                          placeholder="Action"
                          position="bottomRight"
                        />
                      </FormGroup>
                    </FormGroupContainer>
                  </FormGroupContainer>
                </WidgetContent>
                <WidgetContent>
                  <Button success>Save Settings</Button>
                </WidgetContent>
              </form>
            </Widget>
            <Widget>
              <WidgetContent>
                <h3>Life Goals</h3>
                <p>
                  Choose life goals that you are currently interested in. These options will personalize your suggested actions and motivational videos.
                </p>
              </WidgetContent>
              <form onSubmit={() => {}}>
                <Divider />
                <WidgetContent>
                  <FormGroupContainer horizontal>
                    <FormGroupContainer>
                      <h4>Fitness</h4>
                      <Checkbox
                        defaultChecked
                        label="Weight Loss"
                        name="[fitness]weight-loss"
                      />
                      <Checkbox
                        label="Strength Training"
                        name="[fintess]strenght-training"
                      />
                      <Checkbox label="Vegetarian Diet" name="[fintess]vegetarian" />
                      <Checkbox label="Vegan Diet" name="[fintess]vegan" />
                      <Checkbox label="Keto Diet" name="[fintess]keto" />
                      <Checkbox label="Mediterranean Diet" name="[fintess]med" />
                    </FormGroupContainer>
                    <FormGroupContainer>
                      <h4>Mental</h4>
                      <Checkbox label="Email" name="[messages]email" />
                      <Checkbox
                        defaultChecked
                        description="For your mobile or tablet device"
                        label="Push Notifications"
                        name="[messages]push"
                      />
                      <Checkbox label="Text Messages" name="[messages]text" />
                    </FormGroupContainer>
                    <FormGroupContainer>
                      <h4>Financial</h4>
                      <Checkbox label="Email" name="[messages]email" />
                      <Checkbox
                        defaultChecked
                        description="For your mobile or tablet device"
                        label="Push Notifications"
                        name="[messages]push"
                      />
                      <Checkbox label="Text Messages" name="[messages]text" />
                    </FormGroupContainer>
                  </FormGroupContainer>
                </WidgetContent>
                <WidgetContent>
                  <Button transparent>Save Settings</Button>
                </WidgetContent>
              </form>
            </Widget>
          </WidgetContainer>
        </div>
      </ScrollArea>
    </ContainerVertical>
  );
};

export default SettingsDashboard;
