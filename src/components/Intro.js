import React from 'react'
import Typist from 'react-typist';
import about from '../data/about'
import Heading from './Heading'

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 0,
}

const Intro = ({onIntroEnd}) => (
  <div>
    <Heading level={1}>
      <Typist
        cursor={cursor}
        startDelay={500}
        avgTypingDelay={200}
      >
        {about.title}
      </Typist>
    </Heading>
    <Heading level={2}>
      <Typist
        cursor={cursor}
        startDelay={1500}
        avgTypingDelay={60}
        onTypingDone={onIntroEnd}
      >
        {about.description}
      </Typist>
    </Heading>
  </div>
)

Intro.propTypes = {
  onIntroEnd: React.PropTypes.func.isRequired,
}

export default Intro
