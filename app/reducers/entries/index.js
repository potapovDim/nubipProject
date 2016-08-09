import {ADD_TO_ENTRIES, RESET} from './action_types'

const initialState = {
  cows: 0,
  fuelPrice:0,
  energyPrice:0,
  paymentPrice:0
}

export default(state = initialState, action)=> {
  console.log('action',action)
  switch (action.type) {
    case ADD_TO_ENTRIES:
      let _state=action.quantity
      return {
        ...state,..._state
      }
    case RESET:
      return {...state, initialState}
    default:
      return state
  }
}
