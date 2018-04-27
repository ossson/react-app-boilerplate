import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'
import './styles.scss'

const rootElement = document.getElementById('root')

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    renderApp(require('./containers/App').default)
  })
}
