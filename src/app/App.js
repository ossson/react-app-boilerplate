/** @flow */

import React from 'react'
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom'

import routes from './routes'

export default ({ server, location, context }: Object): JSX.Element => {
  const routesMap: JSX.Element[] = routes.map((route, i) => (
    <Route key={i} {...route} />
  ))

  let router: JSX.Element = (
    <BrowserRouter>
      <Switch>{routesMap}</Switch>
    </BrowserRouter>
  )

  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>{routesMap}</Switch>
      </StaticRouter>
    )
  }

  return router
}
