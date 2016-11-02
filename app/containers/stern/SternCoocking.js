import React, {Component} from 'react'
import SternPerDay from '../../components/stern/sternPerDay'

import {connect} from 'react-redux'

class SternCoocking extends Component {
  render() {
    return <SternPerDay {...this.props}/>
  }
}


export default connect(state => {
  return {...state.tables, ...state.entries,...state.sternStocks.params}
})(SternCoocking)