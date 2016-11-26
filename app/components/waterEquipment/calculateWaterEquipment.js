import React from 'react'
import _ from 'lodash'
import {addWaterEquip, addDrinkingBow} from '../../reducers/water/actions'
import {calculateLostPressure, placeResistans, calculateFullLostPressure} from './calculatePressure'
import {ChoosedPump} from './chossingsPump'
import {WaterTower} from './waterTower'
import {DrinkinBow} from './drinkinBow'

class WaterEquipment extends React.Component {
  componentWillMount() {
    const {water: {waterBuilds, waterNorm: {maxNeed, needPerHour}}} = this.props
    const fullLostPressure = calculateFullLostPressure(this.calculateLostAtRoad(waterBuilds))
    const pumpWaterNeed = maxNeed / 16 
    this.setState({pressureLost: fullLostPressure, maxNeed, needPerHour, pumpWaterNeed})
  }
  state = {      
    heightVs: 1,
    heightNg: 1,
    showDrinkingBow: false

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
    Object.keys(_.omit(builds, ['0'])).map((item, index)=> {
      builds[item].lostPressure = calculateLostPressure(builds[item].tube,builds[item].tubeLength)
    })
    builds['0'].lostPressure = placeResistans([0.1, 2, 5, 5, 0.5])
    return builds
  }
  addPump = (type,pump) => {
    this.props.dispatch(addWaterEquip( type, pump ))
  }
  addDrinkingBow = (type,quantity,bow) => {
    this.props.dispatch(addDrinkingBow(type,quantity,bow))
  }

  render() {
    const {drinking_bowl_calves, drinking_bowl_cows, pumps_submersible, pumps_rotary, water_towers, water:{waterNorm},entries: {cows, cow_before_20days, }} = this.props
    return (
      <div> 
        {!this.state.showDrinkingBow &&    <div className="form-group">
            <div className="bg-primary">{this.state.pressureLost} кПа втрата тиску в трубах </div>
            <div className="bg-primary">{this.state.maxNeed.toFixed(2)} літрів максимальна потреба витрати води на добу </div>
            <div className="bg-primary">{this.state.pumpWaterNeed.toFixed(2) } літрів необхідна продуктивність водопідіймального обладнання </div>
            <label htmlFor="Height">Висота всмоктування </label>
            <input onChange={(event)=>this.assertHeightValue('vs',event)} className="form-control" id="HeightVs" value={this.state.heightVs}/>
            <label htmlFor="Height">Висота нагнітання </label>
            <input onChange={(event)=>this.assertHeightValue('ng',event)} className="form-control" id="HeightNg" value={this.state.heightNg}/>
            <div className="bg-primary">{this.state.heightPressure} кПа тиск на підіймання </div>
            <button onClick={()=>this.setState({showPump: true})}>Прийняти</button>
          </div>}
            {(this.state.showPump && !this.state.showDrinkingBow) &&
              <div>
                <div>
                  <h3>Насоси ,які задовольняють потреби {this.state.needPerHour} л/год, для вибору насосу натисні на кнопку вибрати насос</h3>
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
                    <button onClick={()=>this.setState({showDrinkingBow: true})}>Прийняти насос та водонапірну споруду</button>
              </div>   
            }
            <div>
            {
              this.state.showDrinkingBow && 
                <div>
                  <DrinkinBow 
                    drinking_bowl_calves={drinking_bowl_calves}
                    drinking_bowl_cows={drinking_bowl_cows}
                    cows={cows}
                    cow_before_20days={cow_before_20days}
                    addDrinkingBow={addDrinkingBow}
                    />
                </div>
            }
            </div>
          </div>
      )
  }
}

export default WaterEquipment
