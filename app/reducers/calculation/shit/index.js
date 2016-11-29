import {ADD_SHIT} from './action_types'

const initialState = {
  shitInKg:null, shitVolume:null, yearLitter:null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SHIT': {
      const {shitInKg, shitVolume, yearLitter} = action  
      return {shitInKg, shitVolume, yearLitter}
    }
    default :
      return state
  }
}