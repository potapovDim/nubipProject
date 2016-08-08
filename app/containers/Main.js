import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, MenuItem, NavDropdown, Nav, NavItem, Button, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router'

import {MainTutorial, TablesTutorial} from '../components/tutorials'

class Main extends Component {
  state = {
    show: false,
  }


  hide = ()=> {
    this.setState({show: false})
  }


  render() {
    console.log('context', this.props)
    return (
      <div>
        <div style={{height:'850px'}}>
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                {this.props.name == '' ? <Link to="/">Main</Link> : <Link to="/">User name : {this.props.name}</Link>}
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={2}
                         onClick={() => this.setState({ show: true})}
                        >Tutorial</NavItem>
                {this.props.location.pathname == '/' ? <MainTutorial show={this.state.show} hide={this.hide}/> :
                  <TablesTutorial show={this.state.show} hide={this.hide}/>}
                {this.props.location.pathname == '/' ? <NavItem eventKey={2} href="#">Link</NavItem> : null}
                <NavItem >DDL future</NavItem>
                <NavDropdown eventKey={3} title=' ' id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} >Link Right</NavItem>
                <NavItem eventKey={2} >Link Right</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {this.props.children}
        </div>
        <footer className="text-center">This is footer</footer>
      </div>
    )
  }
}
export default connect(state => {
  return {...state.login}
})(Main)