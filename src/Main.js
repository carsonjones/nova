import React from 'react'
import {spacing} from './styleGuide'
import ColorPalette from './ColorPalette'

const Main = () => (
  <main style={{
    padding: spacing.container,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <ColorPalette />
  </main>
)

export default Main
