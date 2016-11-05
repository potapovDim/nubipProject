import React, {Component} from 'react'
import {connect} from 'react-redux'
import WaterCalculations from '../components/water/index'

class Water extends Component {
  render() {
    return (
      <div>
        <WaterCalculations {...this.props}/>
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
)(Water)