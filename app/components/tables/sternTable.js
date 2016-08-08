import React from 'react'
import Infinity from 'react-infinite'

class SternTable extends React.Component {
  handleCollectData = ()=> {
    let name = this.refs.name.value
    let old = this.refs.old.value
    let young = this.refs.young.value
    if (name != '' && young != '' && old != '') {
      let sternNew = {
        name: name,
        old: old,
        young: young,
      }
      this.props.addToTable(sternNew, 'sternnorms')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromTable('sternnorms')
  }

  render() {
    let {sternnorms}=this.props.tables;
    let table = sternnorms.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width:'33%'}} className="active">Field {item.name}</td>
          <td style={{width:'33%'}} className="active">Field {item.old}</td>
          <td style={{width:'33%'}} className="active">Field {item.young}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">STERN TABLE</h3>
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
            <td><input ref="old" placeholder="power"></input></td>
            <td><input ref="young" placeholder="volume"></input></td>
          </tr>
          </tbody>
        </table >
        <button onClick={this.handleCollectData}>ADD</button>
        <button onClick={this.handleRemoveData}>REMOVE</button>
      </div>
    )
  }
}

export default SternTable