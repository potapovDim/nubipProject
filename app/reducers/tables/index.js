import {
  ADD_TO_TABLE, REMOVE_FROM_TABLE,SHOW_ALL_TABLES
} from './action_types';

import update from 'react-addons-update'

const initialState = {
  tablesShow:{
    SHOW_ALL: false,
    pump: false,
    tractor: false,
    stern: false,
    machine: false,
    drinking_bowl: false
  },
  pumptable: [
    {name: 'pump_first1_Name', power: '12.4', volume: '5.2', hight: '12', dop: '523',price:"43"},
    {name: 'pump_first2_Name', power: '13.5', volume: '4.2', hight: '22', dop: '123',price:"43"},
    {name: 'pump_first3_Name', power: '16.5', volume: '2.2', hight: '4', dop: '323',price:"43"},
    {name: 'pump_first4_Name', power: '24.5', volume: '3.2', hight: '21', dop: '223',price:"43"},
  ],
  machines:[
    {name :'tractor_first_Name', power:'32',rotate:'1800',pov:"32",price:"43"},
    {name :'tractor_second_Name', power:'34',rotate:'1200',pov:"32",price:"43"},
    {name :'tractor_third_Name', power:'35',rotate:'1400',pov:"32",price:"43"},
    {name :'tractor_fourth_Name', power:'36',rotate:'800',pov:"32",price:"43"},
  ],
  tractors:[
    {name :'tractor_first_Name', power:'32',rotate:'1800',pov:"32",price:"43"},
    {name :'tractor_second_Name', power:'34',rotate:'1200',pov:"32",price:"43"},
    {name :'tractor_third_Name', power:'35',rotate:'1400',pov:"32",price:"43"},
    {name :'tractor_fourth_Name', power:'36',rotate:'800',pov:"32",price:"43"},
  ],
  sternnorms:[
    {name :'tractor_second_Name', old:'34',young:'1200',price:"43"},
    {name :'tractor_third_Name', old:'35',young:'1400',price:"43"},
    {name :'tractor_fourth_Name', old:'36',young:'800',price:"43"},
    {name :'tractor_fifth_Name', old:'37',young:'2800',price:"43"},
  ],
  drinking_bowl:[
    {name :'drinking_bowl_Name', water:'34',price:"43"},
    {name :'drinking_bowl_Name', water:'35',price:"43"},
    {name :'drinking_bowl_Name', water:'36',price:"43"},
    {name :'drinking_bowl_Name', water:'37',price:"43"},
  ]
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case ADD_TO_TABLE:
      let addTabl = {[action.key]: update(state[action.key], {$push: [action.data]})}
      return {...state, ...addTabl}
    case REMOVE_FROM_TABLE:
      let remTable = {[action.key]:state[action.key].slice(0,state[action.key].length-1)}
      return {...state,...remTable}
    case SHOW_ALL_TABLES:
      return {...state,tablesShow:{...state.tablesShow,SHOW_ALL:!state.tablesShow.SHOW_ALL}}
    default :
      return state
  }
}




