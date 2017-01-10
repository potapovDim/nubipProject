import {LOGIN} from './action_types'


const initialState = {
  name: ''
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case LOGIN:
      return {...state, name: action.name}
    default :
      return state
  }
}