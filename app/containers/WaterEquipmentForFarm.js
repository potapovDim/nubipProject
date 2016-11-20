import React from 'react'
import {connect} from 'react-redux'
import WaterEquip from '../components/waterEquipment/index'

class WaterEquipment extends React.Component {
  render() {
    return (
      <div>
        <WaterEquip {...this.props}/>
      </div>
    )
  }
}

export default connect(state=> ({
    pumps_rotary: state.tables.pumps_rotary,
    pumps_submersible: state.tables.pumps_submersible,
    water_towers: state.tables.water_towers,
    drinking_bowl_cows: state.tables.drinking_bowl_cows,
    drinking_bowl_calves: state.tables.drinking_bowl_calves,
    water: {...state.water},
    entries: {...state.entries}
  })
)(WaterEquipment)