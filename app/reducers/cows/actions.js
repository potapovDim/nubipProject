import {ADD_COWS,RESET} from './action_types'

export const addCows=(quantity)=>{
  return{
    type:ADD_COWS,
    quantity
  }
}

export const resetAll=()=>{
  return{
    type:RESET
  }
}