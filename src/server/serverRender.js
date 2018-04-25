import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../app/containers/App'

import html from './html'

export default function serverRender() {
  return (req, res, next) => {
    const markup = renderToString(<App />)
    res.send(
      html({
        markup
      })
    )
  }
}
