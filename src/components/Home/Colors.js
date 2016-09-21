import React from 'react'
import colorMeanings from '../../data/colorMeanings'
import {spacing, fontSizes} from '../../data/styleGuide'
import ColorTile from './ColorTile'

const tileWidth = 72

const Colors = () => (
  <div>
    {colorMeanings.map((group, index) => (
      <div
        key={index}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {group.map((color, index) => (
          <div
            key={index}
            style={{
              marginRight: (index + 1 < group.length) ? spacing.medium : 0,
              marginBottom: (index + 1 < group.length) ? spacing.large : 0,
              textAlign: 'center',
              width: tileWidth,
            }}
          >
            <div style={{
              marginBottom: spacing.small,
            }}>
              <ColorTile
                color={color.value}
                size={tileWidth}
              />
            </div>
            <div style={{
              fontSize: fontSizes.small,
            }}>
              {color.meaning}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
)

export default Colors
