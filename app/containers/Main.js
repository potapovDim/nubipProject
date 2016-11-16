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
      tutorial = (<MainTutorial show={this.state.show} hide={this.hide}/>)
    else if (this.props.location.pathname == '/tables')
      tutorial = (<TablesTutorial show={this.state.show} hide={this.hide}/>)
    else if (this.props.location.pathname == '/entries')
      tutorial = (<EntriesTutorial show={this.state.show} hide={this.hide}/>)
    return (
      <div>
        <div style={{height:'100%'}}>
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                {this.props.name === '' ? <Link to="/">Головна сторінка</Link> :
                  <Link to="/">Ім'я користувача : {this.props.name}</Link>}
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={2}
                         onClick={() => this.setState({ show: true})}
                >Підказка по користуванню</NavItem>
                {tutorial}
                <NavDropdown eventKey={3} title='НАВІГАЦІЯ ПО ПРОЕКТУ' id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}><Link to="/waterbuilds">ВОДОПОСТАЧАННЯ</Link></MenuItem>
                  <MenuItem eventKey={3.2}>Дія 2</MenuItem>
                  <MenuItem eventKey={3.3}>Дія 3</MenuItem>
                  <MenuItem divider/>
                  <MenuItem eventKey={3.3}>Головна</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1}>На данний момент нічого</NavItem>
                <NavItem eventKey={2}>На данний момент нічого</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div style={{weight:"80%"}}>
            {this.props.children}
          </div>
        </div>

        <footer style={{clear:'both'}} className="text-center">
          <h1>Потапов Дмитро</h1>
          <h2>Моделювання технологічних процесів для МТФ з долслідженням операції приготування кормів</h2>
        </footer>
      </div>
    )
  }
}
export default connect(state => {
  return {...state.login}
})(Main)
