import {ADD_TO_ENTRIES,RESET} from './action_types'

export const addEntry=(quantity)=>{
  console.log(quantity)
  return{
    type:ADD_TO_ENTRIES,
    quantity
  }
}

export const resetAll=()=>{
  return{
    type:RESET
  }
}