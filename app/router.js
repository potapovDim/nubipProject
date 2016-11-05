import React from 'react';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

import Root from './containers/Root'
import Table from './containers/Tables'
import Log from './containers/Login'
import Main from './containers/Main'
import EntryData from './containers/Entries'
import Stern from './containers/stern/Stern'
import SternCoocking from './containers/stern/SternCoocking'
import Water from './containers/Water'

export default(
  <Router history={browserHistory}>
    <Route component={Root}>
      <Route path="/" component={ Main }>
        <IndexRoute component={Log} />
        <Route path="/entries" component={EntryData} />
        <Route path="/tables" component={Table} />
        <Route path="/stern" component={Stern}/>
        <Route path="/coocking" component={SternCoocking}/>
        <Route path="/water" component={Water}/>
      </Route>
    </Route>
  </Router>
)
