import React, {Component} from 'react'
import {SternRepo}from '../../components/stern/sternRepo'
import {connect} from 'react-redux'
class Stern extends Component {
  render() {
    return <SternRepo {...this.props}/>
  }
}


export default connect(state => {
  return {...state.tables, ...state.entries}
})(Stern)