import {WATER_CHAIN, WATER_NORM_PER_DAY, TUBES , WATE_EQUIP, ADD_BOW} from './action_types'

export const addWaterNorm = (waterNorm, waterBuilds) =>({type: WATER_NORM_PER_DAY, waterNorm, waterBuilds})
export const addWaterEquip = (equipType, equip) => ({type: WATE_EQUIP, equipType, equip})
export const addDrinkingBow = (typeBow, quantity, bow) => ({type: ADD_BOW, typeBow, quantity ,bow})