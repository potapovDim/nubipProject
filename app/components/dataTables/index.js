import React from 'react'
import Pump from './Pump'
import SternNorm from './SternNorm'
import Tractors from './Tractors'
import {Link} from 'react-router'

class FullTable extends React.Component {
  state = {
    showFullTable: true,
    fullTable: {}
  }
  a;
  updateTableData = () => {
    this.props.dispatch({type: 'FORM_TABLE', data: this.state.fullTable})
  }

  setTableValue = (tableName, tableData) => {
    let _state = {...this.state}
    _state.fullTable[tableName] = tableData
    this.setState(_state)
  }
  showFullTable = ()=> {
    let _state={...this.state}
    _state.showFullTable=!this.state.showFullTable
    this.setState(
      _state
    )
  }

  componentWillMount() {
    this.a = 'hululu'
    console.log(this.a)
    console.log('test', this.props)
    this.updateTableData()
  }

  componentDidMount() {
    this.a = 'hululusasaasa'
    console.log(this.a)
    console.log('test', this.props)
  }
  render() {
    return (
      <div>
        {this.state.showFullTable ? <div><Pump {...this.props} setTableValue={this.setTableValue}/>
          <br></br>
          <SternNorm {...this.props} setTableValue={this.setTableValue}/>
          <br></br>
          <Tractors {...this.props} setTableValue={this.setTableValue}/>
          <br></br></div> : <div></div>}
        <button type="button" className="btn btn-primary" onClick={this.updateTableData}>Add all tables</button>
        <button type="button" className="btn btn-success" onClick={this.showFullTable}>Show full table</button>
        <Link to="/fulltable">
          <button>FSDZFKLASLKSFLKJLKSAjfka</button>
        </Link>

      </div>
    )
  }
}


export default FullTable

