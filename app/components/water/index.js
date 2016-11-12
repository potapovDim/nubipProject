import React from 'react'
import {PumpRotateTable, PumpSubmersibleTable} from '../tables/entriesTabses/pumpsTable'
import classNames from 'classnames'
import {addTubes, addWaterNorm} from '../../reducers/water/actions'
import {CalculateWaterPerDay} from './calculateWaterPerDay'
import {Link} from 'react-router'
import WaterEquipment from './calculateWaterEquipment'
import DragChains from './calculateChain'
class WaterCalculations extends React.Component {
  state = {
    pumpType: null,
    showEquip: false
  }

  addWaterNorms = water => {

  }
  choosePumpType = type => {
    this.state.pumpType === type ?
      this.setState({pumpType: null}) : this.setState({pumpType: type})
  }

  componentWillUnmount() {
    this.props.dispatch(addWaterNorm(this.state.water))
  }

  calculateWater = () => {
    if (this.state.pumpType === null) {
      this.setState({pumpType: 'pumps_rotary'})
    }
    const {cow_before_20days, cows}= this.props.entries
    const pureNeed = cow_before_20days * 30 + cows * 100
    const maxNeed = pureNeed * 1.3
    const needPerHour = maxNeed * 2.3 / 24
    const water = {pureNeed, maxNeed, needPerHour}
    this.setState({water})
    this.props.dispatch(addWaterNorm())
  }

  render() {
    return (<div>
      <div className="btn-group">
        <button className={
          classNames('btn ', {'btn-default': this.state.pumpType !== 'pumps_rotary'}, {'btn-success': this.state.pumpType === 'pumps_rotary'})}
                onClick={()=>this.choosePumpType('pumps_rotary')}>Відцентрові насоси
        </button>
        <button className={
          classNames('btn ', {'btn-default': this.state.pumpType !== 'pumps_submersible'}, {'btn-success': this.state.pumpType === 'pumps_submersible'})}
                onClick={()=>this.choosePumpType('pumps_submersible')}>Заглибні відцентрові насоси
        </button>
        <button className="btn btn-info"
                onClick={this.calculateWater}> Розрахувати потребу в воді
        </button>
      </div>
      {
        this.state.pumpType === null &&
        <div>
          <PumpRotateTable {...this.props} />
          <PumpSubmersibleTable {...this.props} />
        </div>
      }
      {(this.state.water && this.state.pumpType !== null) &&
      <div>
        <CalculateWaterPerDay props={{...this.props.entries, ...this.state}}/>
        <button className="btn btn-default" onClick={()=> {
          this.setState({showEquip: !this.state.showEquip})
        }}>Розрахувати обладнання
        </button>
        {
          this.state.showEquip && <WaterEquipment/>
        }
      </div>
      }
     
    </div>)
  }
}


export default WaterCalculations