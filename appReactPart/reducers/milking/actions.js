import { ADD_MILK_MACHINE } from './action_types'
export const addMilkMachine = (quantity, machine) => ({
    type: ADD_MILK_MACHINE, quantity, machine
})