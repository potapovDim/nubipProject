import React from 'react'
import {PumpRotateTable, PumpSubmersibleTable} from '../tables/entriesTabses/pumpsTable'
import classNames from 'classnames'
import {addTubes, addWaterNorm} from '../../reducers/water/actions'
import {Link} from 'react-router'
import DropBuilds from './dropDuilds/'
import InformationButton from '../helpers/informationButton'
import {BuildingsTutorial} from '../tutorials/dndTutorial'
import {BuildingsSpecifications} from './showBuildSpecifications'

class WaterBuilds extends React.Component {
  state = {
    pumpType: null,
    showEquip: false
  }

  addWaterNorms = water => {

  }
  choosePumpType = type => {
    this.state.pumpTypeShow === type ?
      this.setState({pumpTypeShow: null}) : this.setState({pumpTypeShow: type})
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
  }
  addFullBuilds = builds => {
    this.setState({showFullBuilds: true, builds})
  }

  render() {
    const {buildingsForFarm} = this.props.entries
    return (<div>
      <InformationButton name={'Інформація полів вводу данних'}>
        <BuildingsTutorial/>
      </InformationButton>
      <div className="flex-wrap between">
        <button className="btn btn-info"
                onClick={this.calculateWater}> Розрахувати потребу в воді
        </button>
        <div className="group-btn">
          <button className={
          classNames('btn ', {'btn-default': this.state.pumpType !== 'pumps_rotary'}, {'btn-success': this.state.pumpType === 'pumps_rotary'})}
                  onClick={()=>this.choosePumpType('pumps_rotary')}>Відцентрові насоси
          </button>
          <button className={
          classNames('btn ', {'btn-default': this.state.pumpType !== 'pumps_submersible'}, {'btn-success': this.state.pumpType === 'pumps_submersible'})}
                  onClick={()=>this.choosePumpType('pumps_submersible')}>Заглибні відцентрові насоси
          </button>
        </div>
      </div>
      {
        this.state.pumpTypeShow === 'pumps_rotary' &&
        <div>
          <PumpRotateTable {...this.props} />
        </div>
      }
      {
        this.state.pumpTypeShow === 'pumps_submersible' &&
        <div>
          <PumpSubmersibleTable {...this.props} />
        </div>
      }
      <DropBuilds buildingsForFarm={buildingsForFarm} addFullBuilds={this.addFullBuilds}/>
      <div>
        {this.state.builds && <BuildingsSpecifications builds={this.state.builds}/>}
      </div>
    </div>)
  }
}


export default WaterBuilds