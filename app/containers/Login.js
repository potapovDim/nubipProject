import React,{Component} from 'react'
import {connect} from 'react-redux'
import Login from '../components/login/login'

import {login} from '../reducers/login/actions'

class Log extends Component{

  render(){
    console.log(this.props)
    return(
      <div>
        <Login {...this.props} />
      </div>
    )
  }
}

export default connect(state=>state,
  {login})(Log)