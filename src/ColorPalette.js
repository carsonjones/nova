import React from 'react'
import {colors} from './styleGuide'
import ColorTile from './ColorTile'

const ColorPalette = () => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <ColorTile color={colors.decoration.dark} />
    <ColorTile color={colors.normal.black} />
    <ColorTile color={colors.decoration.medium} />
    <ColorTile color={colors.decoration.light} />
    <ColorTile color={colors.bright.black} />
    <ColorTile color={colors.normal.white} />
    <ColorTile color={colors.bright.white} />
    <ColorTile color={colors.normal.red} />
    <ColorTile color={colors.bright.red} />
    <ColorTile color={colors.normal.yellow} />
    <ColorTile color={colors.normal.green} />
    <ColorTile color={colors.normal.cyan} />
    <ColorTile color={colors.normal.blue} />
    <ColorTile color={colors.normal.magenta} />
    <ColorTile color={colors.bright.magenta} />
  </div>
)

export default ColorPalette
