import React from 'react';

const Subtitle = ({children}) => (
  <h2 style={{
    fontSize: '2.5rem',
    fontWeight: '300',
    textAlign: 'center',
  }}>
    {children}
  </h2>
);

Subtitle.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default Subtitle;
