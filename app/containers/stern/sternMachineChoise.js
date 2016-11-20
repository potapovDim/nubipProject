import React, {Component} from 'react'
import SternMachine from '../../components/stern/sternMachine'

import {connect} from 'react-redux'

class SternMachineChoise extends Component {
  render() {
    return <SternMachine {...this.props}/>
  }
}


export default connect(state => {
  return {
    sternOneTime:state.sternStocks.params.sternOneTime
  }
})(SternCoocking)