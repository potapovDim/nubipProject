import {WATER_CHAIN, WATER_NORM_PER_DAY, TUBES} from './action_types'


const initialState = {
  tubes: [],
  waterNorm: {}
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case WATER_NORM_PER_DAY:
      return {...state, waterNorm: action.waterNorm}
    case TUBES:
      return {...state, tubes: action.tubes}
    default :
      return state
  }
}