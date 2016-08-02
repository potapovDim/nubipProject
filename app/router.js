import React from 'react';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

import Root from './containers/Root'
import Table from './containers/Table'

export default(
  <Router history={browserHistory}>
    <Route component={Root}>
      <Route path="/" component={ Table }/>
    </Route>
  </Router>
)