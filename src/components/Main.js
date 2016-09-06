import React from 'react'

const Main = ({children}) => (
  <main style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    {children}
  </main>
)

Main.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Main
