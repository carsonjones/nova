import React from 'react'
import {colors} from './styleGuide'

const Link = ({href, children}) => (
  <a style={{
    color: colors.normal.yellow,
    textDecoration: 'none',
  }}>
    {children}
  </a>
)

Link.propTypes = {
  href: React.PropTypes.string.isRequired,
}

export default Link
