import React from 'react'
import {spacing} from '../data/styleGuide'
import Heading from './Heading'

const Section = ({children, title}) => (
  <section style={{
    padding: spacing.container,
  }}>
    <Heading level={3}>
      {title}
    </Heading>
    {children}
  </section>
)

Section.propTypes = {
  children: React.PropTypes.node.isRequired,
  title: React.PropTypes.string.isRequired,
}

export default Section
