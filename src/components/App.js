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

const App = ({children}) => ( 
  <div style={{
    background: colors.normal.black,
    color: colors.bright.black,
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.light,
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
        {children}
      </Main>
    </div>
  </div>
)

export default App
