import React from 'react'
import Infinity from 'react-infinite'


class MachineTable extends React.Component {
  handleCollectData = ()=> {
    let name = this.refs.name.value
    let power = this.refs.power.value
    let rotate = this.refs.rotate.value
    let pov = this.refs.pov.value
    let price = this.refs.price.value
    if (name != '' && power != '' && rotate != '' && pov != '' && price != '') {
      let newPump = {
        name: name,
        power: power,
        rotate: rotate,
        pov: pov,
        price: price
      }
      this.props.addToTable(newPump, 'machines')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromTable('machines')
  }

  render() {
    let {machines}=this.props.tables;
    let table = machines.map(function (item, index) {
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
        <h3 className="text-center">MACHINE TABLE</h3>
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
            <td><input ref="name" placeholder="name"></input></td>
            <td><input ref="power" placeholder="power"></input></td>
            <td><input ref="rotate" placeholder="rotate"></input></td>
            <td><input ref="pov" placeholder="pov"></input></td>
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

export default MachineTable