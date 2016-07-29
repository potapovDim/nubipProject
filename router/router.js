import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import React from 'react'
import App from '../app/containers/App'
import Hello from '../app/components/Hello'
import ResultTable from '../app/components/ResultTable'
import Root from '../app/containers/Root'

const routers = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Hello} />
      <Route path="app" component={App} />
      <Route path="fulltable" component={ResultTable} />
    </Route>
  </Router>
)

export default routers

