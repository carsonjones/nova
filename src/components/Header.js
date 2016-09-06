import React from 'react'
import about from '../data/about'
import {spacing} from '../styleGuide'
import Title from './Title'
import Subtitle from './Subtitle'

const Header = () => (
  <header style={{
    padding: spacing.container,
  }}>
    <Title>{about.title}</Title>
    <Subtitle>{about.description}</Subtitle>
  </header>
)

export default Header
