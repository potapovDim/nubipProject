import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, MenuItem, NavDropdown, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router'

const Main = (props)=> {
  return (
    <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            {props.name==''?<Link to="/">Main</Link>:<Link to="/">User name : {props.name}</Link>}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </div>
  )
}

export default connect(state =>{
  return {...state.login, ...state.table}
})(Main)