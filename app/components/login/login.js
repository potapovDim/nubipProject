import React, {Component} from 'react'
import {Link} from 'react-router'

class Login extends Component {


  handleLogin = ()=> {
    let name = this.refs.name.value
    if (name != '') {
      this.props.login(name)
    }
  }

  render() {
    return (
      <div>
        <header>LOGIN</header>
        <input ref='name' placeholder="enter name"/>
        <Link to="/tables">
          <button onClick={this.handleLogin}>LOGIN</button>
        </Link>
      </div>
    )
  }
}
export default Login