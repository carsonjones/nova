import React from 'react'
import {
  colors,
  fontSizes,
  fontWeights,
  spacing,
} from './styleGuide'

const SubsectionTitle = ({children}) => (
  <h4 style={{
    color: colors.normal.cyan,
    fontSize: fontSizes.large,
    fontWeight: fontWeights.light,
    marginTop: 0,
    marginBottom: spacing.xsmall,
  }}>
    {children}
  </h4>
)

SubsectionTitle.propTypes = {
  children: React.PropTypes.string.isRequired,
}

export default SubsectionTitle
