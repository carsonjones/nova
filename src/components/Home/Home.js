import React from 'react'
import Section from '../Section'
import Colors from './Colors'
import Characteristics from './Characteristics'
import Platforms from './Platforms'

const sections = [
  {
    title: 'Colors',
    elements: <Colors />,
  },
  {
    title: 'Characteristics',
    elements: <Characteristics />,
  },
  {
    elements: <Platforms />,
  },
]

const Home = () => (
  <div>
    {sections.map((section, index) => (
      <Section
        key={index}
        title={section.title}
      >
        {section.elements}
      </Section>
    ))}
  </div>
)

export default Home
