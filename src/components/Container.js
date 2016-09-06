import React from 'react'
import {spacing} from '../styleGuide'

const Container = ({children}) => (
  <main style={{
    padding: spacing.medium,
  }}>
    {children}
  </main>
)

Container.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Container
