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
      isIntroEnded: false,
    }
    this.handleIntroEnd = this.handleIntroEnd.bind(this)
  }

  handleIntroEnd() {
    this.setState({
      isIntroEnded: true,
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
      }}>
        <div style={{
          maxWidth: screenSizes.large,
        }}>
          <Header onIntroEnd={this.handleIntroEnd} />
          <div style={{
            transition: `opacity ${animationSpeeds.medium}s`,
            opacity: this.state.isIntroEnded ? 1 : 0,
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
