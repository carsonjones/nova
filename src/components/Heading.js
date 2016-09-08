import React from 'react'
import {
  colors,
  fontSizes,
  spacing,
} from '../data/styleGuide'

const levelSpecificStyles = {
  1: {
    color: colors.normal.cyan,
    fontSize: fontSizes.xxlarge,
    textAlign: 'center',
  },
  2: {
    color: colors.normal.white,
    fontSize: fontSizes.large,
    textAlign: 'center',
  },
  3: {
    color: colors.normal.white,
    fontSize: fontSizes.large,
    textTransform: 'uppercase',
    marginBottom: spacing.medium,
  },
  4: {
    color: colors.normal.cyan,
    fontSize: fontSizes.xlarge,
    marginBottom: spacing.small,
  },
  5: {
    color: colors.bright.white,
    fontSize: fontSizes.medium,
    marginBottom: spacing.small,
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
  children: React.PropTypes.string.isRequired,
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
}

export default Heading
