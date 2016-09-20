import React from 'react'
import contributors from '../../data/contributors'
import {
  colors,
  spacing,
  fontSizes,
  opacities,
} from '../../data/styleGuide'
import Icon from '../Icon'
import Link from '../Link'

const Contributors = () => (
  <div style={{
    textAlign: 'center',
    fontSize: fontSizes.small,
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
          size={fontSizes.medium}
        />
      </div>
      by
    </div>
    <div style={{
      opacity: opacities.subtle,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      {contributors.map((contributor, index) => (
        <span
          key={index}
          style={{
            marginRight: (index + 1 < contributors.length) ? spacing.medium : 0,
          }}
        >
          <Link
            href={contributor.url}
            inline={true}
          >
            {contributor.handle}
          </Link>
        </span>
      ))}
    </div>
  </div>
)

export default Contributors
