import React from 'react'
import colorMeanings from '../../data/colorMeanings'
import {spacing, screenSizes} from '../../data/styleGuide'
import ColorTile from './ColorTile'

const Colors = () => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
  }}>
    {colorMeanings.map((group, index) => (
      <div
        key={index}
        style={{
          minWidth: (screenSizes.small) - (spacing.small * 2) - (spacing.large * 2),
          marginBottom: (index + 1 < colorMeanings.length) ? spacing.xsmall : 0,
        }}
      >
        {group.map((color, index) => (
          <div
            key={index}
            style={{
              marginBottom: (index + 1 < group.length) ? spacing.xsmall : 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{
              marginRight: spacing.small,
            }}>
              <ColorTile
                color={color.value}
                size={39}
              />
            </div>
            <div>
              {color.meaning}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
)

export default Colors
