import React from 'react'
import {PumpRotateTable, PumpSubmersibleTable} from '../tables/entriesTabses/pumpsTable'
import classNames from 'classnames'
import {addTubes, addWaterNorm} from '../../reducers/water/actions'
import {CalculateWaterPerDay} from './calculateWaterPerDay'
class WaterCalculations extends React.Component {
  state = {
    pumpType: null
  }

  addWaterNorms = water => {

  }
  choosePumpType = type => {
    this.state.pumpType === type ?
      this.setState({pumpType: null}) : this.setState({pumpType: type})
  }
  calculateWater = () => {
    console.log('dslkdsakjdsakjkjdlas')
    const {cow_before_20days,cows}= this.props.entries
    const pureNeed = cow_before_20days * 30 + cows * 100
    const maxNeed = pureNeed * 1.3
    const needPerHour = maxNeed * 2.3 / 24
    const water = {pureNeed, maxNeed, needPerHour}
    console.log(water)
    this.setState({water})
  }

  render() {
    console.log(this.state.water)
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
                onClick={()=>this.choosePumpType(null)}>Переглянути насоси
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
        <CalculateWaterPerDay props={{...this.props.entries, ...this.state}}/>
      }
    </div>)
  }
}


export default WaterCalculations