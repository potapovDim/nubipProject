import {WATER_CHAIN, WATER_NORM_PER_DAY, TUBES} from './action_types'

export const addWaterNorm = (waterNorm, waterBuilds) =>({type: WATER_NORM_PER_DAY, waterNorm, waterBuilds})