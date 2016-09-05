import React from 'react'
import {fontSizes, fontWeights, spacing} from './styleGuide'

const Subtitle = ({children}) => (
  <h2 style={{
    fontSize: fontSizes.large,
    fontWeight: fontWeights.light,
    marginTop: spacing.medium,
    marginBottom: spacing.medium,
    textAlign: 'center',
  }}>
    {children}
  </h2>
)

Subtitle.propTypes = {
  children: React.PropTypes.string.isRequired,
}

export default Subtitle
