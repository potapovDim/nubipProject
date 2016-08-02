import {
  ADD_TO_TABLE, REMOVE_FROM_TABLE
} from './action_types';


export const addToPumpTable = (data,key)=> {
  return {
    type: ADD_TO_TABLE,
    data,
    key
  }
}

export const removeFromPumpTable=(key)=>{
  return{
    type:REMOVE_FROM_TABLE,
    key
  }
}