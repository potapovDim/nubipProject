import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ShitRemove} from '../components/shit/'

class Shit extends Component {

  render() {
    return <ShitRemove {...this.props}/>
    
  }
}

export default connect(state=> {
  return {...state.shit}
})(Shit)