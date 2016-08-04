import React from 'react'
import connect from 'redux'


class MachineTable extends React.Component {
  handleCollectData = ()=> {
    let name = this.refs.name.value
    let power = this.refs.power.value
    let volume = this.refs.volume.value
    let hight = this.refs.hight.value
    let dop = this.refs.dop.value
    let price=this.refs.price.value
    if (name != '' && power != '' && volume != '' && hight != '' && dop && price!='') {
      let newPump = {
        name: name,
        power: power,
        volume: volume,
        hight: hight,
        dop: dop,
        price:price
      }
      this.props.addToPumpTable(newPump,'machines')
    }
  }
  handleRemoveData=()=>{
    this.props.removeFromPumpTable('machines')
  }
  render() {
    let {machines}=this.props.tables;
    let table = machines.map(function (item, index) {
      return (
        <tr key={index}>
          <td className="active">Field {item.name}</td>
          <td className="active">Field {item.power}</td>
          <td className="active">Field {item.volume}</td>
          <td className="active">Field {item.hight}</td>
          <td className="active">Field {item.dop}</td>
          <td className="active">Field {item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <td>header 1</td>
            <td>header 1</td>
            <td>header 1</td>
            <td>header 1</td>
            <td>header 1</td>
            <td>header 1</td>
          </tr>
          </thead>
          <tbody>
          {table}
          <tr>
            <td><input ref="name" placeholder="name"></input></td>
            <td><input ref="power" placeholder="power"></input></td>
            <td><input ref="volume" placeholder="volume"></input></td>
            <td><input ref="hight" placeholder="hight"></input></td>
            <td><input ref="dop" placeholder="dop"></input></td>
            <td><input ref="price" placeholder="dop"></input></td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.handleCollectData}>ADD</button>
        <button onClick={this.handleRemoveData}>REMOVE</button>
      </div>
    )
  }
}

export default MachineTable