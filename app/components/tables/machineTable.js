import React from 'react'
import connect from 'redux'


class MachineTable extends React.Component {
  handleCollectData = ()=> {
    let name = this.refs.name.value
    let power = this.refs.power.value
    let volume = this.refs.volume.value
    let hight = this.refs.hight.value
    let dop = this.refs.dop.value
    if (name != '' && power != '' && volume != '' && hight != '' && dop) {
      let newPump = {
        name: name,
        power: power,
        volume: volume,
        hight: hight,
        dop: dop
      }
      this.props.addToPumpTable(newPump)
    }
  }
  handleRemoveData=()=>{
    this.props.removeFromPumpTable()
  }
  render() {
    let {pumptable}=this.props.tables;
    let table = pumptable.map(function (item, index) {
      return (
        <tr key={index}>
          <td className="active">Field {item.name}</td>
          <td className="active">Field {item.power}</td>
          <td className="active">Field {item.volume}</td>
          <td className="active">Field {item.hight}</td>
          <td className="active">Field {item.dop}</td>
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