import {combineReducers} from 'redux';
import tables from './tables/'
import login from './login/'
import entries from './entries/'
import sternStocks from './calculation/stern/'
import water from './water/'
import milk from './milking'
import shit from './calculation/shit'
export default combineReducers({
  tables,
  login,
  entries,
  sternStocks,
  water,
  milk,
  shit
})