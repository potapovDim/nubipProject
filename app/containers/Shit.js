import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ShitRemove} from '../components/shit/'

class Shit extends Component {

  render() {
    return <ShitRemove {...this.props}/>
    
  }
}

export default connect(state=> {
  return {...state.shit,cows:state.entries.cows,cow_before_20days:state.entries.cow_before_20days}
})(Shit)