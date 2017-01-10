import React, {Component} from 'react'
import {Link} from 'react-router'
import {Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import {login} from '../../reducers/login/actions'

class Login extends Component {
  
  handleLogin = ()=> {
    let name = ReactDOM.findDOMNode(this.refs.formcontrol).value
    if (name !== '') {
      this.props.dispatch(login(name))
    }
  }
  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Ім'я
            </Col>
            <Col sm={5}>
              <FormControl ref="formcontrol" type="name" placeholder="Name"/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={8}>
              <Link to="/entries">
                <Button onClick={this.handleLogin} type="submit">
                  Ввійти
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