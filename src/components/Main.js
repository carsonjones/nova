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

export default Main
