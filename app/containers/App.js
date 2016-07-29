import React from 'react'
import FullTables from '../components/dataTables/'
import {connect} from 'react-redux'

import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <FullTables {...this.props} />
      </div>
    )
  }
}

export default connect(state => state)(App)