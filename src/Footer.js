import React from 'react';
import Link from './Link';

const Footer = () => (
  <footer style={{
    textAlign: 'center',
    background: '#344055',
    padding: '1.3rem',
  }}>
    Built by <Link href='https://twitter.com/AC_Design'>@AC_Design</Link> and <Link href='http://trevordmiller.com'>@trevordmiller</Link>
  </footer>
);

export default Footer;
