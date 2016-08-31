import React from 'react';

const Link = ({href, children}) => (
  <a style={{
    color: '#8CCEC6',
    textDecoration: 'none',
  }}>
    {children}
  </a>
);

Link.propTypes = {
  href: React.PropTypes.string.isRequired,
};

export default Link;
