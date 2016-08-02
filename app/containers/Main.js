import React, {Component} from 'react'
import {connect} from 'react-redux'

const Main = (props)=> {
  console.log('props',props)
  return (
    <div>
      <div>{props.name}</div>
      {props.children}
    </div>
  )
}

export default connect(state =>{
  return {...state.login, ...state.table}
})(Main)