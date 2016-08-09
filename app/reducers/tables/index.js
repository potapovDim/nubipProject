import {
  ADD_TO_TABLE, REMOVE_FROM_TABLE,SHOW_ALL_TABLES
} from './action_types';

import update from 'react-addons-update'

const initialState = {
  pumps: [
    {brand: '123', innings: '12.4', full_pressure: '5.2', speed_rotate: '12', power: '523',KKD:'44',allowable_height:"as",price:"12"},
    {brand: '321', innings: '13.5', full_pressure: '4.2', speed_rotate: '22', power: '123',KKD:'44',allowable_height:"dsa",price:"12"},
    {brand: '321', innings: '16.5', full_pressure: '2.2', speed_rotate: '4', power: '323',KKD:'44',allowable_height:"dsa",price:"12"},
    {brand: '312', innings: '24.5', full_pressure: '3.2', speed_rotate: '21', power: '223',KKD:'44',allowable_height:"dsa",price:"12"},
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
  stern_norms:[
    {view_feed :'Cіно', get_milk_year2000:'34',get_milk_year3000:'1200',get_milk_year4000:"43",price:'1'},
    {view_feed :'Солома', get_milk_year2000:'34',get_milk_year3000:'1200',get_milk_year4000:"43",price:'1'},
    {view_feed :'Силос', get_milk_year2000:'34',get_milk_year3000:'1200',get_milk_year4000:"43",price:'1'},
    {view_feed :'Коренеплоди', get_milk_year2000:'34',get_milk_year3000:'1200',get_milk_year4000:"43",price:'1'},
    {view_feed :'Концентровані корми', get_milk_year2000:'34',get_milk_year3000:'1200',get_milk_year4000:"43",price:'1'},
    {view_feed :'Карбамід ,г', get_milk_year2000:'34',get_milk_year3000:'1200',get_milk_year4000:"43",price:'1'},
    {view_feed :'Сіль кухонна ,г', get_milk_year2000:'34',get_milk_year3000:'1200',get_milk_year4000:"43",price:'1'},
    {view_feed :'Мінеральні корми', get_milk_year2000:'34',get_milk_year3000:'1200',get_milk_year4000:"43",price:'1'},
  ],
  drinking_bowl:[
    {brand :"АП-1А", water_volume:'1.8',seats:"1",heads:'2',weight:'0.75',price:"10"},
    {brand :"АП-1А", water_volume:'1.8',seats:"1",heads:'2',weight:'0.75',price:"10"},
    {brand :"АП-1А", water_volume:'1.8',seats:"1",heads:'2',weight:'0.75',price:"10"},
    {brand :"АП-1А", water_volume:'1.8',seats:"1",heads:'2',weight:'0.75',price:"10"},
    {brand :"АП-1А", water_volume:'1.8',seats:"1",heads:'2',weight:'0.75',price:"10"},
    {brand :"АП-1А", water_volume:'1.8',seats:"1",heads:'2',weight:'0.75',price:"10"},
    {brand :"АП-1А", water_volume:'1.8',seats:"1",heads:'2',weight:'0.75',price:"10"},
  ],
  milking_machines:[
    {brand:"",quantity_cows:'',quantity_machines:'',type_brand_apparatus:'',quantity_personal:'',productivity:'',man_productivity_with2:'',man_productivity_with3:'',brand_vacuum_pump:'',vacuum_pump_quantity:"",power:'',weight:"",price:''},
    {brand:"",quantity_cows:'',quantity_machines:'',type_brand_apparatus:'',quantity_personal:'',productivity:'',man_productivity_with2:'',man_productivity_with3:'',brand_vacuum_pump:'',vacuum_pump_quantity:"",power:'',weight:"",price:''},
    {brand:"",quantity_cows:'',quantity_machines:'',type_brand_apparatus:'',quantity_personal:'',productivity:'',man_productivity_with2:'',man_productivity_with3:'',brand_vacuum_pump:'',vacuum_pump_quantity:"",power:'',weight:"",price:''},
    {brand:"",quantity_cows:'',quantity_machines:'',type_brand_apparatus:'',quantity_personal:'',productivity:'',man_productivity_with2:'',man_productivity_with3:'',brand_vacuum_pump:'',vacuum_pump_quantity:"",power:'',weight:"",price:''},
    {brand:"",quantity_cows:'',quantity_machines:'',type_brand_apparatus:'',quantity_personal:'',productivity:'',man_productivity_with2:'',man_productivity_with3:'',brand_vacuum_pump:'',vacuum_pump_quantity:"",power:'',weight:"",price:''},
    {brand:"",quantity_cows:'',quantity_machines:'',type_brand_apparatus:'',quantity_personal:'',productivity:'',man_productivity_with2:'',man_productivity_with3:'',brand_vacuum_pump:'',vacuum_pump_quantity:"",power:'',weight:"",price:''},
    {brand:"",quantity_cows:'',quantity_machines:'',type_brand_apparatus:'',quantity_personal:'',productivity:'',man_productivity_with2:'',man_productivity_with3:'',brand_vacuum_pump:'',vacuum_pump_quantity:"",power:'',weight:"",price:''},
    {brand:"",quantity_cows:'',quantity_machines:'',type_brand_apparatus:'',quantity_personal:'',productivity:'',man_productivity_with2:'',man_productivity_with3:'',brand_vacuum_pump:'',vacuum_pump_quantity:"",power:'',weight:"",price:''}
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




