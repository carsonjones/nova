import React from 'react'
import {spacing} from '../styleGuide'
import Point from './Point'

const Points = ({points}) => (
  <section style={{
    marginTop: spacing.medium,
    marginBottom: spacing.medium,
  }}>
    {points.map(point => (
      <Point point={point} />
    ))}
  </section>
)

Points.propTypes = {
  points: React.PropTypes.array.isRequired,
}

export default Points
