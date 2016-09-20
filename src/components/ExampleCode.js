import React from 'react'
import exampleCode from '../data/exampleCode.png'
import {spacing} from '../data/styleGuide'
import Image from './Image'

const ExampleCode = () => (
  <div style={{
    marginTop: spacing.xlarge,
  }}>
    <Image
      src={exampleCode}
      quiet={true}
    />
  </div>
)

export default ExampleCode
