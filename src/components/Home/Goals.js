import React from 'react'
import goals from '../../data/goals'
import {spacing} from '../../data/styleGuide'
import Heading from '../Heading'
import Well from '../Well'

const Goals = () => (
  <div>
    {goals.map((goal, index) => (
      <div
        key={index}
        style={{
          marginBottom: (index + 1 < goals.length) ? spacing.medium : 0,
        }}
      >
        <Well>
          <Heading level={4}>{goal.title}</Heading>
          <div>{goal.description}</div>
        </Well>
      </div>
    ))}
  </div>
)

export default Goals
