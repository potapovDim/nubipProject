import React from 'react'


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
      this.props.addToPumpTable(newPump,'pumptable')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromPumpTable('pumptable')
  }

  render() {
    let {drinking_bowl}=this.props.tables;
    let table = drinking_bowl.map(function (item, index) {
      return (

        <tr key={index}>
          <td className="active">Field {item.name}</td>
          <td className="active">Field {item.water}</td>
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
          </tr>
          </thead>
          <tbody>
          {table}
          <tr>
            <td><input ref="name" placeholder="name"></input></td>
            <td><input ref="water" placeholder="water"></input></td>
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

export default DrinkingbowTable