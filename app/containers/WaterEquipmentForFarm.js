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
    water: {...state.water}
  })
)(WaterEquipment)