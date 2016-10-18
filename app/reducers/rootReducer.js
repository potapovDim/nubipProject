import {combineReducers} from 'redux';
import tables from './tables'
import login from './login'
import entries from './entries'
import sternStore from './calculation/stern/'

export default combineReducers({
  tables,
  login,
  entries,
  sternStocks
})