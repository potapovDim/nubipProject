import React from 'react'
import Infinity from 'react-infinite'

class SternTable extends React.Component {
  handleCollectData = ()=> {
    let view_feed = this.refs.view_feed.value
    let get_milk_year2000 = this.refs.get_milk_year2000.value
    let get_milk_year3000 = this.refs.get_milk_year3000.value
    let get_milk_year4000 = this.refs.get_milk_year4000.value
    let price = this.refs.price.value
    if (view_feed != '' && get_milk_year2000 != '' && get_milk_year3000 != ''&& get_milk_year4000!=''&&price!='') {
      let sternNew = {
        view_feed: view_feed,
        get_milk_year2000: get_milk_year2000,
        get_milk_year3000: get_milk_year3000,
        get_milk_year4000:get_milk_year4000,
        price:price
      }
      this.props.addToTable(sternNew, 'stern_norms')
    }
  }
  handleRemoveData = ()=> {
    this.props.removeFromTable('stern_norms')
  }

  render() {
    let {stern_norms}=this.props.tables;
    let table = stern_norms.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{width:'20%'}} className="active">{item.view_feed}</td>
          <td style={{width:'20%'}} className="active">{item.get_milk_year2000}</td>
          <td style={{width:'20%'}} className="active">{item.get_milk_year3000}</td>
          <td style={{width:'20%'}} className="active">{item.get_milk_year4000}</td>
          <td style={{width:'20%'}} className="active">{item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <h3 className="text-center">Орієнтований раціон годівлі корів на добу (жива маса 400-500 кг)</h3>
        <table style={{width:'100%'}}className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width:'20%',height:'40px'}} >Вид корму</td>
            <td style={{width:'20%'}} >Середньорічний надій 2000 ,кг</td>
            <td style={{width:'20%'}} >Середньорічний надій 3000 ,кг</td>
            <td style={{width:'20%'}} >Середньорічний надій 4000 ,кг</td>
            <td style={{width:'20%'}} >Ціна</td>
          </tr>
          </thead>
        </table>
        <Infinity containerHeight={300} elementHeight={20}>
          <table className="table text-center">
            <tbody>
            {table}
            </tbody>
          </table>
        </Infinity>
        <table className="table text-center">
          <tbody>
          <tr>
            <td><input ref="view_feed" placeholder="вид корму" /></td>
            <td><input ref="get_milk_year2000" placeholder="надій 2000 кг"/></td>
            <td><input ref="get_milk_year3000" placeholder="надій 3000 кг"/></td>
            <td><input ref="get_milk_year4000" placeholder="надій 4000 кг"/></td>
            <td><input ref="price" placeholder="ціна " /></td>
          </tr>
          </tbody>
        </table >
        <button onClick={this.handleCollectData}>ADD</button>
        <button onClick={this.handleRemoveData}>REMOVE</button>
        <button >FORM STERN REPOSITORIES</button>
      </div>
    )
  }
}

export default SternTable