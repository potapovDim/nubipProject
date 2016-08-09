import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, MenuItem, NavDropdown, Nav, NavItem, Tabs, Tab} from 'react-bootstrap'
import {Link} from 'react-router'

import {MainTutorial, TablesTutorial, EntriesTutorial} from '../components/tutorials'

class Main extends Component {
  state = {
    show: false,
  }


  hide = ()=> {
    this.setState({show: false})
  }

  render() {
    let tutorial
    if (this.props.location.pathname == '/')
      tutorial= (<MainTutorial show={this.state.show} hide={this.hide}/>)
    else if (this.props.location.pathname == '/tables')
      tutorial=  (<TablesTutorial show={this.state.show} hide={this.hide}/>)
    else if (this.props.location.pathname == '/entries')
      tutorial=   (<EntriesTutorial show={this.state.show} hide={this.hide}/>)
    console.log(tutorial)
    return (
      <div>
        <div style={{height:'100%'}}>
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
                {tutorial}
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
                <NavItem eventKey={1}>Link Right</NavItem>
                <NavItem eventKey={2}>Link Right</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {this.props.children}
        </div>

        <footer style={{clear:'both'}} className="text-center">This is footer</footer>
      </div>
    )
  }
}
export default connect(state => {
  return {...state.login}
})(Main)

//<TablesTutorial show={this.state.show} hide={this.hide}/>