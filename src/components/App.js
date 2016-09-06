import React from 'react'
import {
  screenSizes,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} from '../data/styleGuide'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Home from './Home/Home'

const App = () => ( 
  <div style={{
    background: colors.decoration.medium,
    color: colors.normal.white,
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.medium,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  }}>
    <div style={{
      maxWidth: screenSizes.large,
    }}>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </div>
  </div>
)

export default App
