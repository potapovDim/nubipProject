import {ADD_BOW, WATE_EQUIP, WATER_CHAIN, WATER_NORM_PER_DAY, TUBES} from './action_types'


const initialState = {
  waterBuilds: {},
  waterNorm: {},
  waterEquip:{},
  drinkinBow:{}
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case WATER_NORM_PER_DAY:
      return {waterNorm: action.waterNorm, waterBuilds: action.waterBuilds}
    case WATE_EQUIP:{
      const equip = {...state.waterEquip}
      equip[action.equipType] = action.equip
      return {...state, waterEquip : equip}
    }
    case ADD_BOW:{
      const drinkinEquip = {...state.drinkinBow}
      drinkinEquip[action.type] = {quantity, bow}
      return {...state, drinkinBow: drinkinEquip} 
    }
    default :
      return state
  }
}
