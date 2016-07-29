import React from 'react'
import {connect} from 'react-redux'

class ResultTable extends React.Component{
  
  render(){
    console.log(this.props)
    return(
      <div></div>
    )
  }
  
}


export default connect(state=>state)(ResultTable)