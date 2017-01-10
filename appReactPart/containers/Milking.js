import React, {Component} from 'react'
import {connect} from 'react-redux'
import MilkCalc from '../components/MilkMade/'

class MilkMade extends Component{
    render() {
        console.log(MilkCalc)
        return (<MilkCalc {...this.props} />)
    }
}

export default connect(state => {
    const {cows,type} = state.entries
    const {milking_machines_stall,milking_machines_parlor} = state.tables
    return {
        cows,type, milking_machines_stall, milking_machines_parlor
    }
})(MilkMade)