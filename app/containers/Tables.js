import React from 'react'
import {connect} from 'react-redux'
import {Tabs, Tab} from 'react-bootstrap'

import {PumpRotateTable, PumpSubmersibleTable} from '../components/tables/entriesTabses/pumpsTable'
import TractorTable from '../components/tables/entriesTabses/tractorsTable'
import SternTable from '../components/tables/staticTables/sternTable'
import MachineTable from '../components/tables/entriesTabses/machineTable'
import {DrinkingbowCalvesTable, DrinkingbowCowsTable} from '../components/tables/entriesTabses/drinkingbowTable'
import {MilkingMachinesStallTable, MilkingMachinesHallTable} from '../components/tables/entriesTabses/milkingMachines'
import {SternMachineTable} from '../components/tables/entriesTabses/sternMachines'

class Table extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Насоси ">
            <PumpRotateTable {...this.props} />
            <PumpSubmersibleTable {...this.props} />
          </Tab>
          <Tab eventKey={2} title="Трактори">
            <TractorTable {...this.props} />
          </Tab>
          {/*<Tab eventKey={3} title="Кормові норми">*/}
          {/*<SternTable {...this.props} />*/}
          {/*</Tab>*/}
          <Tab eventKey={4} title="Машини для роздавання кормів">
            <SternMachineTable {...this.props} />
          </Tab>
          <Tab eventKey={5} title="Автонапувалки">
            <DrinkingbowCowsTable {...this.props}/>
            <DrinkingbowCalvesTable {...this.props}/>
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

export default connect(state => {
  return {...state.tables}
})(Table)

