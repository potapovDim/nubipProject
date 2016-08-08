import React from 'react'
import {connect} from 'react-redux'
import {Alert, DropdownButton, ButtonToolbar, MenuItem, SplitButton, Dropdown, Button} from 'react-bootstrap'
import Infinity from 'react-infinite'

import PumpTable from '../components/tables/pumpsTable'
import TractorTable from '../components/tables/tractorsTable'
import SternTable from '../components/tables/sternTable'
import MachineTable from '../components/tables/machineTable'
import DrinkingbowTable from '../components/tables/drinkingbowTable'
import Enties from '../components/enterdata/entries'

import {addToPumpTable, removeFromPumpTable} from '../reducers/tables/actions'
import {addCows, resetAll} from '../reducers/cows/actions'

class Table extends React.Component {
  state = {
    SHOW_ALL: false,
    pump: false,
    tractor: false,
    stern: false,
    machine: false,
    drinking_bowl: false
  }

  openClose(key) {
    let _state = {...this.state}
    _state[key] = !_state[key]
    this.setState(_state)
  }

  showHideAllTables = ()=> {
    this.setState({
      SHOW_ALL: !this.state.SHOW_ALL
    })
  }
  ddl = (
    <Dropdown id="basic-nav-dropdown">
      <Button onClick={this.showHideAllTables} bsStyle="info">
        Show all tables ...
      </Button>
      <Dropdown.Toggle bsStyle="info"/>
      <Dropdown.Menu className="">
        <MenuItem onClick={this.openClose.bind(this,'pump')} eventKey="1">Show/Hide pump table</MenuItem>
        <MenuItem onClick={this.openClose.bind(this,'tractor')} eventKey="2">Show/Hide tractors table</MenuItem>
        <MenuItem onClick={this.openClose.bind(this,'stern')} eventKey="3">Show/Hide stern table</MenuItem>
        <MenuItem onClick={this.openClose.bind(this,'machine')} eventKey="3">Show/Hide machine table</MenuItem>
        <MenuItem onClick={this.openClose.bind(this,'drinking_bowl')} eventKey="3">Show/Hide drinking bowl
          table</MenuItem>
        <MenuItem divider/>
      </Dropdown.Menu>
    </Dropdown>
  )
  
  tables = [<PumpTable {...this.props} />, <div></div>,
            <TractorTable {...this.props} />, <div></div>,
            <SternTable {...this.props} />, <div></div>,
            <MachineTable {...this.props} />, <div></div>,
            <DrinkingbowTable {...this.props}/>]
  render() {
    console.log(this.props)
    return (
      <div>
        {this.ddl}
        {this.state.SHOW_ALL ? <Infinite containerHeight={700} elementHeight={40}>
          {!this.state.pump ? <PumpTable {...this.props} /> : <div>Hidden pump table</div>}
          {!this.state.tractor ? <TractorTable {...this.props} /> : <div>Hidden tractors table</div>}
          {!this.state.stern ? <SternTable {...this.props} /> : <div>Hidden stern norms of animals table</div>}
          {!this.state.machine ? <MachineTable {...this.props} /> : <div>Hidden machines table</div>}
          {!this.state.drinking_bowl ? <DrinkingbowTable {...this.props}/> : <div>Hidden drinking bowl table</div>}
        </Infinite> : <div style={{height:'700px'}}><Enties {...this.props}/></div>}
      </div>
    )
  }
}

export default connect(state => state
  , {addToPumpTable, removeFromPumpTable, resetAll, addCows})(Table)



