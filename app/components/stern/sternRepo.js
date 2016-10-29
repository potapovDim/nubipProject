import React, {Component} from 'react'
import classNames from 'classnames'
import {
  sternStore,
  quantityStores,
  sternNeed
} from '../../calculations/planFarm'
import InformationButton from '../helpers/informationButton'
import {SternTable, SternTableFeeding} from '../tables/staticTables/sternTable'
import _ from 'lodash'
import {Fedding} from './tables/fedding-stern'
import {CowStern} from './tables/cow-stern'
import {FullStern} from './tables/full-stern'
import BuildingsForStern from '../tables/staticTables/sternBuildings'
import {SternTutorial} from '../tutorials/sternTutorial'

export class SternRepo extends Component {
  state = {
    getMilkPerYear: null,
    typeFeeding: null
  }


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
    this.setState({cows, cow_before_20days, building_for_stern, stern_norms, stern_norms_feeding, season_stall})
  }

  calculateFullNeedingOfStern = () => {
    const {sternFeeding, sternCows} = this.state
    const allStern = _.reduce(sternFeeding, (result, value, key) => {
        result.hasOwnProperty(key) ? null : result[key] = parseFloat(value)
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
    const {cow_before_20days, stern_norms_feeding, season_stall} = this.props
    typeFeeding === 'intensive' ? stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = sternNeed(undefined, parseFloat(value.intensive), cow_before_20days, season_stall)
    }) : stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = sternNeed(undefined, parseFloat(value.many_components), cow_before_20days,
        season_stall)
    })
    this.setState({sternFeeding})
  }

  calculateSternNeedCows = (getMilkPerYear) => {
    const sternCows = {}
    const {cows, stern_norms, season_stall} = this.props
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
    const disabled = (sternFeeding === undefined && sternCows === undefined && allStern === undefined)
    console.log(disabled)
    return (
      <div>
        <InformationButton name="Користування">
          <SternTutorial />
        </InformationButton>
        <div className="btn-group">
          {this.state.showSternBuildings ?
            <button className="btn btn-primary" onClick={()=>::this.setState({showSternBuildings:false})}>Повернутися до
              розрахунку потреби
            </button>
            : <button className="btn btn-primary" onClick={()=>::this.setState({showSternBuildings:true})}
                      disabled={disabled}>Перейти до
            розрахунку потреби
          </button >}
        </div>
        {!this.state.showSternBuildings ? <div>
          <div>Вибір середньорічного надою молока</div>
          <div className="btn-group">
            <button
              className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== 2000}, {'btn-success': this.state.getMilkPerYear === 2000})}
              onClick={()=>this.choosePlan('getMilkPerYear', 2000)}>
              4000
            </button>
            <button
              className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== 3000}, {'btn-success': this.state.getMilkPerYear === 3000})}
              onClick={()=>this.choosePlan('getMilkPerYear', 3000)}>
              5000
            </button>
            <button
              className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== 4000}, {'btn-success': this.state.getMilkPerYear === 4000})}
              onClick={()=>this.choosePlan('getMilkPerYear', 4000)}>
              6000
            </button>
          </div>
          <div>Вибір відгодівлі молодняку</div>
          <div className="btn-group">
            <button className={
            classNames('btn ', {'btn-default': this.state.typeFeeding !== 'intensive'}, {'btn-success': this.state.typeFeeding === 'intensive'})}
                    onClick={()=>this.choosePlan('typeFeeding', 'intensive')}>інтенсивна
            </button>
            <button className={
            classNames('btn ', {'btn-default': this.state.typeFeeding !== 'many_components'}, {'btn-success': this.state.typeFeeding === 'many_components'})}
                    onClick={()=>this.choosePlan('typeFeeding', 'many_components')}>багатокомпонентна
            </button>
          </div>
          <div >Розрахувати загальну потребу в кормах</div>
          <button className="btn btn-default" onClick={this.calculateFullNeedingOfStern}>Розрахувати загальну потребу
          </button>
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
        </div> : <div>
          <BuildingsForStern {...this.props}/>
        </div>}
      </div>
    )
  }
}


