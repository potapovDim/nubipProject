import React from 'react'
import _ from 'lodash'

import {calculateLostPressure, placeResistans} from './calculatePressure'

class WaterEquipment extends React.Component {
  state = {
    height: 1
  }

  componentWillMount() {
    const {waterBuilds, waterNorm} = this.props.water
    //const waterResistans = 
  }


  assertHeightValue = event => {
    /[\d]$/.test(event.target.value) ? this.setState({
      height: _.min([event.target.value || 1, 50]),
      heightPressure: (_.min([event.target.value || 1, 50]) * 9.807 / 1000).toFixed(2),
      lostPressure: (this.state.height * 3.45 / 1000).toFixed(2),
      fullNeedPressure: ((_.min([event.target.value || 1, 50]) * 9.807 / 1000) +
      (_.min([event.target.value || 1, 50]) * 3.45 / 1000)).toFixed(2)

    }) :
      this.setState({height: 1})
  }
  calculateLostAtRoad = (builds) => {
    const tube = {}
    let resistance
    Object.keys(_.omit(builds, ['насос'])).map(item=> {
      tube[item].title = builds[item].title
      tube[item].D = builds[item].tubeD
      tube[item].lostPressure = calculateLostPressure(builds[item].tubeD,
        (builds[item].roadToParent.leftToFather + builds[item].roadToParent.topToFather))
      tube[item].length = (builds[item].roadToParent.leftToFather + builds[item].roadToParent.topToFather)
    })
    tube['насос'].lostPressure = placeResistans([0.1, 2, 5, 5, 0.5])
    return tube
    
  }


  render() {
    return (
      <div className="form-group">
        <label htmlFor="Height">Для розрахунку водонапірного обладнання необхідно ввести значення
          висоти підйому води від джерела(водойми) до нагнітальної башти,максимум 50 метрів</label>
        <input onChange={this.assertHeightValue} className="form-control" id="Height" value={this.state.height}/>
        <div className="bg-primary">{this.state.heightPressure} мПа тиск всмоктування</div>
        <div className="bg-primary">{this.state.lostPressure} мПа тиск на втрати на опори втрубопроводах</div>
        <div className="bg-primary">{this.state.fullNeedPressure} мПа повний тиск в ситсемі</div>
      </div>)
  }
}

export default WaterEquipment


//<td >{builds[item].tubeD} </td>
//<td >{builds[item].roadToParent.leftToFather + builds[item].roadToParent.topToFather}</td>