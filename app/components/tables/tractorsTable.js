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
      this.props.addToPumpTable(newTrac,'machinetable')
    }
  }
  handleRemoveData=()=>{
    this.props.removeFromPumpTable('machinetable')
  }
  render() {
    let {machinetable}=this.props.tables;
    let table = machinetable.map(function (item, index) {
      return (
        <tr key={index}>
          <td className="active">Field {item.name}</td>
          <td className="active">Field {item.power}</td>
          <td className="active">Field {item.rotate}</td>
          <td className="active">Field {item.pov}</td>
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
          </tr>
          </thead>
          <tbody>
          {table}
          <tr>
            <td><input ref="name" placeholder="name"></input></td>
            <td><input ref="power" placeholder="power"></input></td>
            <td><input ref="rotate" placeholder="volume"></input></td>
            <td><input ref="pov" placeholder="hight"></input></td>
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