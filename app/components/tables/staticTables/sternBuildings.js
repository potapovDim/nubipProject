import React from 'react'
import Infinity from 'react-infinite'


export default class extends React.Component {
  handleCollectData = ()=> {
    let kind_of_building = this.refs.kind_of_building.value
    let volume = this.refs.volume.value
    let B = this.refs.B.value
    let L = this.refs.L.value
    let H = this.refs.H.value
    let lost_stern = this.refs.lost_stern.value
    let KKD = this.refs.KKD.value
    if (kind_of_building != '' && volume != '' && B != '' && L != '' && H != '' && lost_stern != '' && KKD != '') {
      let sternNew = {
        kind_of_building: kind_of_building,
        volume: volume,
        B: B,
        L: L,
        H: H,
        lost_stern: lost_stern,
        KKD: KKD
      }
      this.props.addToTable(sternNew, 'building_for_stern')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromTable('building_for_stern')
  }

  render() {
    let {building_for_stern}=this.props;
    let table = building_for_stern.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width: '14%'}} className="active">{item.kind_of_building}</td>
          <td style={{width: '14%'}} className="active">{item.volume}</td>
          <td style={{width: '14%'}} className="active">{item.B}</td>
          <td style={{width: '14%'}} className="active">{item.L}</td>
          <td style={{width: '14%'}} className="active">{item.H}</td>
          <td style={{width: '14%'}} className="active">{item.lost_stern}</td>
          <td style={{width: '14%'}} className="active">{item.KKD}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Орієнтований раціон годівлі корів на добу (жива маса 400-500 кг)</h3>
        <table style={{width: '100%'}} className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width: '14%', height: '40px'}}>Споруда</td>
            <td style={{width: '14%'}}>Місткість, метрів кубічних</td>
            <td style={{width: '14%'}}>Ширина</td>
            <td style={{width: '14%'}}>Довжина</td>
            <td style={{width: '14%'}}>Висота</td>
            <td style={{width: '14%'}}>Втрата при зберіганні, %</td>
            <td style={{width: '14%'}}>Коефіцієнт використання об'єму</td>
          </tr>
          </thead>
        </table>
        <Infinity containerHeight={250} elementHeight={20}>
          <table className="table text-center">
            <tbody>
            {table}
            </tbody>
          </table>
        </Infinity>
        <table className="table text-center">
          <tbody>
          <tr style={{width: '100%'}} className="inputs">
            <td><input ref="kind_of_building" placeholder="Споруда"/></td>
            <td><input ref="volume" placeholder="Місткість"/></td>
            <td><input ref="B" placeholder="Ширина"/></td>
            <td><input ref="L" placeholder="Довжина"/></td>
            <td><input ref="H" placeholder="Висота"/></td>
            <td><input ref="lost_stern" placeholder="Втрати"/></td>
            <td><input ref="KKD" placeholder="Коефіцієнт "/></td>
          </tr>
          </tbody>
        </table >
        <div className="btn-group">
          <button className="btn btn-success" onClick={this.handleCollectData}>Додати</button>
          <button className="btn btn-danger" onClick={this.handleRemoveData}>Видалити</button>
        </div>
      </div>
    )
  }
}