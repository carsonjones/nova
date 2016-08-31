import React from 'react';
import ColorPalette from './ColorPalette';

const Main = () => (
  <main style={{
    padding: '1.3rem',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <ColorPalette />
  </main>
);

export default Main;
