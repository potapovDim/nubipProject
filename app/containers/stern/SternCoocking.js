import React, {Component} from 'react'
import SternPerDay from '../../components/stern/sternPerDay'

import {connect} from 'react-redux'

class SternCoocking extends Component {
  render() {
    return <SternPerDay {...this.props}/>
  }
}


export default connect(state => {
  return {
    sternNormCows: state.tables.stern_norms,
    sternNormCalves: state.tables.stern_norms_feeding,
    entries:state.entries,
    params:state.sternStocks.params
  }
})(SternCoocking)