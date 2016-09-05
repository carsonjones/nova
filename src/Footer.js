import React from 'react'
import {colors, spacing} from './styleGuide'
import contributors from './contributors'
import Link from './Link'
import Icon from './Icon'

const Love = () => (
  <Icon
    type='heart'
    fill={colors.normal.red}
    style={{
      marginLeft: spacing.xsmall,
      marginRight: spacing.xsmall,
    }}
  />
)

const Footer = () => (
  <footer style={{
    background: colors.decoration.medium,
    color: colors.normal.cyan,
    padding: spacing.container,
    marginTop: spacing.medium,
    textAlign: 'center',
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 7,
    }}>
      Built with <Love /> by
    </div>
    {contributors.map(contributor => (
      <div key={contributor.handle}>
        <Link href={contributor.url}>
          {contributor.handle}
        </Link>
      </div>
    ))}
  </footer>
)

export default Footer
