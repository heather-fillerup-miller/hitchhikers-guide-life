import React from 'react'
import classnames from 'classnames'
import Icon from '@duik/icon'

import cls from './signup-card.module.scss'


const signupCard = ({
  children,
  className,
  isSelected,
  ...rest
}) => (
  <button
    className={ classnames(cls['signup-card'], className, {
      [cls['signup-card-selected']]: isSelected,
    }) }
    type="button"
    { ...rest }
  >
    {children}
    <Icon className={ cls['signup-card-check'] }>
      check
    </Icon>
  </button>
)


signupCard.defaultProps = {
  className: null,
  isSelected: false,
}

export default signupCard
