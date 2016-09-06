import React from 'react'
import {
  colors,
  spacing,
  borderRadii,
} from '../styleGuide'
import SubsectionTitle from './SubsectionTitle'

const Point = ({point}) => (
  <div style={{
    background: colors.decoration.medium,
    marginTop: spacing.medium,
    padding: spacing.small,
    borderRadius: borderRadii.large,
  }}>
    <SubsectionTitle>{point.title}</SubsectionTitle>
    <div>{point.description}</div>
  </div>
)

SubsectionTitle.propTypes = {
  point: React.PropTypes.object.isRequired,
}

export default Point
