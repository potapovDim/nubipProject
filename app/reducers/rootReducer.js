import {combineReducers} from 'redux';
import tables from './tables'
import login from './login'
import cows from './cows'

export default combineReducers({
  tables,
  login,
  cows
})