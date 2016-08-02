import React from 'react'
import { connect } from 'react-redux'

import PumpTable from '../components/tables/pumpsTable'
import TractorTable from '../components/tables/tractorsTable'
import SternTable from '../components/tables/sternTable'
import MachineTable from '../components/tables/machineTable'

import {addToPumpTable,removeFromPumpTable} from '../modules/tables/actions'

class Table extends React.Component{
 state={
   pump:false,
   tractor:false,
   stern:false,
 }
  openClose(key){
    let whatClose={...this.state[key]}
    switch (key){
      case 'pump':
        this.setState({
          pump:!this.state.pump
        })
        break
      case 'tractor':
        this.setState({
          tractor:!this.state.tractor
        })
        break
      case 'stern':
        this.setState({
          stern:!this.state.stern
        })
        break

    }
  }
  componentWillMount(){
    
  }
  render(){
    console.log(this.props)
    return(
      <div>

        {this.state.pump?<PumpTable {...this.props} />:<div>Hidden</div>}
        <button type="button" onClick={this.openClose.bind(this,'pump')} >OpenCLosew</button>
        {this.state.tractor?<TractorTable {...this.props} />:<div>Hidden</div>}
        <button type="button" onClick={this.openClose.bind(this,'tractor')} >OpenCLosew</button>
        {this.state.stern?<SternTable {...this.props} />:<div>Hidden</div>}
        <button type="button" onClick={this.openClose.bind(this,'stern')} >OpenCLosew</button>

      </div>  
    )
  }
}

export default connect(state => state
,{addToPumpTable,removeFromPumpTable})(Table)



