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
  milking_machines_stall:[
    {brand:"АД-100А",quantity_cows:'100',quantity_machines:'10',type_brand_apparatus:'Тритактний "Волга" АДУ-1-04',quantity_personal:'4',productivity:'55',man_productivity_with2:'12',man_productivity_with3:'18',brand_vacuum_pump:'РВН-40/350',vacuum_pump_quantity:"1",power:'3',weight:"870",price:''},
    {brand:"ДАС-2Б",quantity_cows:'100',quantity_machines:'10',type_brand_apparatus:'Двотактний ДА-2,АДУ-1',quantity_personal:'4',productivity:'60',man_productivity_with2:'14',man_productivity_with3:'20',brand_vacuum_pump:'РВН-40/350',vacuum_pump_quantity:"1",power:'3',weight:"975",price:''},
    {brand:"УДМ-50",quantity_cows:'50',quantity_machines:'3',type_brand_apparatus:'Двотактний ДА-2,АДУ-1',quantity_personal:'1',productivity:'27',man_productivity_with2:'15',man_productivity_with3:'22',brand_vacuum_pump:'УВУ-60/45А',vacuum_pump_quantity:"1",power:'3.75',weight:"1140",price:''},
    {brand:"УДМ-100",quantity_cows:'100',quantity_machines:'6',type_brand_apparatus:'Двотактний ДА-2,АДУ-1',quantity_personal:'2',productivity:'50',man_productivity_with2:'15',man_productivity_with3:'22',brand_vacuum_pump:'УВУ-60/45А',vacuum_pump_quantity:"1",power:'4.75',weight:"1355",price:''},
    {brand:"УДМ-200",quantity_cows:'200',quantity_machines:'12',type_brand_apparatus:'Двотактний ДА-2,АДУ-1',quantity_personal:'4',productivity:'100',man_productivity_with2:'15',man_productivity_with3:'22',brand_vacuum_pump:'УВУ-60/45А',vacuum_pump_quantity:"2",power:'8.75',weight:"2182",price:''},
    {brand:"АДМ-8А",quantity_cows:'200',quantity_machines:'12',type_brand_apparatus:'Двотактний АДУ-1-09,АДУ-1-03',quantity_personal:'4',productivity:'95',man_productivity_with2:'17',man_productivity_with3:'22',brand_vacuum_pump:'УВУ-60/45',vacuum_pump_quantity:"2",power:'5.5',weight:"3400",price:''},
    {brand:"МВС-12",quantity_cows:'200',quantity_machines:'12',type_brand_apparatus:'Двотактний ДА-50',quantity_personal:'4',productivity:'95',man_productivity_with2:'16',man_productivity_with3:'22',brand_vacuum_pump:'УВУ-60/45',vacuum_pump_quantity:"2",power:'4',weight:"2800",price:''},
  ],
  milking_machines_parlor:[
    {brand:"УДТ-6",quantity_cows:'190',quantity_personal:'2',quantity_operator:'1',quantity_apparatus:'8',productivity_per_hour:'72',power_needed:'19.4',hopper_capacity:'0.53',length_conveyor:"30",power_drive:'1.1',vacuum_system_aggregate:'2',aggregate_power:'4',weight:"4000",price:''},
    {brand:"УДА-8А",quantity_cows:'170',quantity_personal:'1',quantity_operator:'1',quantity_apparatus:'8',productivity_per_hour:'62',power_needed:'22',hopper_capacity:'0.53',length_conveyor:"30",power_drive:'1.1',vacuum_system_aggregate:'2',aggregate_power:'4',weight:"4105",price:''},
    {brand:"УДЕ-8",quantity_cows:'210',quantity_personal:'2',quantity_operator:'1',quantity_apparatus:'16',productivity_per_hour:'80',power_needed:'22',hopper_capacity:'0.53',length_conveyor:"46",power_drive:'1.1',vacuum_system_aggregate:'2',aggregate_power:'4',weight:"4190",price:''},
    {brand:"УДА-16А",quantity_cows:'190',quantity_personal:'1',quantity_operator:'1',quantity_apparatus:'16',productivity_per_hour:'70',power_needed:'22',hopper_capacity:'0.53',length_conveyor:"46",power_drive:'1',vacuum_system_aggregate:'2',aggregate_power:'4',weight:"4300",price:''},
    {brand:"УДА-100",quantity_cows:'400',quantity_personal:'2',quantity_operator:'1',quantity_apparatus:'16',productivity_per_hour:'100',power_needed:'22',hopper_capacity:'2',length_conveyor:"-",power_drive:'0.8',vacuum_system_aggregate:'2',aggregate_power:'4',weight:"12800",price:''},
    {brand:"УДС-3(Б)",quantity_cows:'100',quantity_personal:'2',quantity_operator:'-',quantity_apparatus:'8',productivity_per_hour:'45',power_needed:'5.5',hopper_capacity:'1',length_conveyor:"-",power_drive:'-',vacuum_system_aggregate:'1',aggregate_power:'4',weight:"3150",price:''},
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




