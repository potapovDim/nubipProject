import React from 'react'
import {connect} from 'react-redux'
import {Tabs, Tab} from 'react-bootstrap'


import PumpTable from '../components/tables/pumpsTable'
import TractorTable from '../components/tables/tractorsTable'
import SternTable from '../components/tables/sternTable'
import MachineTable from '../components/tables/machineTable'
import DrinkingbowTable from '../components/tables/drinkingbowTable'

import {addToTable, removeFromTable} from '../reducers/tables/actions'

class Table extends React.Component {



  render() {
    console.log(this.props)
    return (
      <div>
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Pumps ">
            <PumpTable {...this.props} />
          </Tab>
          <Tab eventKey={2} title="Tractors">
            <TractorTable {...this.props} />
          </Tab>
          <Tab eventKey={3} title="Stern norms">
            <SternTable {...this.props} />
          </Tab>
          <Tab eventKey={4} title="Machines">
            <MachineTable {...this.props} />
          </Tab>
          <Tab eventKey={5} title="Drinking bow">
            <DrinkingbowTable {...this.props}/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default connect(state => state
  , {addToTable, removeFromTable})(Table)

