import React from 'react'
import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} from './styleGuide'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = () => ( 
  <div style={{
    background: colors.normal.black,
    color: colors.normal.white,
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.medium,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }}>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App
