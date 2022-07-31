import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

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

import { TopBar } from '@components';
import cls from './profile.module.scss';

import optionsCountries from './assets/optionsCountries';
import optionsCities from './assets/optionsCities';
import optionsFitness from './assets/optionsFitness';
import optionsDiet from './assets/optionsDiet';
import * as images from '@images';

const links = [
  {
    text: 'Home',
    id: 1,
    to: 'home'
  },
  {
    text: 'Password',
    id: 2,
    to: 'home'
  },
  {
    text: 'Invoices',
    id: 3,
    to: 'home'
  },
  {
    text: 'Integrations',
    id: 4,
    to: 'home'
  },
  {
    text: 'Privacy',
    id: 5,
    to: 'home'
  }
];

const Profile = () => {
  const [optionCountry, setOptionCountry] = useState(optionsCountries[0]);
  const [optionCity, setOptionCity] = useState(optionsCities[0]);
  const [optionFitness, setOptionFitness] = useState(optionsFitness[0]);
  const [optionDiet, setOptionDiet] = useState(optionsDiet[0]);
  const [goalAlert, setGoalAlert] = useState(false);

  const onClickCountry = option => setOptionCountry(option);
  const onClickCity = option => setOptionCity(option);
  const onClickFitness = option => setOptionFitness(option);
  const onClickDiet = option => setOptionDiet(option);
  const onClickGoals = option => setGoalAlert(!goalAlert);

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
                style={{ backgroundImage: `url("${images.profilePic}")` }}
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
                      key={link.id}
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
              <form onSubmit={() => { }}>
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
              {goalAlert && <WidgetContent>
                <FormGroupContainer className={cls['profile-user-alert']}>
                  <h3>Are you sure you want to update your Goals?</h3>
                  <p>Changing your settings will change your suggested actions and plans...</p>
                  <Button onClick={onClickGoals}>Yes, please update my Goals!</Button>
                  <Button onClick={onClickGoals}>On second thought, please cancel my changes.</Button>
                </FormGroupContainer>


              </WidgetContent>}
              {!goalAlert && <form>
                <Divider />
                <WidgetContent>
                  <FormGroupContainer horizontal>
                    <FormGroupContainer className={cls['profile-user-goals']}>
                      <h3>Health</h3>
                      <FormGroup>
                      <h6>Diet</h6>
                        <Select
                          className={cls['profile-user-fitnessSelect']}
                          activeOption={optionDiet}
                          onOptionClick={onClickDiet}
                          options={optionsDiet}
                        />
                        <Button clear> View Current Fitness Plan</Button>
                        <h6>Fitness</h6>
                        <Select
                          className={cls['profile-user-fitnessSelect']}
                          activeOption={optionFitness}
                          onOptionClick={onClickFitness}
                          options={optionsFitness}
                        />
                        <Button Component={Link} to='/guide/diet' clear> View Current Meal Plan</Button>
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
                      <Button clear> View Current Stress Relief Plan</Button>
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
                      <Button clear> View Current Finance Plan</Button>
                    </FormGroupContainer>
                  </FormGroupContainer>
                </WidgetContent>
                <WidgetContent>
                  <Button success onClick={onClickGoals}>Save Settings</Button>
                </WidgetContent>
              </form>}
            </Widget>
          </WidgetContainer>
        </div>
      </ScrollArea>
    </ContainerVertical>
  );
};

export default Profile;
