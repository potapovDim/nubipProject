import React from 'react'
import Infinity from 'react-infinite'

class MilkingMachinesTable extends React.Component {
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
      quantity_personal!=''&&
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
        quantity_personal:quantity_personal,
        productivity: productivity,
        man_productivity_with2: man_productivity_with2,
        man_productivity_with3: man_productivity_with3,
        brand_vacuum_pump: brand_vacuum_pump,
        vacuum_pump_quantity: vacuum_pump_quantity,
        power: power,
        weight: weight,
        price: price
      }
      this.props.addToTable(milking_machine, 'milking_machines')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromTable('milking_machines')
  }

  render() {
    let {milking_machines}=this.props.tables;
    let table = milking_machines.map(function (item, index) {
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
    console.log(this.props.tables.milking_machines)
    return (
      <div>
        <h3 className="text-center">Техніко-економічні показники доїльних установок</h3>
        <table style={{width:'100%'}} className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width:'6%',height:'40px'}}>Марка</td>
            <td style={{width:'8%'}}>Поголів'я корів</td>
            <td style={{width:'8%'}}>Кількість доїльних апаратів</td>
            <td style={{width:'8%'}}>Тип і марка доїльного апарату</td>
            <td style={{width:'8%'}}>Кількість майстрів машинного доїння</td>
            <td style={{width:'8%'}}>Продуктивність за одну годину ,голів корів</td>
            <td style={{width:'8%'}}>Продуктивність майстра з двома апаратами</td>
            <td style={{width:'8%'}}>Продуктивність майстра з трьома апаратами</td>
            <td style={{width:'8%'}}>Марка вакуумного насоса</td>
            <td style={{width:'8%'}}>Кількість вакуумних насосів</td>
            <td style={{width:'8%'}}>Потужність привода ,кВт</td>
            <td style={{width:'8%'}}>Маса установки ,кг</td>
            <td style={{width:'8%'}}>Ціна</td>
          </tr>
          </thead>
        </table>
        <Infinity containerHeight={300} elementHeight={20}>
          <table className="table text-center">
            <tbody>
            {table}
            </tbody>
          </table>
        </Infinity>
        <table  style={{width:'100%'}} className="table text-center">
          <tbody >
          <tr>
            <td style={{width:'6%'}}  ><input style={{width:'100%'}} ref="brand" placeholder="марка"/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="quantity_cows" placeholder="поголів'я корів"/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="quantity_machines" placeholder="кількість апаратів"/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="type_brand_apparatus" placeholder="тип і марка"/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="quantity_personal" placeholder="кількість майстрів"/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="productivity" placeholder="продуктивність за год"/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="man_productivity_with2" placeholder="з двома апаратами "/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="man_productivity_with3" placeholder="з трьома апаратами "/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="brand_vacuum_pump" placeholder="марка насоса  "/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="vacuum_pump_quantity" placeholder="кількість насосів "/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="power" placeholder="потужність привода "/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="weight" placeholder="маса установки "/></td>
            <td style={{width:'8%'}}  ><input style={{width:'100%'}} ref="price" placeholder="ціна "/></td>
          </tr>
          </tbody>
        </table >
        <button onClick={this.handleCollectData}>ADD</button>
        <button onClick={this.handleRemoveData}>REMOVE</button>
        <button >FORM STERN REPOSITORIES</button>
      </div>
    )
  }
}

export default MilkingMachinesTable