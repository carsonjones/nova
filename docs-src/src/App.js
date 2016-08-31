import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div style={{
        fontFamily: '"Quicksand", sans-serif',
        fontSize: '1.3rem',
        background: '#717C89',
        color: '#E8EBE4',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
