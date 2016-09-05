import React from 'react';

const Title = ({children}) => (
  <h1 style={{
    fontSize: '4rem',
    fontWeight: '300',
    textAlign: 'center',
    color: '#8CCEC6',
  }}>
    {children}
  </h1>
);

Title.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default Title;
