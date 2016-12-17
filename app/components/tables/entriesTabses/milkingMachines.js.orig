import React from 'react'
import Infinity from 'react-infinite'
import {addToTable, removeFromTable} from '../../../reducers/tables/actions'

export class MilkingMachinesStallTable extends React.Component {
  handleCollectData = ()=> {
    let brand = this.refs.brand.value
    let quantity_cows = this.refs.quantity_cows.value
    let quantity_machines = this.refs.quantity_machines.value
    let type_brand_apparatus = this.refs.type_brand_apparatus.value
    let quantity_personal = this.refs.quantity_personal.value
    let productivity = this.refs.productivity.value
    let man_productivity_with2 = this.refs.price.value
    let man_productivity_with3 = this.refs.price.value
    let brand_vacuum_pump = this.refs.price.value
    let vacuum_pump_quantity = this.refs.price.value
    let power = this.refs.price.value
    let weight = this.refs.price.value
    let price = this.refs.price.value
    if (brand != '' &&
      quantity_cows != '' &&
      quantity_machines != '' &&
      type_brand_apparatus != '' &&
      quantity_personal != '' &&
      productivity != '' &&
      man_productivity_with2 != '' &&
      man_productivity_with3 != '' &&
      brand_vacuum_pump != '' &&
      vacuum_pump_quantity != '' &&
      power != '' &&
      weight != '' &&
      price != '') {
      let milking_machine = {
        brand: brand,
        quantity_cows: quantity_cows,
        quantity_machines: quantity_machines,
        type_brand_apparatus: type_brand_apparatus,
        quantity_personal: quantity_personal,
        productivity: productivity,
        man_productivity_with2: man_productivity_with2,
        man_productivity_with3: man_productivity_with3,
        brand_vacuum_pump: brand_vacuum_pump,
        vacuum_pump_quantity: vacuum_pump_quantity,
        power: power,
        weight: weight,
        price: price
      }
      this.props.dispatch(addToTable(milking_machine, 'milking_machines_stall'))
    }
  }
  handleRemoveData = ()=> {
    this.props.dispatch(removeFromTable('milking_machines_stall'))
  }

  render() {
    let {milking_machines_stall}=this.props;
    let table = milking_machines_stall.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width:'7%'}} className="active">{item.brand}</td>
          <td style={{width:'7%'}} className="active">{item.quantity_cows}</td>
          <td style={{width:'7%'}} className="active">{item.quantity_machines}</td>
          <td style={{width:'7%'}} className="active">{item.type_brand_apparatus}</td>
          <td style={{width:'7%'}} className="active">{item.quantity_personal}</td>
          <td style={{width:'7%'}} className="active">{item.productivity}</td>
          <td style={{width:'7%'}} className="active">{item.man_productivity_with2}</td>
          <td style={{width:'7%'}} className="active">{item.man_productivity_with3}</td>
          <td style={{width:'7%'}} className="active">{item.brand_vacuum_pump}</td>
          <td style={{width:'7%'}} className="active">{item.vacuum_pump_quantity}</td>
          <td style={{width:'7%'}} className="active">{item.power}</td>
          <td style={{width:'7%'}} className="active">{item.weight}</td>
          <td style={{width:'7%'}} className="active">{item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Техніко-економічні показники доїльних установок (Установки для доїння у стійлах)</h3>
        <table style={{width:'100%'}} className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width:'6%',height:'40px'}}>Марка</td>
            <td style={{width:'7%'}}>Поголів'я корів</td>
            <td style={{width:'7%'}}>Кількість доїльних апаратів</td>
            <td style={{width:'7%'}}>Тип і марка доїльного апарату</td>
            <td style={{width:'7%'}}>Кількість майстрів машинного доїння</td>
            <td style={{width:'7%'}}>Продуктивність за одну годину ,голів корів</td>
            <td style={{width:'7%'}}>Продуктивність майстра з двома апаратами</td>
            <td style={{width:'7%'}}>Продуктивність майстра з трьома апаратами</td>
            <td style={{width:'7%'}}>Марка вакуумного насоса</td>
            <td style={{width:'7%'}}>Кількість вакуумних насосів</td>
            <td style={{width:'7%'}}>Потужність привода ,кВт</td>
            <td style={{width:'7%'}}>Маса установки ,кг</td>
            <td style={{width:'7%'}}>Ціна</td>
          </tr>
          </thead>
        </table>
        <Infinity containerHeight={200} elementHeight={20}>
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
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="quantity_cows" placeholder="поголів'я корів"/>
            </td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="quantity_machines"
                                            placeholder="кількість апаратів"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="type_brand_apparatus"
                                            placeholder="тип і марка"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="quantity_personal"
                                            placeholder="кількість майстрів"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="productivity"
                                            placeholder="продуктивність за год"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="man_productivity_with2"
                                            placeholder="з двома апаратами "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="man_productivity_with3"
                                            placeholder="з трьома апаратами "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="brand_vacuum_pump"
                                            placeholder="марка насоса  "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="vacuum_pump_quantity"
                                            placeholder="кількість насосів "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="power" placeholder="потужність привода "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="weight" placeholder="маса установки "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="price" placeholder="ціна "/></td>
          </tr>
          </tbody>
        </table >
        <button onClick={this.handleCollectData}>ADD</button>
        <button onClick={this.handleRemoveData}>REMOVE</button>
      </div>
    )
  }
}

