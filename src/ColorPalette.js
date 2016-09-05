import React from 'react';
import colors from './colors';
import ColorTile from './ColorTile';

const ColorPalette = () => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '700px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '7px',
  }}>
    {colors.map((color, index) => (
      <ColorTile color={color} key={index} />
    ))}
  </div>
);

export default ColorPalette;
