import React from 'react'
import {
  colors,
  fontSizes,
  spacing,
  lineHeights,
} from '../data/styleGuide'

export const levelSpecificStyles = {
  1: {
    color: colors.normal.cyan,
    fontSize: fontSizes.xxlarge,
    lineHeight: lineHeights.xxlarge,
    textAlign: 'center',
  },
  2: {
    color: colors.normal.white,
    fontSize: fontSizes.large,
    textAlign: 'center',
    marginBottom: spacing.medium,
  },
  3: {
    color: colors.normal.white,
    fontSize: fontSizes.medium,
    textTransform: 'uppercase',
    marginBottom: spacing.small,
  },
  4: {
    color: colors.normal.cyan,
    fontSize: fontSizes.xlarge,
    lineHeight: 1,
    marginBottom: spacing.xsmall,
  },
}

const Heading = ({
  children,
  level,
}) => (
  <div style={levelSpecificStyles[level]}>
    {children}
  </div>
)

Heading.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]).isRequired,
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
}

export default Heading
