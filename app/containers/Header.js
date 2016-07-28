import React from 'react'
import {connect} from 'react-redux'

const Header = (props) => <header>This is page :{props.pageName} User name : {props.userName}</header>

export default connect(state => state )(Header)