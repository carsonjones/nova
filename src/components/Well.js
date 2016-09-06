import React from 'react'
import {
  colors,
  spacing,
  borderRadii,
} from '../data/styleGuide'

const Well = ({children}) => (
  <div style={{
    background: colors.normal.black,
    padding: spacing.medium,
    borderRadius: borderRadii.large,
    textAlign: 'center',
  }}>
    {children}
  </div>
)

Well.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Well
