import {
  ADD_TO_TABLE, REMOVE_FROM_TABLE, SHOW_ALL_TABLES
} from './action_types';

import update from 'react-addons-update'

const initialState = {
  pumps_rotary: [
    {
      brand: '1,5К-6',
      innings: '11',
      full_pressure: '0.174',
      speed_rotate: '2900',
      power: '1.5',
      KKD: '44',
      allowable_height: "6.6",
      price: "12"
    },
    {
      brand: '2К-6',
      innings: '20',
      full_pressure: '0.308',
      speed_rotate: '2900',
      power: '4.5',
      KKD: '64',
      allowable_height: "7.2",
      price: "12"
    },
    {
      brand: '2К-6А',
      innings: '30',
      full_pressure: '0.2',
      speed_rotate: '2900',
      power: '2.8',
      KKD: '64.1',
      allowable_height: "5.7",
      price: "12"
    },
    {
      brand: '2К-6Б',
      innings: '25',
      full_pressure: '0.164',
      speed_rotate: '2900',
      power: '2.8',
      KKD: '64',
      allowable_height: "5.7",
      price: "12"
    },
    {
      brand: '2К-9',
      innings: '20',
      full_pressure: '0.185',
      speed_rotate: '2900',
      power: '2.8',
      KKD: '58',
      allowable_height: "6.8",
      price: "12"
    },
    {
      brand: '2К-9А',
      innings: '17',
      full_pressure: '0.150',
      speed_rotate: '2900',
      power: '1.5',
      KKD: '65',
      allowable_height: "7.3",
      price: "12"
    },
    {
      brand: '2К-9Б',
      innings: '15',
      full_pressure: '0.120',
      speed_rotate: '2900',
      power: '1.5',
      KKD: '60',
      allowable_height: "7",
      price: "12"
    },
    {
      brand: '3К-9',
      innings: '45',
      full_pressure: '0.310',
      speed_rotate: '2900',
      power: '7.0',
      KKD: '71',
      allowable_height: "6",
      price: "12"
    },
    {
      brand: '3К-9А',
      innings: '35',
      full_pressure: '0.225',
      speed_rotate: '2900',
      power: '4.5',
      KKD: '70',
      allowable_height: "6.9",
      price: "12"
    },
  ],
  pumps_submersible: [
    {
      brand: 'ЄЦВА-2-10',
      innings: '2.5',
      full_pressure: '0.4',
      speed_rotate: '2775',
      power: '0.75',
      diameter_hole: '100',
      diameter_pipe: '32',
      quantity_whiles: '14',
      prise: ''
    },
    {
      brand: 'ЄЦВА-1.6-65',
      innings: '2.2',
      full_pressure: '0.6',
      speed_rotate: '2775',
      power: '0.75',
      diameter_hole: '100',
      diameter_pipe: '32',
      quantity_whiles: '13',
      prise: ''
    },
    {
      brand: 'ЄЦВА-7.2-75',
      innings: '7',
      full_pressure: '0.8',
      speed_rotate: '2880',
      power: '2.5',
      diameter_hole: '150',
      diameter_pipe: '50',
      quantity_whiles: '10',
      prise: ''
    },
    {
      brand: 'ЄЦВА-7.2-120',
      innings: '9',
      full_pressure: '0.6',
      speed_rotate: '2835',
      power: '4.5',
      diameter_hole: '150',
      diameter_pipe: '50',
      quantity_whiles: '16',
      prise: ''
    },
    {
      brand: '6АПВ 9х7',
      innings: '10',
      full_pressure: '0.5',
      speed_rotate: '2950',
      power: '2.5',
      diameter_hole: '150',
      diameter_pipe: '40',
      quantity_whiles: '7',
      prise: ''
    },
    {
      brand: '6АПВ 9х12',
      innings: '8',
      full_pressure: '0.75',
      speed_rotate: '2950',
      power: '4',
      diameter_hole: '150',
      diameter_pipe: '40',
      quantity_whiles: '12'
    },
    {
      brand: 'ЄПН-6-16-50',
      innings: '20',
      full_pressure: '0.8',
      speed_rotate: '290',
      power: '7.5',
      diameter_hole: '150',
      diameter_pipe: '60',
      quantity_whiles: '10',
      prise: ''
    },
  ],
  machines: [
    {name: 'tractor_first_Name', power: '32', rotate: '1800', pov: "32", price: "43"},
    {name: 'tractor_second_Name', power: '34', rotate: '1200', pov: "32", price: "43"},
    {name: 'tractor_third_Name', power: '35', rotate: '1400', pov: "32", price: "43"},
    {name: 'tractor_fourth_Name', power: '36', rotate: '800', pov: "32", price: "43"},
  ],
  tractors: [
    {name: 'tractor_first_Name', power: '32', rotate: '1800', pov: "32", price: "43"},
    {name: 'tractor_second_Name', power: '34', rotate: '1200', pov: "32", price: "43"},
    {name: 'tractor_third_Name', power: '35', rotate: '1400', pov: "32", price: "43"},
    {name: 'tractor_fourth_Name', power: '36', rotate: '800', pov: "32", price: "43"},
  ],
  water_norms: [
    {kind_of_animal: 'Корови дійні', norm_per_day: '100'},
    {kind_of_animal: 'Бики і нетелі', norm_per_day: '60'},
    {kind_of_animal: 'Молодняк ВРХ', norm_per_day: '30'},
    {kind_of_animal: 'Телята', norm_per_day: '20'},
  ],
  stern_norms: [
    {view_feed: 'Сіно', get_milk_year2000: 4, get_milk_year3000: 4.5, get_milk_year4000: 6, price: 1},
    {view_feed: 'Солома', get_milk_year2000: 1, get_milk_year3000: 1, get_milk_year4000: 1, price: 1},
    {view_feed: 'Силос', get_milk_year2000: 24, get_milk_year3000: 24, get_milk_year4000: 26, price: 1},
    {view_feed: 'Коренеплоди', get_milk_year2000: 3, get_milk_year3000: 7, get_milk_year4000: 8, price: 1},
    {view_feed: 'Концентровані корми', get_milk_year2000: 1, get_milk_year3000: 2, get_milk_year4000: 3, price: 1},
    {view_feed: 'Карбамід ,кг', get_milk_year2000: 0.06, get_milk_year3000: 0.06, get_milk_year4000: 0.08, price: 1},
    {
      view_feed: 'Сіль',
      get_milk_year2000: 0.05,
      get_milk_year3000: 0.05,
      get_milk_year4000: 0.08,
      price: 1
    },
    {
      view_feed: 'Мінеральні корми',
      get_milk_year2000: 0.17,
      get_milk_year3000: .18,
      get_milk_year4000: 0.18,
      price: 1
    },
  ],
  stern_norms_feeding: [
    {view_feed: 'Сіно', many_components: 2, intensive: 0, price: ''},
    {view_feed: 'Солома', many_components: 2, intensive: 0, price: ''},
    {view_feed: 'Силос', many_components: 8, intensive: 0, price: ''},
    {view_feed: 'Сінаж', many_components: 6, intensive: 13, price: ''},
    {view_feed: 'Коренеплоди', many_components: 5, intensive: 0, price: ''},
    {view_feed: 'Концентровані корми', many_components: 2.5, intensive: 3.5, price: ''},
    {view_feed: 'Сіль', many_components: 0.04, intensive: 0.04, price: ''},
  ],
  drinking_bowl_cows: [
    {brand: "АП-1А", water_volume: 1.8, seats: 1, heads: 2, weight: 0.75, price: "10"},
    {brand: "ПА-1А", water_volume: 2, seats: 1, heads: 2, weight: '6', price: "10"},
    {brand: "ПА-1Б", water_volume: 2.1, seats: 1, heads: 2, weight: '5.1', price: "10"},
    {brand: "АГК-4Б", water_volume: 40, seats: 4, heads: 100, weight: '30.7', price: "10"},
    {brand: "АГК-12", water_volume: 40, seats: 8, heads: 200, weight: '46', price: "10"},
  ],
  drinking_bowl_calves: [
    {brand: "АГП-Ф-200", water_volume: '4', seats: "20", heads: '200', weight: '200', price: "10"},
    {brand: "ОПТ-Ф-200", water_volume: '2', seats: "20", heads: '200', weight: '375', price: "10"},
    {brand: "ОПК-Ф-200", water_volume: '4', seats: "20", heads: '200', weight: '415', price: "10"},
  ],
  milking_machines_stall: [
    {
      brand: "АД-100А",
      quantity_cows: '100',
      quantity_machines: '10',
      type_brand_apparatus: 'Тритактний "Волга" АДУ-1-04',
      quantity_personal: '4',
      productivity: '55',
      man_productivity_with2: '12',
      man_productivity_with3: '18',
      brand_vacuum_pump: 'РВН-40/350',
      vacuum_pump_quantity: "1",
      power: '3',
      weight: "870",
      price: ''
    },
    {
      brand: "ДАС-2Б",
      quantity_cows: '100',
      quantity_machines: '10',
      type_brand_apparatus: 'Двотактний ДА-2,АДУ-1',
      quantity_personal: '4',
      productivity: '60',
      man_productivity_with2: '14',
      man_productivity_with3: '20',
      brand_vacuum_pump: 'РВН-40/350',
      vacuum_pump_quantity: "1",
      power: '3',
      weight: "975",
      price: ''
    },
    {
      brand: "УДМ-50",
      quantity_cows: '50',
      quantity_machines: '3',
      type_brand_apparatus: 'Двотактний ДА-2,АДУ-1',
      quantity_personal: '1',
      productivity: '27',
      man_productivity_with2: '15',
      man_productivity_with3: '22',
      brand_vacuum_pump: 'УВУ-60/45А',
      vacuum_pump_quantity: "1",
      power: '3.75',
      weight: "1140",
      price: ''
    },
    {
      brand: "УДМ-100",
      quantity_cows: '100',
      quantity_machines: '6',
      type_brand_apparatus: 'Двотактний ДА-2,АДУ-1',
      quantity_personal: '2',
      productivity: '50',
      man_productivity_with2: '15',
      man_productivity_with3: '22',
      brand_vacuum_pump: 'УВУ-60/45А',
      vacuum_pump_quantity: "1",
      power: '4.75',
      weight: "1355",
      price: ''
    },
    {
      brand: "УДМ-200",
      quantity_cows: '200',
      quantity_machines: '12',
      type_brand_apparatus: 'Двотактний ДА-2,АДУ-1',
      quantity_personal: '4',
      productivity: '100',
      man_productivity_with2: '15',
      man_productivity_with3: '22',
      brand_vacuum_pump: 'УВУ-60/45А',
      vacuum_pump_quantity: "2",
      power: '8.75',
      weight: "2182",
      price: ''
    },
    {
      brand: "АДМ-8А",
      quantity_cows: '200',
      quantity_machines: '12',
      type_brand_apparatus: 'Двотактний АДУ-1-09,АДУ-1-03',
      quantity_personal: '4',
      productivity: '95',
      man_productivity_with2: '17',
      man_productivity_with3: '22',
      brand_vacuum_pump: 'УВУ-60/45',
      vacuum_pump_quantity: "2",
      power: '5.5',
      weight: "3400",
      price: ''
    },
    {
      brand: "МВС-12",
      quantity_cows: '200',
      quantity_machines: '12',
      type_brand_apparatus: 'Двотактний ДА-50',
      quantity_personal: '4',
      productivity: '95',
      man_productivity_with2: '16',
      man_productivity_with3: '22',
      brand_vacuum_pump: 'УВУ-60/45',
      vacuum_pump_quantity: "2",
      power: '4',
      weight: "2800",
      price: ''
    },
  ],
  milking_machines_parlor: [
    {
      brand: "УДТ-6",
      quantity_cows: '190',
      quantity_personal: '2',
      quantity_operator: '1',
      quantity_apparatus: '8',
      productivity_per_hour: '72',
      power_needed: '19.4',
      hopper_capacity: '0.53',
      length_conveyor: "30",
      power_drive: '1.1',
      vacuum_system_aggregate: '2',
      aggregate_power: '4',
      weight: "4000",
      price: ''
    },
    {
      brand: "УДА-8А",
      quantity_cows: '170',
      quantity_personal: '1',
      quantity_operator: '1',
      quantity_apparatus: '8',
      productivity_per_hour: '62',
      power_needed: '22',
      hopper_capacity: '0.53',
      length_conveyor: "30",
      power_drive: '1.1',
      vacuum_system_aggregate: '2',
      aggregate_power: '4',
      weight: "4105",
      price: ''
    },
    {
      brand: "УДЕ-8",
      quantity_cows: '210',
      quantity_personal: '2',
      quantity_operator: '1',
      quantity_apparatus: '16',
      productivity_per_hour: '80',
      power_needed: '22',
      hopper_capacity: '0.53',
      length_conveyor: "46",
      power_drive: '1.1',
      vacuum_system_aggregate: '2',
      aggregate_power: '4',
      weight: "4190",
      price: ''
    },
    {
      brand: "УДА-16А",
      quantity_cows: '190',
      quantity_personal: '1',
      quantity_operator: '1',
      quantity_apparatus: '16',
      productivity_per_hour: '70',
      power_needed: '22',
      hopper_capacity: '0.53',
      length_conveyor: "46",
      power_drive: '1',
      vacuum_system_aggregate: '2',
      aggregate_power: '4',
      weight: "4300",
      price: ''
    },
    {
      brand: "УДА-100",
      quantity_cows: '400',
      quantity_personal: '2',
      quantity_operator: '1',
      quantity_apparatus: '16',
      productivity_per_hour: '100',
      power_needed: '22',
      hopper_capacity: '2',
      length_conveyor: "-",
      power_drive: '0.8',
      vacuum_system_aggregate: '2',
      aggregate_power: '4',
      weight: "12800",
      price: ''
    },
    {
      brand: "УДС-3(Б)",
      quantity_cows: '100',
      quantity_personal: '2',
      quantity_operator: '-',
      quantity_apparatus: '8',
      productivity_per_hour: '45',
      power_needed: '5.5',
      hopper_capacity: '1',
      length_conveyor: "-",
      power_drive: '-',
      vacuum_system_aggregate: '1',
      aggregate_power: '4',
      weight: "3150",
      price: ''
    },
  ],
  building_for_stern: [
    {kind_of_building: 'Траншея для сінажу', volume: '250', B: '6', L: '15', H: '3', lost_stern: '5', KKD: '0.98'},
    {kind_of_building: 'Траншея для сінажу', volume: '500', B: '9', L: '31.5', H: '3', lost_stern: '5', KKD: '0.98'},
    {kind_of_building: 'Траншея для сінажу', volume: '750', B: '12', L: '31.5', H: '3', lost_stern: '5', KKD: '0.98'},
    {kind_of_building: 'Траншея для сінажу', volume: '1500', B: '12', L: '49.5', H: '3', lost_stern: '5', KKD: '0.98'},
    {kind_of_building: 'Коронебульбоплодні сховища', volume: '4000', B: '27', L: '78', H: '3.6', lost_stern: '3', KKD: '0.98'},
    {kind_of_building: 'Гноєсховища', volume: '300', B: '28', L: '30', H: '3.6', lost_stern: '0', KKD: '1'},
    {kind_of_building: 'Гноєсховища', volume: '500', B: '28', L: '42', H: '3.6', lost_stern: '0', KKD: '1'},
    {kind_of_building: 'Гноєсховища', volume: '2000', B: '25', L: '65', H: '3.6', lost_stern: '0', KKD: '1'},
  ],
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case ADD_TO_TABLE:
      let addTabl = {[action.key]: update(state[action.key], {$push: [action.data]})}
      return {...state, ...addTabl}
    case REMOVE_FROM_TABLE:
      let remTable = {[action.key]: state[action.key].slice(0, state[action.key].length - 1)}
      return {...state, ...remTable}
    case SHOW_ALL_TABLES:
      return {...state, tablesShow: {...state.tablesShow, SHOW_ALL: !state.tablesShow.SHOW_ALL}}
    default :
      return state
  }
}




