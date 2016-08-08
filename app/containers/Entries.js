import React, { Component } from 'react'
import { connect } from 'react-redux'
import Enties from '../components/enterdata/entries'
import {addEntry,resetAll} from '../reducers/entries/actions'

class EntryData extends Component{
  render(){
    return(
      <div>
        <Enties {...this.props}/>
      </div>
    )
  }
}

export default connect(state=>{
  return{...state.entries}
},{addEntry,resetAll})(EntryData)