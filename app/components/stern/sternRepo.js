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

export class SternRepo extends Component {
  state = {
    getMilkPerYear: null,
    typeFeeding: null,
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
    type == 'typeFeeding' ? (this.state[type] == value ? this.setState({typeFeeding: null}) : this.setState({typeFeeding: value}))
      : (this.state[type] == value ? this.setState({getMilkPerYear: null}) : this.setState({getMilkPerYear: value}))
  }

  componentWillMount() {
    console.log(this.props)
    const {cows, cow_before_20days, building_for_stern, stern_norms, stern_norms_feeding, season_stall} = this.props
    this.setState({cows, cow_before_20days, building_for_stern, stern_norms, stern_norms_feeding, season_stall})
  }

  calculateSternFeeding = () => {
    const sternFeeding = {}
    const {cow_before_20days, stern_norms_feeding, typeFeeding} = this.state
    console.log(cow_before_20days)
    typeFeeding === 'intensive' ? stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = cow_before_20days * parseFloat(value.intensive)
    }) : stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = cow_before_20days * parseFloat(value.many_components)
    })
    console.log(sternFeeding)
  }

  calculateSternNeedCows = () => {
    const sternCows = {}
    const {cows, stern_norms, getMilkPerYear, season_stall} = this.state
    switch (getMilkPerYear) {
      case '2000':
        stern_norms.map(value => {
          sternCows[value.view_feed] = sternNeed(undefined, parseFloat(value.get_milk_year2000), cows, season_stall)
        })
        break
      case '3000':
        stern_norms.map(value => {
          sternCows[value.view_feed] = sternNeed(undefined, parseFloat(value.get_milk_year2000), cows, season_stall)
        })
        break
      case '4000':
        stern_norms.map(value => {
          sternCows[value.view_feed] = sternNeed(undefined, parseFloat(value.get_milk_year2000), cows, season_stall)
        })
        break
    }
    console.log(sternCows)
    return sternCows
  }
  renderSternNorms = ()=> {
    return (<SternTable {...this.props} />)
  }
  renderSternNormsFeeding = () => {
    return (<SternTableFeeding {...this.props} />)
  }

  render() {
    const {typeFeeding, getMilkPerYear} =this.state
    return (
      <div>
        <InformationButton name="Користування">
          {this.popoverLeft}
        </InformationButton>

        {(typeFeeding == null && getMilkPerYear == null)
        && <div className="entries-data">
          <div className="stern-first-table">{this.renderSternNorms()}</div>
          <div className="stern-separator"></div>
          <div className="stern-second-table">{this.renderSternNormsFeeding()}</div>
        </div>}
        <div className="entries-data">
          <div className="stern-first-table  btn-group">
            <h3>Виберіть перспективний середньорічний надій</h3>
            <button
              className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== '2000'}, {'btn-success': this.state.getMilkPerYear === '2000'})}
              onClick={()=>this.choosePlan('getMilkPerYear', '2000')}>
              2000
            </button>
            <button
              className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== '3000'}, {'btn-success': this.state.getMilkPerYear === '3000'})}
              onClick={()=>this.choosePlan('getMilkPerYear', '3000')}>
              3000
            </button>
            <button
              className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== '4000'}, {'btn-success': this.state.getMilkPerYear === '4000'})}
              onClick={()=>this.choosePlan('getMilkPerYear', '4000')}>
              4000
            </button>
            <button className="btn btn-default" disabled={this.state.getMilkPerYear === null}
                    onClick={this.calculateSternNeedCows}>Розрахувати основну
              потребу в кормі
            </button>
          </div>
          <div className="stern-separator"></div>
          <div className="stern-second-table btn-group">
            <h3>Виберіть вид відгодівлі молодняку</h3>
            <button className={
              classNames('btn ', {'btn-default': this.state.typeFeeding !== 'intensive'}, {'btn-success': this.state.typeFeeding === 'intensive'})}
                    onClick={()=>this.choosePlan('typeFeeding', 'intensive')}>інтенсивна
            </button>
            <button className={
              classNames('btn ', {'btn-default': this.state.typeFeeding !== 'many_components'}, {'btn-success': this.state.typeFeeding === 'many_components'})}
                    onClick={()=>this.choosePlan('typeFeeding', 'many_components')}>багатокомпонентна
            </button>
            <button className="btn btn-default" disabled={this.state.typeFeeding === null}
                    onClick={()=>this.calculateSternFeeding()}>Розрахувати потребу в кормах
              на відгодівлі
            </button>
          </div>
        </div>
      </div>
    )
  }
}
