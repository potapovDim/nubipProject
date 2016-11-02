import React from 'react'
import Infinity from 'react-infinite'
import {addToTable, removeFromTable} from '../../../reducers/tables/actions'


export class PumpRotateTable extends React.Component {
  handleCollectData = ()=> {
    let brand = this.refs.brand.value
    let innings = this.refs.innings.value
    let full_pressure = this.refs.full_pressure.value
    let speed_rotate = this.refs.speed_rotate.value
    let power = this.refs.power.value
    let KKD = this.refs.KKD.value
    let allowable_height = this.refs.allowable_height.value
    let price = this.refs.price.value
    if (brand != '' && innings != '' && full_pressure != '' && speed_rotate != '' && power && KKD != '' && allowable_height != '' && price != '') {
      let newPump = {
        brand: brand,
        innings: innings,
        full_pressure: full_pressure,
        speed_rotate: speed_rotate,
        power: power,
        KKD: KKD,
        allowable_height: allowable_height,
        price: price

      }
      this.props.dispatch(addToTable(newPump, 'pumps_rotary'))
    }
  }
  handleRemoveData = ()=> {
    this.props.dispatch(removeFromTable('pumps_rotary'))
  }

  render() {
    let {pumps_rotary}=this.props.tables;
    let table = pumps_rotary.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width: '12%'}} className="active"> {item.brand}</td>
          <td style={{width: '12%'}} className="active"> {item.innings}</td>
          <td style={{width: '12%'}} className="active"> {item.full_pressure}</td>
          <td style={{width: '12%'}} className="active"> {item.speed_rotate}</td>
          <td style={{width: '12%'}} className="active"> {item.power}</td>
          <td style={{width: '12%'}} className="active"> {item.KKD}</td>
          <td style={{width: '12%'}} className="active"> {item.allowable_height}</td>
          <td style={{width: '12%'}} className="active"> {item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Відцентрові насоси</h3>
        <table className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width: '12%', height: '40px'}}>Марка</td>
            <td style={{width: '12%'}}>Подача ,м3/год</td>
            <td style={{width: '12%'}}>Повний напір ,мПа</td>
            <td style={{width: '12%'}}>Частота обертання ,1/хв</td>
            <td style={{width: '12%'}}>Потужність електродвигуна ,кВт</td>
            <td style={{width: '12%'}}>ККД насоса ,%</td>
            <td style={{width: '12%'}}>Допустима висота всмоктування ,м</td>
            <td style={{width: '12%'}}>Ціна</td>
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
        <table className="table text-center">
          <tbody>
          <tr>
            <td><input ref="brand" placeholder="марка"/></td>
            <td><input ref="innings" placeholder="подача"/></td>
            <td><input ref="full_pressure" placeholder="повний напір"/></td>
            <td><input ref="speed_rotate" placeholder="швидкість обертання"/></td>
            <td><input ref="power" placeholder="потужність"/></td>
            <td><input ref="KKD" placeholder="ККД насоса"/></td>
            <td><input ref="allowable_height" placeholder="висота всмоктування"/></td>
            <td><input ref="price" placeholder="ціна"/></td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.handleCollectData}>ADD</button>
        <button onClick={this.handleRemoveData}>REMOVE</button>
      </div>
    )
  }
}

export class PumpSubmersibleTable extends React.Component {
  handleCollectData = ()=> {
    let brand = this.refs.brand.value
    let innings = this.refs.innings.value
    let full_pressure = this.refs.full_pressure.value
    let speed_rotate = this.refs.speed_rotate.value
    let power = this.refs.power.value
    let diameter_hole = this.refs.diameter_hole.value
    let diameter_pipe = this.refs.diameter_pipe.value
    let quantity_whiles = this.refs.quantity_whiles.value
    let price = this.refs.price.value
    if (brand != '' && innings != '' && full_pressure != '' && quantity_whiles != '' && speed_rotate != '' && power && diameter_hole != '' && diameter_pipe != '' && price != '') {
      let newPump = {
        brand: brand,
        innings: innings,
        full_pressure: full_pressure,
        speed_rotate: speed_rotate,
        power: power,
        diameter_hole: diameter_hole,
        diameter_pipe: diameter_pipe,
        quantity_whiles: quantity_whiles,
        price: price

      }
      console.log('------------------1111')
      this.props.addToTable(newPump, 'pumps_submersible')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromTable('pumps_submersible')
  }

  render() {
    let {pumps_submersible}=this.props.tables;
    let table = pumps_submersible.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width: '11%'}} className="active"> {item.brand}</td>
          <td style={{width: '11%'}} className="active"> {item.innings}</td>
          <td style={{width: '11%'}} className="active"> {item.full_pressure}</td>
          <td style={{width: '11%'}} className="active"> {item.speed_rotate}</td>
          <td style={{width: '11%'}} className="active"> {item.power}</td>
          <td style={{width: '11%'}} className="active"> {item.diameter_hole}</td>
          <td style={{width: '11%'}} className="active"> {item.diameter_pipe}</td>
          <td style={{width: '11%'}} className="active"> {item.quantity_whiles}</td>
          <td style={{width: '11%'}} className="active"> {item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Заглибні відцентрові насоси</h3>
        <table className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td className="width-bl">Марка</td>
            <td className="width-bl">Подача ,м3/год</td>
            <td className="width-bl">Повний напір ,мПа</td>
            <td className="width-bl">Частота обертання ,1/хв</td>
            <td className="width-bl">Потужність електродвигуна ,кВт</td>
            <td className="width-bl">Діаметр свердловини</td>
            <td className="width-bl">Діаметр трубопровода</td>
            <td className="width-bl">Кількість робочих коліс</td>
            <td className="width-bl">Ціна</td>
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
        <table style={{width:'100%'}} className="table text-center">
          <tbody>
          <tr>
            <td style={{width:'6%'}} ><input style={{width:'100%'}} ref="brand" placeholder="марка"/></td>
            <td style={{width:'6%'}} ><input style={{width:'100%'}} ref="innings" placeholder="подача"/></td>
            <td style={{width:'6%'}} ><input style={{width:'100%'}} ref="full_pressure" placeholder="повний напір"/></td>
            <td style={{width:'6%'}} ><input style={{width:'100%'}} ref="speed_rotate" placeholder="швидкість обертання"/></td>
            <td style={{width:'6%'}} ><input style={{width:'100%'}} ref="power" placeholder="потужність"/></td>
            <td style={{width:'6%'}} ><input style={{width:'100%'}} ref="diameter_hole" placeholder="D свердловини"/></td>
            <td style={{width:'6%'}} ><input style={{width:'100%'}} ref="diameter_pipe" placeholder="D трубопровода"/></td>
            <td style={{width:'6%'}} ><input style={{width:'100%'}} ref="quantity_whiles" placeholder='кількість робочих коліс'/></td>
            <td style={{width:'6%'}} ><input style={{width:'100%'}} ref="price" placeholder="ціна"/></td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.handleCollectData}>ADD</button>
        <button onClick={this.handleRemoveData}>REMOVE</button>
      </div>
    )
  }
}
