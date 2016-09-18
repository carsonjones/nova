import React from 'react'
import {colors, spacing} from '../../data/styleGuide'
import ColorTile from './ColorTile'

const orderedColors = [
  [
    colors.normal.cyan,
    colors.normal.blue,
    colors.normal.magenta,
    colors.bright.magenta,
    colors.normal.red,
    colors.bright.red,
    colors.normal.yellow,
    colors.normal.green,
  ],
  [
    colors.decoration.dark,
    colors.normal.black,
    colors.decoration.medium,
    colors.decoration.light,
    colors.bright.black,
    colors.normal.white,
    colors.bright.white,
  ],
]

const Colors = () => (
  <div>
    {orderedColors.map((row, index) => (
      <div 
        key={index}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {row.map((cell, index) => (
          <div
            key={index}
            style={{
              marginRight: (index + 1 < row.length) ? spacing.small : 0,
              marginBottom: spacing.small,
            }}
          >
            <ColorTile color={cell} />
          </div>
        ))}
      </div>
    ))}
  </div>
)

export default Colors
