import React from 'react'
import WaterEquipment from './calculateWaterEquipment'

class WaterEquip extends React.Component {

  choosePumpType = type => {
    this.state.pumpTypeShow === type ?
      this.setState({pumpTypeShow: null}) : this.setState({pumpTypeShow: type})
  }

  render() {
    return (
      <div>
        <WaterEquipment {...this.props}/>
      </div>)
  }
}

export default WaterEquip

//{
//  this.state.pumpTypeShow === 'pumps_rotary' &&
//  <div>
//    <PumpRotateTable {...this.props} />
//  </div>
//}
//{
//  this.state.pumpTypeShow === 'pumps_submersible' &&
//  <div>
//    <PumpSubmersibleTable {...this.props} />
//  </div>
//}