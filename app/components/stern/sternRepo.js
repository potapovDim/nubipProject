import React, {Component} from 'react'
import classNames from 'classnames'
import {
  sternStocks,
  sternStore,
  quantityStores
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

  componentWillMount() {
    console.log(this.props)
    const {cows, cow_before_20days, building_for_stern, stern_norms, stern_norms_feeding} = this.props
    this.setState({cows, cow_before_20days, building_for_stern, stern_norms, stern_norms_feeding})
  }

  calculateSternFeeding = () => {
    const sternFeeding = {}
    const {cow_before_20days, stern_norms_feeding, typeFeeding} =this.state
    typeFeeding === 'intensive' ? stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = cow_before_20days * parseFloat(value.intensive)
    }) : stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = cow_before_20days * parseFloat(value.many_components)
    })

  }

  calculateSternNeedCows = () => {
    const sternCows = {}
    const {cows, stern_norms, getMilkPerYear} = this.state
    switch (getMilkPerYear) {
      case '2000':
        stern_norms.map(value => {
          sternCows[value.view_feed] = parseFloat(value.get_milk_year2000) * cows
        })
        return sternCows
      case '3000':
        stern_norms.map(value => {
          sternCows[value.view_feed] = parseFloat(value.get_milk_year3000) * cows
        })
        return sternCows
      case '4000':
        stern_norms.map(value => {
          sternCows[value.view_feed] = parseFloat(value.get_milk_year3000) * cows
        })
        return sternCows
    }
  }
  renderSternNorms = ()=> {
    return (<SternTable {...this.props} />)
  }
  renderSternNormsFeeding = () => {
    return (<SternTableFeeding {...this.props} />)
  }

  render() {
    return (
      <div>
        <InformationButton name="Користування">
          {this.popoverLeft}
        </InformationButton>
        <div className="entries-data">
          <div className="stern-first-table">{this.renderSternNorms()}</div>
          <div className="stern-separator"></div>
          <div className="stern-second-table">{this.renderSternNormsFeeding()}</div>
        </div>
        <div className="entries-data">
          <div className="stern-first-table  btn-group">
            <h3>Виберіть перспективний середньорічний надій</h3>
            <button
              className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== '2000'}, {'btn-success': this.state.getMilkPerYear === '2000'})}
              onClick={()=>this.setState({getMilkPerYear: '2000'})}>
              2000
            </button>
            <button
              className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== '3000'}, {'btn-success': this.state.getMilkPerYear === '3000'})}
              onClick={()=>this.setState({getMilkPerYear: '3000'})}>
              3000
            </button>
            <button
              className={classNames('btn ', {'btn-default': this.state.getMilkPerYear !== '4000'}, {'btn-success': this.state.getMilkPerYear === '4000'})}
              onClick={()=>this.setState({getMilkPerYear: '4000'})}>
              4000
            </button>
            <button className="btn btn-default" disabled={this.state.getMilkPerYear === null}>Розрахувати основну
              потребу в кормі
            </button>
          </div>
          <div className="stern-separator"></div>
          <div className="stern-second-table btn-group">
            <h3>Виберіть вид відгодівлі молодняку</h3>
            <button className={
              classNames('btn ', {'btn-default': this.state.typeFeeding !== 'intensive'}, {'btn-success': this.state.typeFeeding === 'intensive'})}
                    onClick={()=>this.setState({typeFeeding: 'intensive'})}
            >інтенсивна
            </button>
            <button className={
              classNames('btn ', {'btn-default': this.state.typeFeeding !== 'many_components'}, {'btn-success': this.state.typeFeeding === 'many_components'})}
                    onClick={()=>this.setState({typeFeeding: 'many_components'})}>багатокомпонентна
            </button>
            <button className="btn btn-default" disabled={this.state.typeFeeding === null}>Розрахувати потребу в кормах
              на відгодівлі
            </button>
          </div>
        </div>
      </div>
    )
  }
}
