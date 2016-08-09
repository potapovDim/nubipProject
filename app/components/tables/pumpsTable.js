import React from 'react'
import Infinity from 'react-infinite'


class PumpTable extends React.Component {
  handleCollectData = ()=> {
    let brand = this.refs.brand.value
    let innings = this.refs.innings.value
    let full_pressure = this.refs.full_pressure.value
    let speed_rotate = this.refs.speed_rotate.value
    let power = this.refs.power.value
    let KKD = this.refs.KKD.value
    let allowable_height = this.refs.allowable_height.value
    let price = this.refs.price.value
    if (brand != '' && innings != '' && full_pressure != '' && speed_rotate != '' && power && KKD != '' && allowable_height!=''&&price!='') {
      let newPump = {
        brand: brand,
        innings: innings,
        full_pressure: full_pressure,
        speed_rotate: speed_rotate,
        power: power,
        KKD: KKD,
        allowable_height:allowable_height,
        price:price

      }
      this.props.addToTable(newPump, 'pumps')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromTable('pumps')
  }

  render() {
    let {pumps}=this.props.tables;
    let table = pumps.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width:'12%'}} className="active"> {item.brand}</td>
          <td style={{width:'12%'}} className="active"> {item.innings}</td>
          <td style={{width:'12%'}} className="active"> {item.full_pressure}</td>
          <td style={{width:'12%'}} className="active"> {item.speed_rotate}</td>
          <td style={{width:'12%'}} className="active"> {item.power}</td>
          <td style={{width:'12%'}} className="active"> {item.KKD}</td>
          <td style={{width:'12%'}} className="active"> {item.allowable_height}</td>
          <td style={{width:'12%'}} className="active"> {item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Насоси</h3>
        <table className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width:'12%',height:'40px'}} >Марка</td>
            <td style={{width:'12%'}} >Подача ,м3/год</td>
            <td style={{width:'12%'}} >Повний напір ,мПа</td>
            <td style={{width:'12%'}} >Частота обертання ,1/хв</td>
            <td style={{width:'12%'}} >Потужність електродвигуна ,кВт</td>
            <td style={{width:'12%'}} >ККД насоса ,%</td>
            <td style={{width:'12%'}} >Допустима висота всмоктування ,м</td>
            <td style={{width:'12%'}} >Ціна </td>
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

export default PumpTable