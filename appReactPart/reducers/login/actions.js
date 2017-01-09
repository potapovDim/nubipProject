import {LOGIN} from './action_types'

export const login=(name)=>{
  return{
    type:LOGIN,
    name
  }
}