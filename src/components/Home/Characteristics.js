import React from 'react'
import characteristics from '../../data/characteristics'
import {spacing} from '../../data/styleGuide'
import Heading from '../Heading'

const Characteristics = () => (
  <div>
    {characteristics.map((characteristic, index) => (
      <div
        key={index}
        style={{
          marginBottom: (index + 1 < characteristics.length) ? spacing.large : 0,
        }}
      >
        <Heading level={4}>{characteristic.title}</Heading>
        <div>{characteristic.description}</div>
      </div>
    ))}
  </div>
)

export default Characteristics
