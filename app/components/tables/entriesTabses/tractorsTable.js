import React from 'react'
import Infinity from 'react-infinite'


class TractorTable extends React.Component {
  handleCollectData = ()=> {
    let name = this.refs.name.value
    let power = this.refs.power.value
    let rotate = this.refs.rotate.value
    let pov = this.refs.pov.value
    if (name != '' && power != '' && rotate != '' && pov != '') {
      let newTrac = {
        name: name,
        power: power,
        rotate: rotate,
        pov: pov,
      }
      this.props.addToTable(newTrac, 'tractors')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromTable('tractors')
  }

  render() {
    let {tractors}=this.props.tables;
    let table = tractors.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width:'20%'}} className="active">Field {item.name}</td>
          <td style={{width:'20%'}} className="active">Field {item.power}</td>
          <td style={{width:'20%'}} className="active">Field {item.rotate}</td>
          <td style={{width:'20%'}} className="active">Field {item.pov}</td>
          <td style={{width:'20%'}} className="active">Field {item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">TRACTORS TABLE</h3>
        <table className="table">
          <thead>
          <tr className="success">
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
            <td><input ref="name" placeholder="name"/></td>
            <td><input ref="power" placeholder="power"/></td>
            <td><input ref="rotate" placeholder="volume"/></td>
            <td><input ref="pov" placeholder="hight"/></td>
            <td><input ref="price" placeholder="price"/></td>
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