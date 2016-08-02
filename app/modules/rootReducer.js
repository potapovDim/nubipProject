import {combineReducers} from 'redux';
import tables from './tables'
import login from './login'


export default combineReducers({
  tables,
  login
})