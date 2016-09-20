import React from 'react'
import {colors} from '../data/styleGuide'

const Link = ({
  href,
  children,
  inline = false,
}) => (
  <a 
    href={href}
    target='_blank'
    style={{
      color: colors.normal.blue,
      textDecoration: 'none',
      display: inline ? 'inline' : 'block',
    }}
  >
    {children}
  </a>
)

Link.propTypes = {
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]).isRequired,
  inline: React.PropTypes.bool,
}

export default Link
