import React from 'react';
import {Provider} from 'react-redux'
import store from '../store/'

import Header from './Header'


const Root = (props) =>(
  <Provider store={store}>
    <div>
      <Header {...props}/>
      <div>{props.children}</div>
      <footer>FOOTER</footer>
    </div>
  </Provider>)

export default Root