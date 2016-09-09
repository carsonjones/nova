import React from 'react'
import {colors} from '../data/styleGuide'
import graphics from '../data/graphics'

const Icon = ({
  type,
  fill = colors.normal.white,
  size = '100%',
}) => (
  <svg
    viewBox={`0 0 ${graphics[type].viewBox} ${graphics[type].viewBox}`}
    fill={fill}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    {graphics[type].elements}
  </svg>
)

Icon.propTypes = {
  type: React.PropTypes.oneOf(Object.keys(graphics)).isRequired,
  fill: React.PropTypes.string,
  size: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]),
}

export default Icon
