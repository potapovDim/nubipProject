import React from 'react'
import Infinity from 'react-infinite'

class DrinkingbowTable extends React.Component {
  handleCollectData = ()=> {
    let name = this.refs.name.value
    let water = this.refs.water.value
    let price = this.refs.price.value
    if (name != '' && water != '' && price != '') {
      let newPump = {
        name: name,
        water: water,
        price: price,
      }
      this.props.addToTable(newPump, 'drinking_bowl')
    }
  }
  handleRemoveData = ()=> {
    this.props.removePumpTable('drinking_bowl')
  }

  render() {
    let {drinking_bowl}=this.props.tables;
    let table = drinking_bowl.map(function (item, index) {
      return (

        <tr key={index}>
          <td style={{width:'33%'}} className="active">Field {item.name}</td>
          <td style={{width:'33%'}} className="active">Field {item.water}</td>
          <td style={{width:'33%'}} className="active">Field {item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">DRINKING BOWL TABLE</h3>
        <table className="table">
          <thead>
          <tr className="success">
            <td>header 1</td>
            <td>header 1</td>
            <td>header 1</td>
          </tr>
          </thead>
        </table>
        <Infinity containerHeight={300} elementHeight={20}>
          <table className="table">
            <tbody>
            {table}
            </tbody>
          </table>
        </Infinity>
        <table className="table">
          <tbody>
          <tr>
            <td><input ref="name" placeholder="name"></input></td>
            <td><input ref="water" placeholder="water"></input></td>
            <td><input ref="price" placeholder="price"></input></td>
          </tr>
          </tbody>
        </table >
        <button onClick={this.handleCollectData}>ADD</button >
        <button onClick={this.handleRemoveData}>REMOVE</button >
      </div >
    )
  }
}

export default DrinkingbowTable