import {WATER_CHAIN, WATER_NORM_PER_DAY, TUBES} from './action_types'

export const addTubes = tubes =>({type: TUBES, tubes})
export const addWaterNorm = waterNorm =>({type: WATER_NORM_PER_DAY, waterNorm})