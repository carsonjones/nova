import React from 'react';

const size = '60px';

const ColorTile = ({color}) => (
  <div style={{
    background: color,
    borderRadius: '3px',
    margin: '10px',
    width: size,
    height: size,
  }} />
);

ColorTile.propTypes = {
  color: React.PropTypes.string.isRequired,
};

export default ColorTile;
