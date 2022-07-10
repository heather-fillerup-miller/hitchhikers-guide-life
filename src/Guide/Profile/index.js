import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/* eslint-disable max-len */

import {
  Widget,
  WidgetContent,
  WidgetContainer,
  Divider,
  Select,
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
import cls from './profile.module.scss';

import optionsCountries from './assets/optionsCountries';
import optionsCities from './assets/optionsCities';
import optionsFitness from './assets/optionsFitness';
import optionsDiet from './assets/optionsDiet';

import ImgUserProfile from './assets/profilePic.jpg';

const links = [
  {
    text: 'Home',
    to: 'home'
  },
  {
    text: 'Password',
  },
  {
    text: 'Invoices',
  },
  {
    text: 'Integrations',
  },
  {
    text: 'Privacy',
  }
];

const Profile = () => {
  const [optionCountry, setOptionCountry] = useState(optionsCountries[0]);
  const [optionCity, setOptionCity] = useState(optionsCities[0]);
  const [optionFitness, setOptionFintess] = useState(optionsFitness[0]);
  const [optionDiet, setOptionDiet] = useState(optionsDiet[0])

  const onClickCountry = option => setOptionCountry(option);
  const onClickCity = option => setOptionCity(option);
  const onClickFitness = option => setOptionFintess(option);
  const onClickDiet = option => setOptionDiet(option);

  return (
    <ContainerVertical>
      <TopBar
        rightEl={
          <div className={cls['profile-user-progress-container']}>
            <p>Profile Completeness: 70%</p>
            <Progress className={cls['profile-user-progress']} fill={0.7} />
          </div>
        }
      />
      <ScrollArea>
        <div className={cls['profile-user-layout']}>
          <WidgetContainer className={cls['profile-user-sub-nav']}>
            <Widget>
              <div
                className={cls['profile-user-profile-pic']}
                style={{ backgroundImage: `url("${ImgUserProfile}")` }}
              />
              <WidgetContent className={cls['profile-user-meta']}>
                <h2>Heather Fillerup</h2>
                <p>
                  {'Dallas, TX United States'}
                  <br />
                  {'Your time: 4:32 PM (GMT-4)'}
                </p>
              </WidgetContent>
              <Divider />
              <div className={cls['profile-user-menu']}>
                <NavSection>
                  {links.map(link => (
                    <NavLinkKit
                      key={link.to}
                      Component={NavLink}
                      to={`/guide/${link.to}`}
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
                <h2>Demographics</h2>
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
                      {(optionCountry.value === 'us') && <FormGroup>
                        <Select
                          block
                          label="State"
                          options={optionsCities}
                          onOptionClick={onClickCity}
                          activeOption={optionCity}
                          placeholder="Action"
                          position="bottomRight"
                        />
                      </FormGroup>}
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
                <h2>Life Goals</h2>
                <p>
                  Choose life goals that you are currently interested in. These options will personalize your suggested actions and motivational videos.
                </p>
              </WidgetContent>
              <form onSubmit={() => {}}>
                <Divider />
                <WidgetContent>
                  <FormGroupContainer horizontal>
                    <FormGroupContainer className={cls['profile-user-goals']}>
                      <h3>Health</h3>
                      <FormGroup>
                        <h6>Fitness
                        <Select 
                          block
                          activeOption={optionFitness}
                          onOptionClick={onClickFitness}
                          options={optionsFitness}
                        />
                        </h6>
                        <h6>Diet
                        <Select 
                          block
                          activeOption={optionDiet}
                          onOptionClick={onClickDiet}
                          options={optionsDiet}
                        />
                        </h6>
                      </FormGroup>
                    </FormGroupContainer>
                    <FormGroupContainer>
                      <h3>Stress</h3>
                      <Checkbox label="Spirtual" name="[stress]spritual" />
                      <Checkbox
                        defaultChecked
                        label="Meditation"
                        name="[stress]meditate"
                      />
                      <Checkbox label="Yoga" name="[stress]yoga" />
                    </FormGroupContainer>
                    <FormGroupContainer>
                      <h3>Finances</h3>
                      <Checkbox label="Stock Investing" name="[finances]invest" />
                      <Checkbox
                        defaultChecked
                        label="Career Advancement"
                        name="[finances]career"
                      />
                      <Checkbox label="Cryptocurrency Investing" name="[finances]crypto" />
                    </FormGroupContainer>
                  </FormGroupContainer>
                </WidgetContent>
                <WidgetContent>
                  <Button success >Save Settings</Button>
                </WidgetContent>
              </form>
            </Widget>
          </WidgetContainer>
        </div>
      </ScrollArea>
    </ContainerVertical>
  );
};

export default Profile;
