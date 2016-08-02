import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import Main from './Main'
import store from '../store/'

class Root extends Component {
  render() {
    console.log(this.props)
    return (
      <Provider store={store}>
        <div>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}

export default Root