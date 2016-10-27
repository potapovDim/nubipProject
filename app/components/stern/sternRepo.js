import React, {Component} from 'react'
import classNames from 'classnames'
import {
  sternStore,
  quantityStores,
  sternNeed
} from '../../calculations/planFarm'
import InformationButton from '../helpers/informationButton'
import {Popover} from 'react-bootstrap'
import {SternTable, SternTableFeeding} from '../tables/staticTables/sternTable'
import _ from 'lodash'
import {Fedding} from './tables/fedding-stern'
import {CowStern} from './tables/cow-stern'
import {FullStern} from './tables/full-stern'

export class SternRepo extends Component {
  state = {
    getMilkPerYear: null,
    typeFeeding: null
  }

  popoverLeft = (
    <Popover id="popover-positioned-left" title="Підказка для введення поля">
      <div><strong>Кількість корів</strong> кількість корів повинна бути лише ціле число від трьох до чотирьох символів
      </div>
      <div><strong>Ціна на пальне</strong> ціна на пальне повинна бути ціле число або десятковий дріб (приклад 20.14 чи
        20) ціла частина не більше двох знаків
      </div>
      <div><strong>Ціна на електроенергію</strong> ціна на пальне повинна бути ціле число або десятковий дріб (приклад
        20.14 чи 20) ціла частина не більше двох знаків
      </div>
      <div><strong>Заробітня плата</strong> ціна на пальне повинна бути ціле число або десятковий дріб (приклад 20.14 чи
        20) ціла частина не більше двох знаків
      </div>
    </Popover>
  );

  choosePlan = (type, value) => {
    switch (type) {
      case 'typeFeeding':
        this.state[type] == value ? this.setState({typeFeeding: null}) : this.setState({typeFeeding: value})
        this.calculateSternFeeding(value)
        break
      default:
        (this.state[type] == value ? this.setState({getMilkPerYear: null}) : this.setState({getMilkPerYear: value}))
        this.calculateSternNeedCows(value)
    }

  }

  componentWillMount() {
    const {cows, cow_before_20days, building_for_stern, stern_norms, stern_norms_feeding, season_stall} = this.props
    console.log(cows, cow_before_20days, building_for_stern, stern_norms, stern_norms_feeding, season_stall)
    this.setState({cows, cow_before_20days, building_for_stern, stern_norms, stern_norms_feeding, season_stall})
  }

  calculateFullNeedingOfStern = () => {
    const {sternFeeding, sternCows} = this.state
    console.log(sternCows)
    console.log(sternFeeding)
    const allStern = _.reduce(sternFeeding, (result, value, key) => {
        result.hasOwnProperty(key) ? null : result[key] = value
        return result
      },
      _.reduce(sternCows, (result, value, key) => {
        sternFeeding.hasOwnProperty(key) ? result[key] = parseFloat(sternFeeding[key]) + parseFloat(sternCows[key])
          : result[key] = parseFloat(value)
        return result
      }, {}))
    this.setState({allStern})
  }

  calculateSternFeeding = (typeFeeding) => {
    const sternFeeding = {}
    const {cow_before_20days, stern_norms_feeding, season_stall} = this.state
    typeFeeding === 'intensive' ? stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = sternNeed(undefined, parseFloat(value.intensive), cow_before_20days, season_stall)
    }) : stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = sternNeed(undefined, parseFloat(value.many_components), cow_before_20days, season_stall)
    })
    this.setState({sternFeeding})
  }

  calculateSternNeedCows = (getMilkPerYear) => {
    const sternCows = {}
    const {cows, stern_norms, season_stall} = this.state
    switch (getMilkPerYear) {
      case 2000:
        stern_norms.map(value => {
          sternCows[value.view_feed] = sternNeed(undefined, parseFloat(value.get_milk_year2000), cows, season_stall)
        })
        break
      case 3000:
        stern_norms.map(value => {
          sternCows[value.view_feed] = sternNeed(undefined, parseFloat(value.get_milk_year3000), cows, season_stall)
        })
        break
      case 4000:
        stern_norms.map(value => {
          sternCows[value.view_feed] = sternNeed(undefined, value.get_milk_year4000, cows, season_stall)
        })
        break
    }
    this.setState({sternCows})
  }
  renderSternNorms = ()=> {
    return (<SternTable {...this.props} />)
  }
  renderSternNormsFeeding = () => {
    return (<SternTableFeeding {...this.props} />)
  }

  render() {
    const {typeFeeding, getMilkPerYear, sternFeeding, sternCows, allStern} =this.state
    console.log(sternCows)
    return (
      <div>
        <InformationButton name="Користування">
          {this.popoverLeft}
        </InformationButton>
        <div className="btn-group">
          <h3>Виберіть перспективний середньорічний надій</h3>
          <button
            className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== 2000}, {'btn-success': this.state.getMilkPerYear === 2000})}
            onClick={()=>this.choosePlan('getMilkPerYear', 2000)}>
            2000
          </button>
          <button
            className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== 3000}, {'btn-success': this.state.getMilkPerYear === 3000})}
            onClick={()=>this.choosePlan('getMilkPerYear', 3000)}>
            3000
          </button>
          <button
            className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== 4000}, {'btn-success': this.state.getMilkPerYear === 4000})}
            onClick={()=>this.choosePlan('getMilkPerYear', 4000)}>
            4000
          </button>
        </div>
        <div className="btn-group">
          <h3>Виберіть вид відгодівлі молодняку</h3>
          <button className={
            classNames('btn ', {'btn-default': this.state.typeFeeding !== 'intensive'}, {'btn-success': this.state.typeFeeding === 'intensive'})}
                  onClick={()=>this.choosePlan('typeFeeding', 'intensive')}>інтенсивна
          </button>
          <button className={
            classNames('btn ', {'btn-default': this.state.typeFeeding !== 'many_components'}, {'btn-success': this.state.typeFeeding === 'many_components'})}
                  onClick={()=>this.choosePlan('typeFeeding', 'many_components')}>багатокомпонентна
          </button>
        </div>
        <button onClick={this.calculateFullNeedingOfStern}>КОНСОЛОГОГОГО</button>
        <div className="entries-data">
        </div>
        <div className="entries-data">
          {getMilkPerYear === null ? <div className="stern-first-table">{this.renderSternNorms()}</div> :
            <div className="stern-first-table">
              {sternCows ? <CowStern stern={sternCows}/> : null}
            </div>}
          <div className="stern-separator"></div>
          {typeFeeding === null ? <div className="stern-second-table">{this.renderSternNormsFeeding()}</div> :
            <div className="stern-second-table">
              {sternFeeding ? <Fedding stern={sternFeeding}/> : null}
            </div>}
        </div>

        <div>{(typeFeeding !== null && getMilkPerYear !== null && allStern) ?
          <div>
            <h1>ЗАГАЛЬНА ПОТРЕБА В КОРМАХ</h1>
            <FullStern stern={allStern}/>
          </div> : null}</div>
      </div>
    )
  }
}


