import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'

test('App renders as expected', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot()
})
