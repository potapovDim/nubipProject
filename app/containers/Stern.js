import React, {Component} from 'react'
import {addSternStore, removeSternStore, resetStoreState} from '../reducers/calculation/stern/actions'
import {addToTable, removeFromTable} from '../reducers/tables/actions'
import {SternRepo}from '../components/stern/sternRepo'
import {connect} from 'react-redux'
class Stern extends Component {
  render() {
    return <SternRepo {...this.props}/>
  }
}


export default connect(state => {
  return {...state.tables, ...state.entries}
}, {addSternStore, removeSternStore, resetStoreState, addToTable, removeFromTable})(Stern)