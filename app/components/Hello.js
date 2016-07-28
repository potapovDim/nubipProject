import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Hello extends React.Component {
  state = {
    userName: ''
  }

  addUser(e) {
    this.setState({
      userName: e.target.value
    })
  }

  go() {
    console.log(this.refs.userName.value)
    this.props.dispatch({type: "SET_USER_NAME", userName: this.refs.userName.value})
  }

  render() {
    return (
      <div>
        <div>Hello its HELLO ELEMENT</div>
        <input type="tex" ref="userName"/>
        <Link to="app">
          <button onClick={this.go.bind(this)}>Enter</button>
        </Link>
      </div>
    )
  }
}

export default connect(state=>state)(Hello)

