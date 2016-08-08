import {combineReducers} from 'redux';
import tables from './tables'
import login from './login'
import entries from './entries'

export default combineReducers({
  tables,
  login,
  entries
})