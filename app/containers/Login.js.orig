import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from '../components/login/login'

class Log extends Component {

  render() {
    return (
      <div>
        <Login {...this.props}/>
      </div>
    )
  }
}

export default connect(state=> {
  return {...state.login}
})(Log)