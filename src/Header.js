import React from 'react'
import {spacing} from './styleGuide'
import Title from './Title'
import Subtitle from './Subtitle'

const Header = () => (
  <header style={{
    padding: spacing.container,
  }}>
    <Title>Nova</Title>
    <Subtitle>A modern programming color scheme</Subtitle>
  </header>
)

export default Header
