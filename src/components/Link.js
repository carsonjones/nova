import React from 'react'
import {colors} from '../styleGuide'

const Link = ({href, children}) => (
  <a 
    href={href}
    target='_blank'
    style={{
      color: colors.normal.cyan,
      textDecoration: 'none',
    }}
  >
    {children}
  </a>
)

Link.propTypes = {
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
}

export default Link
