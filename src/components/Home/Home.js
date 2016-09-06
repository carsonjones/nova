import React from 'react'
import Section from '../Section'
import ColorPalette from './ColorPalette'
import Goals from './Goals'
import Platforms from './Platforms'

const sections = [
  {
    title: 'Color Palette',
    elements: <ColorPalette />,
  },
  {
    title: 'Goals',
    elements: <Goals />,
  },
  {
    title: 'Platforms',
    elements: <Platforms />,
  },
];

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
