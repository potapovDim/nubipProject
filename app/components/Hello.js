import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Hello extends React.Component {


  go() {
    console.log(this.refs.userName.value)
    this.props.dispatch({type: "SET_USER_NAME", userName: this.refs.userName.value})
  }

  render() {
    return (
      <form >
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Enter your name</label>
        <input className="form-control" id="exampleInputEmail1"type="tex" ref="userName"/>
        <Link to="app">
          <button className="btn btn-default" onClick={this.go.bind(this)}>Enter</button>
        </Link>
          </div>
      </form>
    )
  }
}

export default connect(state=>state)(Hello)

