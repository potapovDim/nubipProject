import {
  ADD_STERN_STORE,
  REMOVE_STERN_STORE,
  RESET_STORE_STATE
} from './action_types'

const initialState = {
  sternStocks: [],
  sternStore: [],
  quantityStores: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_STERN_STORE: {
      let addTabl = {[action.key]: update(state[action.key], {$push: [action.data]})}
      return {...state, ...addTabl}
    }
    case REMOVE_STERN_STORE: {
      let remTable = {[action.key]: state[action.key].slice(0, state[action.key].length - 1)}
      return {...state, ...remTable}
    }
    case RESET_STORE_STATE: {
      return {...initialState}
    }
    default :
      return state
  }
}