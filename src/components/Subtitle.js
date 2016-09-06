import React from 'react'
import {
  fontSizes,
  fontWeights,
  spacing,
} from '../styleGuide'

const Subtitle = ({children}) => (
  <h2 style={{
    fontSize: fontSizes.xlarge,
    fontWeight: fontWeights.light,
    marginTop: 0,
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
