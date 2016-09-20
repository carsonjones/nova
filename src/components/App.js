import React from 'react'
import {
  screenSizes,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  animationSpeeds,
} from '../data/styleGuide'
import Header from './Header'
import Main from './Main'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hasIntroEnded: false,
    }
    this.handleIntroEnd = this.handleIntroEnd.bind(this)
  }

  handleIntroEnd() {
    this.setState({
      hasIntroEnded: true,
    })
  }

  render() {
    return (
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
        height: this.state.hasIntroEnded ? 'auto' : '100vh',
        overflowY: this.state.hasIntroEnded ? 'auto' : 'hidden',
      }}>
        <div style={{
          maxWidth: screenSizes.large,
        }}>
          <div style={{
            willChange: this.state.hasIntroEnded ? 'auto' : 'margin',
            transition: `margin ${animationSpeeds.fast}s ease`,
            ...this.state.hasIntroEnded
              ? {}
              : {marginTop: '30vh'}
          }}>
            <Header onIntroEnd={this.handleIntroEnd} />
          </div>
          <div style={{
            willChange: this.state.hasIntroEnded ? 'auto' : 'opacity',
            transition: `opacity ${animationSpeeds.medium}s ease`,
            opacity: this.state.hasIntroEnded ? 1 : 0,
          }}>
            <Main>
              {this.props.children}
            </Main>
          </div>
        </div>
      </div>
    )
  }
}

export default App
