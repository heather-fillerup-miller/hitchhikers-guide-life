import React from 'react';
import * as images from '@exampleAssets';
import cls from './selectcountry.module.scss';

export default [
  {
    value: 'us',
    label: (
      <span className={cls['select-option-country-content']}>
        <img
          alt="english"
          className={cls['select-option-flag']}
          src={images.fUnitedStates}
        />
        Menu
      </span>
    )
  },
  {
    value: 'czech',
    label: (
      <span className={cls['select-option-country-content']}>
        <img
          alt="english"
          className={cls['select-option-flag']}
          src={images.fCzechia}
        />
        Home
      </span>
    )
  },
  {
    value: 'czech',
    label: (
      <span className={cls['select-option-country-content']}>
        <img
          alt="english"
          className={cls['select-option-flag']}
          src={images.fCzechia}
        />
        Help & Support
      </span>
    )
  },
  {
    value: 'tuvalu',
    label: (
      <span className={cls['select-option-country-content']}>
        <img
          alt="tuvalu"
          className={cls['select-option-flag']}
          src={images.fTuvalu}
        />
        Logout
      </span>
    )
  },
];
