import React from 'react'
import {connect} from 'react-redux'
import {MenuItem, Dropdown, Button, Tabs, Tab} from 'react-bootstrap'


import PumpTable from '../components/tables/pumpsTable'
import TractorTable from '../components/tables/tractorsTable'
import SternTable from '../components/tables/sternTable'
import MachineTable from '../components/tables/machineTable'
import DrinkingbowTable from '../components/tables/drinkingbowTable'
import Enties from '../components/enterdata/entries'

import {addToTable, removeFromTable} from '../reducers/tables/actions'
import {addCows, resetAll} from '../reducers/cows/actions'

class Table extends React.Component {



  render() {
    console.log(this.props)
    return (
      <div>
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Tab 1">
            <PumpTable {...this.props} />
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            <TractorTable {...this.props} />
          </Tab>
          <Tab eventKey={3} title="Tab 3">
            <SternTable {...this.props} />
          </Tab>
          <Tab eventKey={4} title="Tab 3">
            <MachineTable {...this.props} />
          </Tab>
          <Tab eventKey={5} title="Tab 3">
            <DrinkingbowTable {...this.props}/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default connect(state => state
  , {addToTable, removeFromTable, resetAll, addCows})(Table)

