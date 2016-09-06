import React from 'react'
import {spacing, borderRadii} from './styleGuide'

const ColorTile = ({
  color,
  size = 40,
}) => (
  <div style={{
    background: color,
    margin: spacing.xsmall,
    borderRadius: borderRadii.medium,
    width: size,
    height: size,
  }} />
)

ColorTile.propTypes = {
  color: React.PropTypes.string.isRequired,
  size: React.PropTypes.number,
}

export default ColorTile
