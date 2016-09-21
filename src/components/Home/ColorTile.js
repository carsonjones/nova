import React from 'react'
import {borderRadii} from '../../data/styleGuide'

const ColorTile = ({
  color,
  size,
}) => (
  <div style={{
    background: color,
    borderRadius: borderRadii.medium,
    width: size,
    height: size,
  }} />
)

ColorTile.propTypes = {
  color: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired,
}

export default ColorTile
