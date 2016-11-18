import React from 'react'
import _ from 'lodash'

import {calculateLostPressure, placeResistans} from './calculatePressure'

class WaterEquipment extends React.Component {
  state = {
    height: 1
  }

  componentWillMount() {
    const a = this.calculateLostAtRoad(this.props.water.waterBuilds)
//    console.log(a)
  }


  assertHeightValue = event => {
    /[\d]$/.test(event.target.value) ? this.setState({
      height: _.min([event.target.value || 1, 50]),
      heightPressure: (_.min([event.target.value || 1, 50]) * 9.807 / 1000).toFixed(2),
    }) :
      this.setState({height: 1})
  }
  calculateLostAtRoad = (builds) => {
    Object.keys(_.omit(builds, ['насос'])).map((item, index)=> {
      builds[item].lostPressure = calculateLostPressure(builds[item].tubeD,
        (builds[item].roadToParent.leftToFather + builds[item].roadToParent.topToFather))
      builds[item].length = (builds[item].roadToParent.leftToFather + builds[item].roadToParent.topToFather)
    })
    builds['насос'].lostPressure = placeResistans([0.1, 2, 5, 5, 0.5])
    return builds
  }


  render() {
    return (
      <div className="form-group">

      </div>)
  }
}

export default WaterEquipment

//<label htmlFor="Height">Для розрахунку водонапірного обладнання необхідно ввести значення
//висоти підйому води від джерела(водойми) до нагнітальної башти,максимум 50 метрів</label>
//<input onChange={this.assertHeightValue} className="form-control" id="Height" value={this.state.height}/>
//<div className="bg-primary">{this.state.heightPressure} мПа тиск всмоктування</div>
//<div className="bg-primary">{this.state} мПа тиск на втрати на опори втрубопроводах</div>
//<div className="bg-primary">{this.state} мПа повний тиск в ситсемі</div>
//<td >{builds[item].tubeD} </td>
//<td >{builds[item].roadToParent.leftToFather + builds[item].roadToParent.topToFather}</td>