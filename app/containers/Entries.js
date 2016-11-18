import React, {Component} from 'react'
import {connect} from 'react-redux'
import Entries from '../components/enterdata/entries'

class EntryData extends Component {
  render() {
    return (
      <div>
        <Entries {...this.props}/>
      </div>
    )
  }
}

export default connect(state=> {
  return {
    ...state.entries, ...state.tables.buildings_for_farm,
    buildings_for_shit: state.tables.buildings_for_shit,
    shit_norms: state.tables.shit_norms
  }
})(EntryData)