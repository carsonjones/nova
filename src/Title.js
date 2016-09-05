import React from 'react'
import {colors, fontSizes, fontWeights, spacing} from './styleGuide'

const Title = ({children}) => (
  <h1 style={{
    color: colors.normal.cyan,
    fontSize: fontSizes.xlarge,
    fontWeight: fontWeights.light,
    marginTop: spacing.large,
    marginBottom: spacing.large,
    textAlign: 'center',
  }}>
    {children}
  </h1>
)

Title.propTypes = {
  children: React.PropTypes.string.isRequired,
}

export default Title
