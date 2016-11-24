import React from 'react'
import {PumpRotateTable, PumpSubmersibleTable} from '../tables/entriesTabses/pumpsTable'
import classNames from 'classnames'
import {addTubes, addWaterNorm} from '../../reducers/water/actions'
import {Link} from 'react-router'
import DropBuilds from './dropDuilds/'
import InformationButton from '../helpers/informationButton'
import {BuildingsTutorial} from '../tutorials/dndTutorial'
import {BuildingsSpecifications} from './showBuildSpecifications'
import {CalculateWaterPerDay} from './calculateWaterPerDay'

class WaterBuilds extends React.Component {
  state = {
    pumpType: null,
    showEquip: false,
    showFullBuilds: false
  }
  calculateWater = () => {
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

  componentWillMount(){
    console.log(this.props.entries.buildingsForFarm)
    
  }

  confirmWater = ()=> {
    this.props.dispatch(addWaterNorm(this.state.water, this.state.builds))
  }

  render() {
    const {buildingsForFarm, cow_before_20days, cows} = this.props.entries
    const {water} = this.state
    return (<div>
      <InformationButton name={'Інформація полів вводу данних'}>
        <BuildingsTutorial/>
      </InformationButton>
      <div className="flex-wrap between">
        <button className="btn btn-info"
                onClick={this.calculateWater}> Розрахувати потребу в воді
        </button>
      </div>
      {!this.state.showFullBuilds &&
      <DropBuilds buildingsForFarm={buildingsForFarm} addFullBuilds={this.addFullBuilds}/>}
      <div>
        {this.state.builds &&
        <div>
          <CalculateWaterPerDay {...{water, cow_before_20days, cows}}/>
          <BuildingsSpecifications builds={this.state.builds}/>
          <Link to="/waterequip">
            <button className="btn btn-info" onClick={this.confirmWater}>Перейти до розрахунку обладнання</button>
          </Link>
        </div>}
      </div>
    </div>)
  }
}


export default WaterBuilds