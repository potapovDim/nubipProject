import {ADD_COWS, RESET} from './action_types'

const initiaState = {
  cowsQuantity: 0,

}


export default(state = initiaState, action)=> {
  switch (action.type) {
    case ADD_COWS:
      return {
        ...state,
        cowsQuantity: action.quantity,
      }
    case RESET:
      return {...state, cowsQuantity: 0}
    default:
      return state
  }
}