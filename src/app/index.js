/** @flow */

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const rootElement: HTMLElement = document.getElementById('root')

const renderApp: void = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(require('./App').default)
  })
}
