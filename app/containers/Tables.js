import React from 'react'
import {connect} from 'react-redux'
import {Tabs, Tab} from 'react-bootstrap'


import PumpTable from '../components/tables/pumpsTable'
import TractorTable from '../components/tables/tractorsTable'
import SternTable from '../components/tables/sternTable'
import MachineTable from '../components/tables/machineTable'
import DrinkingbowTable from '../components/tables/drinkingbowTable'
import {MilkingMachinesStallTable,MilkingMachinesHallTable} from '../components/tables/milkingMachines'


import {addToTable, removeFromTable} from '../reducers/tables/actions'

class Table extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Насоси ">
            <PumpTable {...this.props} />
          </Tab>
          <Tab eventKey={2} title="Трактори">
            <TractorTable {...this.props} />
          </Tab>
          <Tab eventKey={3} title="Кормові норми">
            <SternTable {...this.props} />
          </Tab>
          <Tab eventKey={4} title="Сг машини">
            <MachineTable {...this.props} />
          </Tab>
          <Tab eventKey={5} title="Автонапувалки">
            <DrinkingbowTable {...this.props}/>
          </Tab>
          <Tab eventKey={6} title="Доїльні установки">
            <MilkingMachinesStallTable {...this.props}/>
            <MilkingMachinesHallTable {...this.props} />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default connect(state => state
  , {addToTable, removeFromTable})(Table)

