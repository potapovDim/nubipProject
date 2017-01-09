import React from 'react'
import Infinity from 'react-infinite'
import {addToTable, removeFromTable} from '../../../reducers/tables/actions'

export class SternMachineTable extends React.Component {
  handleCollectData = ()=> {
    let brand = this.refs.brand.value
    let work_vlolume = this.refs.work_vlolume.value
    let L = this.refs.L.value
    let W = this.refs.W.value
    let weight = this.refs.weight.value
    let tractor_power = this.refs.tractor_power.value
    let price = this.refs.price.value
    if (brand != '' &&
      work_vlolume != '' &&
      L != '' &&
      W != '' &&
      weight != '' &&
      tractor_power != '' &&
      price != ''
      ) {
      let stern_machines = {
            brand ,
            work_vlolume ,
            L ,
            W ,
            weight ,
            tractor_power ,
            price
         }
      this.props.dispatch(addToTable(stern_machines, 'stern_machines'))
    }
  }
  handleRemoveData = ()=> {
    this.props.dispatch(removeFromTable('stern_machines'))
  }

  render() {
    let {stern_machines}=this.props;
    let table = stern_machines.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width:'14%'}} className="active">{item.brand}</td>
          <td style={{width:'14%'}} className="active">{item.work_volume}</td>
          <td style={{width:'14%'}} className="active">{item.L}</td>
          <td style={{width:'14%'}} className="active">{item.W}</td>
          <td style={{width:'14%'}} className="active">{item.weight}</td>
          <td style={{width:'14%'}} className="active">{item.tractor_power}</td>
          <td style={{width:'14%'}} className="active">{item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Основні показники машин для розавання кормів</h3>
        <table style={{width:'100%'}} className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width:'14%',height:'40px'}}>Марка</td>
            <td style={{width:'14%'}}>Робочий о'єм , метрів кубічних</td>
            <td style={{width:'14%'}}>Довжина ,метрів</td>
            <td style={{width:'14%'}}>Ширина ,метрів</td>
            <td style={{width:'14%'}}>Масса ,кг</td>
            <td style={{width:'14%'}}>Потужність трактора , кВт</td>
            <td style={{width:'14%'}}>Ціна</td>
          </tr>
          </thead>
        </table>
        <Infinity containerHeight={800} elementHeight={20}>
          <table className="table text-center">
            <tbody>
            {table}
            </tbody>
          </table>
        </Infinity>
        <table style={{width:'100%'}} className="table text-center">
          <tbody >
          <tr>
            <td style={{width:'6%'}}><input style={{width:'100%'}} ref="brand" placeholder="марка"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="work_vlolume"
                                            placeholder="Робочий об'єм"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="L"
                                            placeholder="Довжина"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="W"
                                            placeholder="Ширина"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="weight"
                                            placeholder="Маса"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="tractor_power"
                                            placeholder="Потужність "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="price" placeholder="ціна "/></td>
          </tr>
          </tbody>
        </table >
        <button onClick={this.handleCollectData}>Додати</button>
        <button onClick={this.handleRemoveData}>Видалити</button>
      </div>
    )
  }
}