export class MilkingMachinesHallTable extends React.Component {
  handleCollectData = ()=> {
    let brand = this.refs.brand.value
    let quantity_cows = this.refs.quantity_cows.value
    let quantity_personal = this.refs.quantity_personal.value
    let quantity_operator = this.refs.quantity_operator.value
    let quantity_apparatus = this.refs.quantity_apparatus.value
    let productivity_per_hour = this.refs.productivity_per_hour.value
    let power_needed = this.refs.power_needed.value
    let hopper_capacity = this.refs.hopper_capacity.value
    let length_conveyor = this.refs.length_conveyor.value
    let power_drive = this.refs.power_drive.value
    let vacuum_system_aggregate = this.refs.vacuum_system_aggregate.value
    let aggregate_power = this.refs.aggregate_power.value
    let weight = this.refs.weight.value
    let price = this.refs.price.value
    if (brand != '' &&
      quantity_cows != '' &&
      quantity_personal != '' &&
      quantity_operator != '' &&
      quantity_apparatus != '' &&
      productivity_per_hour != '' &&
      power_needed != '' &&
      hopper_capacity != '' &&
      length_conveyor != '' &&
      power_drive != '' &&
      vacuum_system_aggregate != '' &&
      aggregate_power != '' &&
      weight != '' &&
      price != '') {
      let milking_machine = {
        brand: brand,
        quantity_cows: quantity_cows,
        quantity_personal: quantity_personal,
        quantity_operator: quantity_operator,
        quantity_apparatus: quantity_apparatus,
        productivity_per_hour: productivity_per_hour,
        power_needed: power_needed,
        hopper_capacity: hopper_capacity,
        length_conveyor: length_conveyor,
        power_drive: power_drive,
        vacuum_system_aggregate: vacuum_system_aggregate,
        aggregate_power: aggregate_power,
        weight: weight,
        price: price
      }
      this.props.dispatch(addToTable(milking_machine, 'milking_machines_parlor'))
    }
  }
  handleRemoveData = ()=> {
    this.props.dispatch(removeFromTable('milking_machines_parlor'))
  }

  render() {
    let {milking_machines_parlor}=this.props;
    let table = milking_machines_parlor.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width:'7%'}} className="active">{item.brand}</td>
          <td style={{width:'7%'}} className="active">{item.quantity_cows}</td>
          <td style={{width:'7%'}} className="active">{item.quantity_personal}</td>
          <td style={{width:'7%'}} className="active">{item.quantity_operator}</td>
          <td style={{width:'7%'}} className="active">{item.quantity_apparatus}</td>
          <td style={{width:'7%'}} className="active">{item.productivity_per_hour}</td>
          <td style={{width:'7%'}} className="active">{item.power_needed}</td>
          <td style={{width:'7%'}} className="active">{item.hopper_capacity}</td>
          <td style={{width:'7%'}} className="active">{item.length_conveyor}</td>
          <td style={{width:'7%'}} className="active">{item.power_drive}</td>
          <td style={{width:'7%'}} className="active">{item.vacuum_system_aggregate}</td>
          <td style={{width:'7%'}} className="active">{item.aggregate_power}</td>
          <td style={{width:'7%'}} className="active">{item.weight}</td>
          <td style={{width:'7%'}} className="active">{item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Техніко-економічні показники доїльних установок (Установки для доїння у доїльному залі)</h3>
        <table style={{width:'100%'}} className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width:'6%',height:'40px'}}>Марка</td>
            <td style={{width:'7%'}}>Кількі корів на яку розрахована обстановка</td>
            <td style={{width:'7%'}}>Кількість майстрів</td>
            <td style={{width:'7%'}}>Кількість операторів</td>
            <td style={{width:'7%'}}>Кількість доїльних апаратів</td>
            <td style={{width:'7%'}}>Продуктивність за годину,голів</td>
            <td style={{width:'7%'}}>Потужність установки</td>
            <td style={{width:'7%'}}>Місткість бункера (Механізм роздавання кормів)</td>
            <td style={{width:'7%'}}>Довжина транспортера (Механізм роздавання кормів)</td>
            <td style={{width:'7%'}}>Потужність привода (Механізм роздавання кормів)</td>
            <td style={{width:'7%'}}>Вакуумно-силовий агрегат(Вакуумна система)</td>
            <td style={{width:'7%'}}>Потужність привода (Вакуумна система)</td>
            <td style={{width:'7%'}}>Вага</td>
            <td style={{width:'7%'}}>Ціна</td>
          </tr>
          </thead>
        </table>
        <Infinity containerHeight={200} elementHeight={20}>
          <table className="table text-center">
            <tbody>
            {table}
            </tbody>
          </table>
        </Infinity>
        <table style={{width:'100%'}} className="table text-left">
          <tbody >
          <tr>
            <td style={{width:'6%'}}><input style={{width:'100%'}} ref="brand" placeholder="марка"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="quantity_cows" placeholder="поголів'я корів"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="quantity_personal" placeholder="кількість мастрів"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="quantity_operator" placeholder="кількість операторів"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="quantity_apparatus" placeholder="кількість доїльних апаратів"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="productivity_per_hour" placeholder="продуктивність за год"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="power_needed" placeholder="потрібна потужність "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="hopper_capacity" placeholder="місткість бункера"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="length_conveyor" placeholder="довжина транспортера"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="power_drive" placeholder="потужність привода "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="vacuum_system_aggregate" placeholder="вакуумний силовий агрегат"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="aggregate_power" placeholder="потужність привода"/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="weight" placeholder="вага "/></td>
            <td style={{width:'7%'}}><input style={{width:'100%'}} ref="price" placeholder="ціна "/></td>
          </tr>
          </tbody>
        </table >
        <button onClick={this.handleCollectData}>ADD</button>
        <button onClick={this.handleRemoveData}>REMOVE</button>
      </div>
    )
  }
}

