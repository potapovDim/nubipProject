import React from 'react'
import Infinity from 'react-infinite'


class PumpTable extends React.Component {
  handleCollectData = ()=> {
    let name = this.refs.name.value
    let power = this.refs.power.value
    let volume = this.refs.volume.value
    let hight = this.refs.hight.value
    let dop = this.refs.dop.value
    let price = this.refs.price.value
    if (name != '' && power != '' && volume != '' && hight != '' && dop && price != '') {
      let newPump = {
        name: name,
        power: power,
        volume: volume,
        hight: hight,
        dop: dop,
        price: price
      }
      this.props.addToTable(newPump, 'pumptable')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromTable('pumptable')
  }

  render() {
    let {pumptable}=this.props.tables;
    let table = pumptable.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width:'16%'}} className="active">Field {item.name}</td>
          <td style={{width:'16%'}} className="active">Field {item.power}</td>
          <td style={{width:'16%'}} className="active">Field {item.volume}</td>
          <td style={{width:'16%'}} className="active">Field {item.hight}</td>
          <td style={{width:'16%'}} className="active">Field {item.dop}</td>
          <td style={{width:'16%'}} className="active">Field {item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">PUMP TABLE</h3>
        <table className="table">
          <thead>
          <tr className="success">
            <td>header 1</td>
            <td>header 1</td>
            <td>header 1</td>
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
            <td><input ref="power" placeholder="power"></input></td>
            <td><input ref="volume" placeholder="volume"></input></td>
            <td><input ref="hight" placeholder="hight"></input></td>
            <td><input ref="dop" placeholder="dop"></input></td>
            <td><input ref="price" placeholder="price"></input></td>
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