import React from 'react'
import Infinity from 'react-infinite'
import {addToTable, removeFromTable} from '../../../reducers/tables/actions'

export class DrinkingbowCowsTable extends React.Component {
  handleCollectData = ()=> {
    let brand = this.refs.brand.value
    let water_volume = this.refs.water_volume.value
    let seats = this.refs.seats.value
    let heads = this.refs.heads.value
    let weight = this.refs.weight.value
    let price = this.refs.price.value
    if (brand != '' && water_volume != '' && seats != '' && heads != '' && weight != '' && price != '') {
      let newPump = {
        brand: brand,
        water_volume: water_volume,
        seats: seats,
        heads: heads,
        weight: weight,
        price: price,
      }
      this.props.dispatch(addToTable(newPump, 'drinking_bowl_cows'))
    }
  }
  handleRemoveData = ()=> {
    this.props.dispatch(removeFromTable('drinking_bowl_cows'))
  }

  render() {
    let {drinking_bowl_cows}=this.props;
    let table = drinking_bowl_cows.map(function (item, index) {
      return (

        <tr key={index}>
          <td style={{width:'16%'}} className="active"> {item.brand}</td>
          <td style={{width:'16%'}} className="active"> {item.water_volume}</td>
          <td style={{width:'16%'}} className="active"> {item.seats}</td>
          <td style={{width:'16%'}} className="active"> {item.heads}</td>
          <td style={{width:'16%'}} className="active"> {item.weight}</td>
          <td style={{width:'16%'}} className="active"> {item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Автонапувалки для великої рогатої худоби</h3>
        <table style={{width:'100%'}}className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width:'16%',height:'40px'}} >Марка</td>
            <td style={{width:'16%'}} >Місткість чаші ,л</td>
            <td style={{width:'16%'}} >Кількість місць напування</td>
            <td style={{width:'16%'}} >Кількість голів ,що обслуговує</td>
            <td style={{width:'16%'}} >Маса ,кг</td>
            <td style={{width:'16%'}} >Ціна </td>
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
            <td><input ref="water_volume" placeholder="місткість чаші ,л"/></td>
            <td><input ref="seats" placeholder="кількість місцб"/></td>
            <td><input ref="heads" placeholder="кількість голів"/></td>
            <td><input ref="weight" placeholder="маса"/></td>
            <td><input ref="price" placeholder="ціна"/></td>
          </tr>
          </tbody>
        </table >
        <button onClick={this.handleCollectData}>ADD</button >
        <button onClick={this.handleRemoveData}>REMOVE</button >
      </div >
    )
  }
}

export class DrinkingbowCalvesTable extends React.Component {
  handleCollectData = ()=> {
    let brand = this.refs.brand.value
    let water_volume = this.refs.water_volume.value
    let seats = this.refs.seats.value
    let heads = this.refs.heads.value
    let weight = this.refs.weight.value
    let price = this.refs.price.value
    if (brand != '' && water_volume != '' && seats != '' && heads != '' && weight != '' && price != '') {
      let newPump = {
        brand: brand,
        water_volume: water_volume,
        seats: seats,
        heads: heads,
        weight: weight,
        price: price,
      }
      this.props.dispatch(addToTable(newPump, 'drinking_bowl_calves'))
    }
  }
  handleRemoveData = ()=> {
    this.props.dispatch(removeFromTable('drinking_bowl_calves'))
  }

  render() {
    let {drinking_bowl_calves}=this.props;
    let table = drinking_bowl_calves.map(function (item, index) {
      return (

        <tr key={index}>
          <td style={{width:'16%'}} className="active"> {item.brand}</td>
          <td style={{width:'16%'}} className="active"> {item.water_volume}</td>
          <td style={{width:'16%'}} className="active"> {item.seats}</td>
          <td style={{width:'16%'}} className="active"> {item.heads}</td>
          <td style={{width:'16%'}} className="active"> {item.weight}</td>
          <td style={{width:'16%'}} className="active"> {item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Автонапувалки для телят</h3>
        <table style={{width:'100%'}}className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width:'16%',height:'40px'}} >Марка</td>
            <td style={{width:'16%'}} >Місткість чаші ,л</td>
            <td style={{width:'16%'}} >Кількість місць напування</td>
            <td style={{width:'16%'}} >Кількість голів ,що обслуговує</td>
            <td style={{width:'16%'}} >Маса ,кг</td>
            <td style={{width:'16%'}} >Ціна </td>
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
            <td><input ref="water_volume" placeholder="місткість чаші ,л"/></td>
            <td><input ref="seats" placeholder="кількість місцб"/></td>
            <td><input ref="heads" placeholder="кількість голів"/></td>
            <td><input ref="weight" placeholder="маса"/></td>
            <td><input ref="price" placeholder="ціна"/></td>
          </tr>
          </tbody>
        </table >
        <button onClick={this.handleCollectData}>ADD</button >
        <button onClick={this.handleRemoveData}>REMOVE</button >
      </div >
    )
  }
}
