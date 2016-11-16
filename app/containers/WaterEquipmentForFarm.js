import React, {Component} from 'react'
import {connect} from 'react-redux'
import WaterEquip from '../components/waterEquipment/index'

class WaterEquipment extends Component {
  render() {
    return (
      <div>
        <WaterEquip {...this.props}/>
      </div>
    )
  }
}

export default connect(state=> ({
    entries: {...state.entries},
    tubes: {...state.tables.tubes_specifications},
    pumps_rotary: state.tables.pumps_rotary,
    pumps_submersible: state.tables.pumps_submersible
  })
)(WaterEquipment)