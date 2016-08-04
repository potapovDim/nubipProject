import React from 'react'
import connect from 'redux'


class TractorTable extends React.Component {
  handleCollectData = ()=> {
    let name = this.refs.name.value
    let power = this.refs.power.value
    let rotate = this.refs.rotate.value
    let pov = this.refs.pov.value
    if (name != '' && power != '' && rotate != '' && pov != '' ) {
      let newTrac = {
        name: name,
        power: power,
        rotate: rotate,
        pov: pov,
      }
      this.props.addToPumpTable(newTrac,'tractors')
    }
  }
  handleRemoveData=()=>{
    this.props.removeFromPumpTable('tractors')
  }
  render() {
    let {tractors}=this.props.tables;
    let table = tractors.map(function (item, index) {
      return (
        <tr key={index}>
          <td className="active">Field {item.name}</td>
          <td className="active">Field {item.power}</td>
          <td className="active">Field {item.rotate}</td>
          <td className="active">Field {item.pov}</td>
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
          </tr>
          </thead>
          <tbody>
          {table}
          <tr>
            <td><input ref="name" placeholder="name"></input></td>
            <td><input ref="power" placeholder="power"></input></td>
            <td><input ref="rotate" placeholder="volume"></input></td>
            <td><input ref="pov" placeholder="hight"></input></td>
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

export default TractorTable