import React from 'react'
import {colors} from './styleGuide'

const Link = ({href, children}) => (
  <a style={{
    color: colors.normal.cyan,
    textDecoration: 'underline',
  }}>
    {children}
  </a>
)

Link.propTypes = {
  href: React.PropTypes.string.isRequired,
}

export default Link
