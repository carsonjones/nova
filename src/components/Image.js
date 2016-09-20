import React from 'react'
import {colors, borderRadii, borderSizes} from '../data/styleGuide'
import Link from './Link'

const Section = ({src, quiet = false}) => (
  <Link href={src}>
    <img
      style={{
        border: quiet ? 0 : `${borderSizes.small}px solid ${colors.decoration.light}`,
        borderRadius: borderRadii.medium,
        width: '100%',
      }}
      src={src}
      role='presentation'
    />
  </Link>
)

Section.propTypes = {
  src: React.PropTypes.string.isRequired,
}

export default Section
