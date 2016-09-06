import React from 'react'
import about from '../data/about'
import {spacing} from '../data/styleGuide'
import Heading from './Heading'

const Header = () => (
  <header style={{
    padding: spacing.container,
  }}>
    <Heading level={1}>
      {about.title}
    </Heading>
    <Heading level={2}>
      {about.description}
    </Heading>
  </header>
)

export default Header
