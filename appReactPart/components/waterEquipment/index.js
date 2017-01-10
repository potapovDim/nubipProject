import React from 'react'
import WaterEquipment from './calculateWaterEquipment'

class WaterEquip extends React.Component {

  render() {
    return (
      <div>
        <WaterEquipment {...this.props}/>
      </div>)
  }
}

export default WaterEquip
