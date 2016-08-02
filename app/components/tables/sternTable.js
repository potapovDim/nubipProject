import React from 'react'
import connect from 'redux'


class SternTable extends React.Component {
  handleCollectData = ()=> {
    let name = this.refs.name.value
    let old = this.refs.old.value
    let young = this.refs.young.value
    if (name != '' && young != '' && old != '' ) {
      let sternNew = {
        name: name,
        old: old,
        young: young,
      }
      this.props.addToPumpTable(sternNew,'sternnorms')
    }
  }
  handleRemoveData=()=>{
    this.props.removeFromPumpTable('sternnorms')
  }
  render() {
    let {sternnorms}=this.props.tables;
    let table = sternnorms.map(function (item, index) {
      return (
        <tr key={index}>
          <td className="active">Field {item.name}</td>
          <td className="active">Field {item.old}</td>
          <td className="active">Field {item.young}</td>
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
          </tr>
          </thead>
          <tbody>
          {table}
          <tr>
            <td><input ref="name" placeholder="name"></input></td>
            <td><input ref="old" placeholder="power"></input></td>
            <td><input ref="young" placeholder="volume"></input></td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.handleCollectData}>ADD</button>
        <button onClick={this.handleRemoveData}>REMOVE</button>
      </div>
    )
  }
}

export default SternTable