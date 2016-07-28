import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import React from 'react'
import App from '../app/App'
import Hello from '../app/components/Hello'
import Main from '../app/components/Main'
import Root from '../app/containers/Root'

const routers = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Hello} />
      <Route path="app" component={App} />
    </Route>
  </Router>
)

export default routers

