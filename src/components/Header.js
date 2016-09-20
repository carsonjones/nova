import React from 'react'
import {spacing} from '../data/styleGuide'
import Intro from './Intro'

const Header = ({onIntroEnd}) => (
  <div style={{
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
  }}>
    <header>
      <Intro onIntroEnd={onIntroEnd} />
    </header>
  </div>
)

export default Header
