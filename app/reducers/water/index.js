import {WATER_CHAIN, WATER_NORM_PER_DAY, TUBES} from './action_types'


const initialState = {
  waterBuilds: {},
  waterNorm: {}
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case WATER_NORM_PER_DAY:
      return {waterNorm: action.waterNorm, waterBuilds: action.waterBuilds}
    default :
      return state
  }
}