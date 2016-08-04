import React from 'react'
import {connect} from 'react-redux'
import {Alert, DropdownButton, ButtonToolbar, MenuItem, SplitButton, Dropdown, Button} from 'react-bootstrap'

import PumpTable from '../components/tables/pumpsTable'
import TractorTable from '../components/tables/tractorsTable'
import SternTable from '../components/tables/sternTable'
import MachineTable from '../components/tables/machineTable'
import Trigger from '../components/tutorialTrigger'

import {addToPumpTable, removeFromPumpTable} from '../modules/tables/actions'

class Table extends React.Component {
  state = {
    pump: false,
    tractor: false,
    stern: false,
    machine: false
  }

  openClose(key) {
    let _state = {...this.state}
    _state[key] = !_state[key]
    this.setState(_state)
  }

  showAllTables = ()=> {
    this.setState({
      pump: true,
      tractor: true,
      stern: true,
    })
  }
  hideAllTables = ()=> {
    this.setState({
      pump: false,
      tractor: false,
      stern: false,
    })
  }

  ddl = (
    <Dropdown id="dropdown-custom-2">
      <Button onClick={this.showAllTables} bsStyle="info">
        Show
      </Button>
      <Dropdown.Toggle bsStyle="success"/>
      <Dropdown.Menu className="">
        <MenuItem onClick={this.openClose.bind(this,'pump')} eventKey="1">Show/Hide pump table</MenuItem>
        <MenuItem onClick={this.openClose.bind(this,'tractor')} eventKey="2">Show/Hide tractors table</MenuItem>
        <MenuItem onClick={this.openClose.bind(this,'stern')} eventKey="3">Show/Hide stern table</MenuItem>
        <MenuItem onClick={this.openClose.bind(this,'machine')} eventKey="3">Show/Hide stern table</MenuItem>
        <MenuItem divider/>
        <MenuItem onClick={this.hideAllTables} eventKey="1">Hide all tables</MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  )

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <a><Trigger /></a><a>{this.ddl}</a>
        <h1>On this page u add your information about your resources,machines</h1>
        {this.state.pump ? <PumpTable {...this.props} /> : <div>Hidden pump table</div>}
        {this.state.tractor ? <TractorTable {...this.props} /> : <div>Hidden tractors table</div>}
        {this.state.stern ? <SternTable {...this.props} /> : <div>Hidden stern norms of animals table</div>}
        {this.state.machine ? <MachineTable {...this.props} /> : <div>Hidden machines table</div>}
      </div>
    )
  }
}

export default connect(state => state
  , {addToPumpTable, removeFromPumpTable})(Table)



