import React from 'react'
import Infinity from 'react-infinite'
import {sternStore, quantityStores} from '../../../calculations/planFarm'

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
    const {building_for_stern, allStern}=this.props;
    const stern = {}
    stern['Силос'] = allStern['Силос'] + allStern['Сінаж']
    stern['Сіно та солома'] = allStern['Сіно'] + allStern['Солома']
    stern['Коренеплоди'] = allStern['Коренеплоди']
    stern["Об'ем силосу"] = sternStore(stern['Силос'], 1100)
    stern["Об'ем солома"] = sternStore(stern['Сіно та солома'], 40)
    stern["Об'ем Коренеплоди"] = sternStore(stern['Коренеплоди'], 650)


    const table = building_for_stern.map(function (item, index) {
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
        <div className="entries-data">
          <div className="stern-first-table">
            <h3 className="text-center">Будівлі для зберігання кормів та їх характеристики</h3>
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
          <div className="stern-separator"></div>
          <div className="stern-second-table">
            <h3 className="text-center">Об'єм корму </h3>
            <table style={{width: '100%',height :'250px'}} className="table-bordered text-center">
              <thead>
              <tr className="success">
                <td style={{width: '50%', height: '40px'}}>Вид корму</td>
                <td style={{width: '50%'}}>Об'єм</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="active">Cилос</td>
                <td className="active">{stern["Об'ем силосу"].toFixed(2)} метрів кубічних</td>
              </tr>
              <tr>
                <td className="active">Солома</td>
                <td className="active">{stern["Об'ем солома"].toFixed(2)} метрів кубічних</td>
              </tr>
              <tr>
                <td className="active">Коренеплоди</td>
                <td className="active">{stern["Об'ем Коренеплоди"].toFixed(2)} метрів кубічних</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}