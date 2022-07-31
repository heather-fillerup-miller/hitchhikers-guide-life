import React from 'react'

import {
  TopBarSection,
  TopBarTitle,
} from '@duik/it'

import TopBarTemplate from '../ProfileOptions'


export const TopBar = props => (
  <TopBarTemplate { ...props } >
    <TopBarSection>
      <TopBarTitle>
        Profile Settings
      </TopBarTitle>
    </TopBarSection>
  </TopBarTemplate>
)


export default TopBar
