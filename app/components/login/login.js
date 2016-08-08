import React, {Component} from 'react'
import {Link} from 'react-router'
import {Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap'
import ReactDOM from 'react-dom'

class Login extends Component {
  
  handleLogin = ()=> {
    let name = ReactDOM.findDOMNode(this.refs.formcontrol).value
    if (name != '') {
      this.props.login(name)
    }
  }
  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={5}>
              <FormControl ref="formcontrol" type="name" placeholder="Name"/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={8}>
              <Link to="/tables">
                <Button onClick={this.handleLogin} type="submit">
                  Login
                </Button>
              </Link>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Login