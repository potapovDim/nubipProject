import React, {Component} from 'react'
import SternMachine from '../../components/sternMachine/'

import {connect} from 'react-redux'

class SternMachineChoise extends Component {
  render() {
    return <SternMachine {...this.props}/>
  }
}


export default connect(state => {
  return {
    machines: state.tables.stern_machines,
    sternVolume: state.sternStocks.sternVolume,
    stallPeriod: state.entries.season_stall,
    peymantPerOur:state.entries.paymentPrice,
    fuelPrice :state.entries.fuelPrice
  }
})(SternMachineChoise)