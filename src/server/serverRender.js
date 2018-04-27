import React from 'react'
import { renderToString } from 'react-dom/server'

import html from './html'
import App from '../app/App'

export default function serverRender() {
  return (req, res) => {
    const context = {}
    const markup = renderToString(
      <App server location={req.url} context={context} />
    )

    if (context.url) {
      res.redirect(301, context.url)
    } else {
      res.send(
        html({
          markup
        })
      )
    }
  }
}
