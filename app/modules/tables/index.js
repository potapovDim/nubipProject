import {
  ADD_TO_TABLE, REMOVE_FROM_TABLE
} from './action_types';

import update from 'react-addons-update'

const initialState = {
  pumptable: [
    {name: 'pump_first1_Name', power: '12.4', volume: '5.2', hight: '12', dop: '523'},
    {name: 'pump_first2_Name', power: '13.5', volume: '4.2', hight: '22', dop: '123'},
    {name: 'pump_first3_Name', power: '16.5', volume: '2.2', hight: '4', dop: '323'},
    {name: 'pump_first4_Name', power: '24.5', volume: '3.2', hight: '21', dop: '223'},
  ],
  machinetable:[
    {name :'tractor_first_Name', power:'32',rotate:'1800',pov:"32"},
    {name :'tractor_second_Name', power:'34',rotate:'1200',pov:"32"},
    {name :'tractor_third_Name', power:'35',rotate:'1400',pov:"32"},
    {name :'tractor_fourth_Name', power:'36',rotate:'800',pov:"32"},
    {name :'tractor_fifth_Name', power:'37',rotate:'2800',pov:"32"},
    {name :'tractor_sixth_Name', power:'31',rotate:'1800',pov:"32"},
  ],
  sternnorms:[
    {name :'tractor_first_Name', old:'32',young:'1800'},
    {name :'tractor_second_Name', old:'34',young:'1200'},
    {name :'tractor_third_Name', old:'35',young:'1400'},
    {name :'tractor_fourth_Name', old:'36',young:'800'},
    {name :'tractor_fifth_Name', old:'37',young:'2800'},
    {name :'tractor_sixth_Name', old:'31',young:'1800'}
  ],
  
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case ADD_TO_TABLE:
      let addTabl = {[action.key]: update(state[action.key], {$push: [action.data]})}
      return {...state, ...addTabl}
    case REMOVE_FROM_TABLE:
      let _state={...state}
      let remTable = {[action.key]:_state[action.key].slice(0,_state[action.key].length-1)}
      return {...state,...remTable}
    default :
      return state
  }
}




