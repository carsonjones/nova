import React from 'react'
import contributors from '../data/contributors'
import {colors, spacing} from '../data/styleGuide'
import Link from './Link'
import Icon from './Icon'

const Footer = () => (
  <footer style={{
    padding: spacing.container,
    textAlign: 'center',
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spacing.xsmall,
    }}>
      // Built with 
      <div style={{
        marginLeft: spacing.xsmall,
        marginRight: spacing.xsmall,
        display: 'flex',
        alignItems: 'center',
      }}>
        <Icon
          type='heart'
          fill={colors.normal.red}
        />
      </div>
      by
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
