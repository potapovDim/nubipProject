import React from 'react'
import _ from 'lodash'
import {addWaterEquip} from '../../reducers/water/actions'
import {calculateLostPressure, placeResistans, calculateFullLostPressure} from './calculatePressure'
import {ChoosedPump} from './chossingsPump'
import {WaterTower} from './waterTower'

class WaterEquipment extends React.Component {
  componentWillMount() {
    const {water: { waterNorm: {maxNeed, needPerHour}}} = this.props
    const fullLostPressure = calculateFullLostPressure(this.calculateLostAtRoad(this.props.water.waterBuilds))
    const pumpWaterNeed = maxNeed / 16 
    this.setState({pressureLost: fullLostPressure, maxNeed, needPerHour, pumpWaterNeed})
  }
  state = {      
    heightVs: 1,
    heightNg: 1
  }
  assertHeightValue = (type,event) => {
    if(type==='vs'){
      /[\d]$/.test(event.target.value) ? this.setState({
        heightVs: _.min([parseInt(event.target.value) || 1, 50]),
        heightPressure: ((_.min([parseInt(event.target.value) || 1, 50]) + this.state.heightNg) * 9.807 ).toFixed(2),
        fullNeedPressure : ((_.min([parseInt(event.target.value) || 1, 50]) + this.state.heightNg) * 9.807) + this.state.pressureLost
      }) :
        this.setState({heightVs: 1, heightPressure: ((this.state.heightNg + 1) * 9.807 ).toFixed(2)})
    }
    else {
      /[\d]$/.test(event.target.value) ? this.setState({
          heightNg: _.min([parseInt(event.target.value) || 1, 50]),
          heightPressure: ((_.min([parseInt(event.target.value) || 1, 50]) + this.state.heightVs) * 9.807 ).toFixed(2),
          fullNeedPressure : (((_.min([parseInt(event.target.value) || 1, 50]) + this.state.heightVs) * 9.807) ) + this.state.pressureLost
      }) :
        this.setState({heightVs: 1, heightPressure: ((this.state.heightVs  + 1) * 9.807 ).toFixed(2)})
    }
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
  addPump = (type,pump) => {
    this.props.dispatch(addWaterEquip( type, pump ))
  }

  render() {
    const {pumps_submersible, pumps_rotary,water_towers, water:{waterNorm}} = this.props
    console.log(this.props)
    return (
      <div className="form-group">
      <div className="bg-primary">{this.state.pressureLost} кПа втрата тиску в трубах </div>
      <div className="bg-primary">{this.state.maxNeed} літрів максимальна потреба витрати води на добу </div>
      <div className="bg-primary">{this.state.pumpWaterNeed } літрів необхідна продуктивність водопідіймального обладнання </div>
      <label htmlFor="Height">Висота всмоктування </label>
        <input onChange={(event)=>this.assertHeightValue('vs',event)} className="form-control" id="HeightVs" value={this.state.heightVs}/>
          <label htmlFor="Height">Висота нагнітання </label>
        <input onChange={(event)=>this.assertHeightValue('ng',event)} className="form-control" id="HeightNg" value={this.state.heightNg}/>
        <div className="bg-primary">{this.state.heightPressure} кПа тиск на підіймання </div>
        <button onClick={()=>this.setState({showPump:true})}>Прийняти</button>
        {this.state.showPump &&
           <div><div>
              <h3>Насоси ,які задовольняють потреби , для вибору насосу натисні на кнопку вибрати насос</h3>
                  <ChoosedPump 
                      pumps={{pumps_rotary,pumps_submersible}}
                      height={this.state.heightVs}
                      needPressure={this.state.fullNeedPressure}
                      needPerHour={this.state.needPerHour}
                      choosePump={this.addPump}
                  />
            </div>
              <h3>Водонапірна ,які задовольняє потреби , для підтвердження натисні клавішу прийняти</h3>
                <WaterTower 
                  addEquip={this.addPump}
                  waterNorm={waterNorm}
                  water_towers={water_towers}
                />
          </div>
            
        }
      </div>)
  }
}

export default WaterEquipment
