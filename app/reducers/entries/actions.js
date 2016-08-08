import {ADD_TO_ENTRIES,RESET} from './action_types'

export const addEntry=(key,quantity)=>{
  return{
    type:ADD_TO_ENTRIES,
    key,
    quantity
  }
}

export const resetAll=()=>{
  return{
    type:RESET
  }
}