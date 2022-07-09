import React from 'react'

import {
  TopBarSection,
  TopBarTitle,
} from '@duik/it'

import TopBarTemplate from '../ProfileOptions'


const SettingsListingTopBar = props => (
  <TopBarTemplate { ...props } >
    <TopBarSection>
      <TopBarTitle>
        Profile Settings
      </TopBarTitle>
    </TopBarSection>
  </TopBarTemplate>
)


export default SettingsListingTopBar
