import React from 'react'
import goals from './goals'
import {spacing} from './styleGuide'
import ColorPalette from './ColorPalette'
import Points from './Points'

const Main = () => (
  <main style={{
    padding: spacing.container,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <ColorPalette />
    <Points points={goals} />
  </main>
)

export default Main
