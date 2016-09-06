import React from 'react'
import {
  colors,
  fontSizes,
  fontWeights,
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
    color: colors.normal.yellow,
    fontSize: fontSizes.xlarge,
    marginBottom: spacing.medium,
    textAlign: 'left',
  },
  4: {
    color: colors.normal.cyan,
    fontSize: fontSizes.large,
    marginBottom: spacing.small,
    textAlign: 'center',
  },
  5: {
    color: colors.bright.red,
    fontSize: fontSizes.medium,
    marginBottom: spacing.small,
    textAlign: 'left',
    textTransform: 'uppercase',
    textDecoration: 'underline',
  },
}

const Heading = ({
  children,
  level,
}) => (
  <div style={{
    fontWeight: fontWeights.light,
    ...levelSpecificStyles[level],
  }}>
    {children}
  </div>
)

Heading.propTypes = {
  children: React.PropTypes.string.isRequired,
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
}

export default Heading
