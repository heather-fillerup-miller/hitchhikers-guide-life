import React from 'react'

import {
  TopBarSection,
  TopBarTitle,
} from '@duik/it'

import Template from '../../../components/TopBar'


const SettingsListingTopBar = props => (
  <Template { ...props }>
    <TopBarSection>
      <TopBarTitle>
        Settings
      </TopBarTitle>
    </TopBarSection>
  </Template>
)


export default SettingsListingTopBar
