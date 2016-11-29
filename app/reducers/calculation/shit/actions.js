import {ADD_SHIT} from './action_types'
export const addShit = (shitInKg, shitVolume, yearLitter) => ({
    type: 'ADD_SHIT', shitInKg, shitVolume, yearLitter,
})