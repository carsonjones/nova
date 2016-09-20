import React from 'react'
import contributing from '../../data/contributing'
import {spacing, colors} from '../../data/styleGuide'
import Heading from '../Heading'
import List from '../List'

const Contributing = () => (
  <div>
    {contributing.types.map((type, index) => (
      <div
        key={index}
        style={{
          marginBottom: (index + 1 < contributing.types.length) ? spacing.medium : 0,
        }}
      >
        <Heading level={4}>
          {type.title}
        </Heading>
        {type.prerequisites
          ? <div style={{
              color: colors.bright.red,
            }}>
              {type.prerequisites}
            </div>
          : null
        }
        <List
          items={type.steps}
          type='number'
        />
      </div>
    ))}
  </div>
)

export default Contributing
