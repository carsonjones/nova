import React from 'react'
import about from '../data/about'
import Section from './Section'
import Heading from './Heading'
import Contributors from './Contributors'
import ExampleCode from './ExampleCode'

const Header = () => (
  <Section>
    <header>
      <Heading level={1}>
        {about.title}
      </Heading>
      <Heading level={2}>
        {about.description}
      </Heading>
      <Contributors />
      <ExampleCode />
    </header>
  </Section>
)

export default Header
