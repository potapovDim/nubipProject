import {ADD_TO_ENTRIES, RESET} from './action_types'

const initialState = {
  cows: 0,
  fuelPrice: 0,
  energyPrice: 0,
  paymentPrice: 0,
  season_stall: 0,
  pregrant_cows: 0,
  dry_cows: 0,
  ill_cows: 0,
  cow_before_20days: 0,
  type: 'without_attachable',
  buildingsForFarm: null
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case ADD_TO_ENTRIES:
      let _state = action.quantity
      return {
        ...state, ..._state
      }
    case RESET:
      return {...state, initialState}
    default:
      return state
  }
}
