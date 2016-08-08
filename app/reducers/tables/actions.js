import {
  ADD_TO_TABLE, REMOVE_FROM_TABLE
} from './action_types';


export const addToTable = (data,key)=> {
  return {
    type: ADD_TO_TABLE,
    data,
    key
  }
}

export const removeFromTable=(key)=>{
  return{
    type:REMOVE_FROM_TABLE,
    key
  }
}