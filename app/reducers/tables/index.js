import {
  ADD_TO_TABLE, REMOVE_FROM_TABLE, SHOW_ALL_TABLES
} from './action_types';

import update from 'react-addons-update'

const initialState = {
  pumps_rotary: [
    {
      brand: '1,5К-6',
      innings: 11,
      full_pressure: '0.174',
      speed_rotate: 2900,
      power: 1.5,
      KKD: 44,
      allowable_height: 6.6,
      price: "12"
    },
    {
      brand: '2К-6',
      innings: 20,
      full_pressure: 0.308,
      speed_rotate: 2900,
      power: 4.5,
      KKD: 64,
      allowable_height: 7.2,
      price: "12"
    },
    {
      brand: '2К-6А',
      innings: 30,
      full_pressure: 0.2,
      speed_rotate: 2900,
      power: 2.8,
      KKD: 64.1,
      allowable_height: 5.7,
      price: "12"
    },
    {
      brand: '2К-6Б',
      innings: 25,
      full_pressure: 0.164,
      speed_rotate: 2900,
      power: 2.8,
      KKD: 64,
      allowable_height: 5.7,
      price: "12"
    },
    {
      brand: '2К-9',
      innings: 20,
      full_pressure: 0.185,
      speed_rotate: 2900,
      power: 2.8,
      KKD: 58,
      allowable_height: "6.8",
      price: "12"
    },
    {
      brand: '2К-9А',
      innings: 17,
      full_pressure: 0.150,
      speed_rotate: 2900,
      power: 1.5,
      KKD: 65,
      allowable_height: 7.3,
      price: "12"
    },
    {
      brand: '2К-9Б',
      innings: 15,
      full_pressure: 0.120,
      speed_rotate: 2900,
      power: 1.5,
      KKD: 60,
      allowable_height: 7,
      price: "12"
    },
    {
      brand: '3К-9',
      innings: 45,
      full_pressure: 0.310,
      speed_rotate: '2900',
      power: '7.0',
      KKD: '71',
      allowable_height: "6",
      price: "12"
    },
    {
      brand: '3К-9А',
      innings: 35,
      full_pressure: 0.225,
      speed_rotate: 2900,
      power: 4.5,
      KKD: 70,
      allowable_height: "6.9",
      price: "12"
    },
  ],
  pumps_submersible: [
    {
      brand: 'ЄЦВА-2-10',
      innings: 2.5,
      full_pressure: 0.4,
      speed_rotate: 2775,
      power: 0.75,
      diameter_hole: 100,
      diameter_pipe: 32,
      quantity_whiles: 14,
      prise: ''
    },
    {
      brand: 'ЄЦВА-1.6-65',
      innings: 2.2,
      full_pressure: 0.6,
      speed_rotate: 2775,
      power: 0.75,
      diameter_hole: 100,
      diameter_pipe: 32,
      quantity_whiles: 13,
      prise: ''
    },
    {
      brand: 'ЄЦВА-7.2-75',
      innings: 7,
      full_pressure: 0.8,
      speed_rotate: 2880,
      power: '2.5',
      diameter_hole: 150,
      diameter_pipe: 50,
      quantity_whiles: 10,
      prise: ''
    },
    {
      brand: 'ЄЦВА-7.2-120',
      innings: 9,
      full_pressure: 0.6,
      speed_rotate: 2835,
      power: 4.5,
      diameter_hole: 150,
      diameter_pipe: 50,
      quantity_whiles: 16,
      prise: ''
    },
    {
      brand: '6АПВ 9х7',
      innings: 10,
      full_pressure: 0.5,
      speed_rotate: 2950,
      power: 2.5,
      diameter_hole: 150,
      diameter_pipe: 40,
      quantity_whiles: 7,
      prise: ''
    },
    {
      brand: '6АПВ 9х12',
      innings: 8,
      full_pressure: 0.75,
      speed_rotate: 2950,
      power: 4,
      diameter_hole: 150,
      diameter_pipe: 40,
      quantity_whiles: 12
    },
    {
      brand: 'ЄПН-6-16-50',
      innings: 20,
      full_pressure: 0.8,
      speed_rotate: 2900,
      power: '7.5',
      diameter_hole: 150,
      diameter_pipe: 60,
      quantity_whiles: '10',
      prise: ''
    },
  ],
  water_towers:[
    {brand:'БР-15У', volumeFull:29, volumeCup:15, volumeTop:14, heigthToBottom:12, dCup:3, dTop:1.2, weigth:3160},
    {brand:'БР-25У', volumeFull:53, volumeCup:25, volumeTop:18, heigthToBottom:15, dCup:3, dTop:1.2, weigth:4810},
    {brand:'БР-50У', volumeFull:104, volumeCup:50, volumeTop:54, heigthToBottom:18, dCup:3, dTop:2.0, weigth:7960}
  ],
  stern_machines: [
    {brand: 'ITALMIX DUPLEX 10 MC', work_vlolume: 10 , L:'', W:'', weight: '', tractor_power: 1.4, price: 808482.18},
    {brand: 'ITALMIX DUPLEX 12 MC', work_vlolume: 12 , L:'', W:'', weight: '', tractor_power: 1.4, price: 841048.02},
    {brand: 'ITALMIX DUPLEX 14 MC', work_vlolume: 14 , L:'', W:'', weight: '', tractor_power: 1.4, price: 863702.51},
    {brand: 'ITALMIX DUPLEX 15 MC', work_vlolume: 15 , L:'', W:'', weight: '', tractor_power: 1.4, price: 886357.00},
    {brand: 'ITALMIX TRIPLEX 11 MC', work_vlolume: 11 , L:'', W:'', weight: '', tractor_power: 1.4, price: 938745.51},
    {brand: 'ITALMIX TRIPLEX 13 MC', work_vlolume: 13 , L:'', W:'', weight: '', tractor_power: 1.4, price: 967063.63},
    {brand: 'ITALMIX TRIPLEX 15 MC', work_vlolume: 11 , L:'', W:'', weight: '', tractor_power: 1.4, price: 993965.84},
    {brand: 'ITALMIX TRIPLEX 17 MC', work_vlolume: 11 , L:'', W:'', weight: '', tractor_power: 1.4, price: 1070424.75},
    {brand: 'ITALMIX TRIPLEX 20 MC', work_vlolume: 11 , L:'', W:'', weight: '', tractor_power: 1.4, price: 938745.51},
    {brand: 'ITALMIX TWISTER TOP 13 MC', work_vlolume: 11 , L:'', W:'', weight: '', tractor_power: 1.4, price: 988302.21},
    {brand: 'ITALMIX TWISTER TOP 15 MC', work_vlolume: 11 , L:'', W:'', weight: '', tractor_power: 1.4, price: 1057681.60},
    {brand: 'ITALMIX TWISTER TOP 18 MC', work_vlolume: 11 , L:'', W:'', weight: '', tractor_power: 1.4, price: 1146883.66},
    {brand: 'ITALMIX TWISTER TOP 21 MC', work_vlolume: 11 , L:'', W:'', weight: '', tractor_power: 1.4, price: 1187944.92},

    {brand: 'Triolet Solomix 1600', work_vlolume: 16 , L:5.03, W:2.30, weight: '', tractor_power: 45, price: 991968.44},
    {brand: 'Triolet Solomix 2000', work_vlolume: 20 , L:2.98, W:2.44, weight: '', tractor_power: 45, price: 991968.44},
    {brand: 'Triolet Solomix 2400', work_vlolume: 24 , L:6.13, W:2.66, weight: '', tractor_power: 55, price: 991968.44},
    {brand: 'Triolet Solomix 2800', work_vlolume: 28 , L:6.70, W:2.80, weight: '', tractor_power: 75, price: 991968.44},
    {brand: 'Triolet Solomix 3200', work_vlolume: 32 , L:7.10, W:2.29, weight: '', tractor_power: 90, price: 991968.44},
    {brand: 'Triolet Solomix 3600', work_vlolume: 36 , L:8.44, W:2.66, weight: '', tractor_power: 90, price: 991968.44},
    {brand: 'Triolet Solomix 4600', work_vlolume: 46 , L:9.3, W:2.98, weight: '', tractor_power: 90, price: 991968.44},

    {brand: 'Demi-mix 5', work_vlolume: 6 , L:3.85, W:2.1, weight: 2300, tractor_power: 70, price: 991968.44},
    {brand: 'Demi-mix 9', work_vlolume: 9 , L:4.55, W:2.2, weight: 3550, tractor_power: 82, price: 991968.44},
    {brand: 'Demi-mix 16', work_vlolume: 16 , L:6.6, W:2.26, weight: 7000, tractor_power: 100, price: 991968.44},

    {brand: 'Nabamix 12', work_vlolume: 12  , L:6.85, W:2.1, weight: 4200, tractor_power: 70, price: 680350.78 },
    {brand: 'Nabamix 14', work_vlolume: 14  , L:6.90, W:2.16, weight: 4600, tractor_power: 70, price: 680350.78 },
    {brand: 'Nabamix 16', work_vlolume: 16  , L:7.22, W:2.3, weight: 4800, tractor_power: 70, price: 680350.78 },
    {brand: 'Nabamix 18', work_vlolume: 18  , L:7.25, W:2.3, weight: 5250, tractor_power: 70, price: 680350.78 },

    {brand: 'Siloking DUO 1814-14', work_vlolume: 14  , L:6.5, W:2.32, weight: '', tractor_power: 45, price: 591022.60  },
    {brand: 'Siloking DUO 1814-16', work_vlolume: 16  , L:6.5, W:2.32, weight: '', tractor_power: 45, price: 591022.60  },
    {brand: 'Siloking DUO 1814-18', work_vlolume: 18  , L:6.5, W:2.32, weight: '', tractor_power: 45, price: 591022.60  },
    {brand: 'Siloking DUO 2218-14', work_vlolume: 18  , L:7.1, W:2.50, weight: '', tractor_power: 70, price: 591022.60  },
    {brand: 'Siloking DUO 2218-20', work_vlolume: 20  , L:7.1, W:2.50, weight: '', tractor_power: 70, price: 591022.60  },
    {brand: 'Siloking DUO 2218-22', work_vlolume: 22  , L:7.1, W:2.50, weight: '', tractor_power: 70, price: 591022.60  },
    {brand: 'Siloking DUO 3022-22', work_vlolume: 22  , L:7.4, W:2.67, weight: '', tractor_power: 70, price: 591022.60  },
    {brand: 'Siloking DUO 3022-26', work_vlolume: 26  , L:7.4, W:2.67, weight: '', tractor_power: 90, price: 591022.60  },
    {brand: 'Siloking DUO 3022-30', work_vlolume: 30  , L:7.4, W:2.67, weight: '', tractor_power: 90, price: 591022.60  },

    {brand: 'V-MIX Agilo 3,5-1S ', work_vlolume: 3.7  , L:'', W:1.95, weight: '', tractor_power: 30, price: 688255.95  },
    {brand: 'V-MIX Agilo 5-1S ', work_vlolume: 5.1  , L:'', W:1.95, weight: '', tractor_power: 47, price: 688255.95  },
    {brand: 'V-MIX Agilo 5-1S ', work_vlolume: 5.1  , L:'', W:1.95, weight: '', tractor_power: 47, price: 688255.95  },
    {brand: 'V-MIX Agilo 6,5-1S ', work_vlolume: 6.3  , L:'', W:2.14, weight: '', tractor_power: 30, price: 688255.95  },
    {brand: 'V-MIX Agilo 8-1S ', work_vlolume: 8.1  , L:'', W:2.13, weight: '', tractor_power: 56, price: 688255.95  },
    {brand: 'V-MIX Agilo 9-1S ', work_vlolume: 8.8  , L:'', W:2.25, weight: '', tractor_power: 30, price: 688255.95  },
    {brand: 'V-MIX Agilo 10N-1S ', work_vlolume: 10.4  , L:'', W:2.47, weight: '', tractor_power: 70, price: 688255.95  },
    {brand: 'V-MIX Agilo 13-1S ', work_vlolume: 13.4  , L:'', W:2.25, weight: '', tractor_power: 30, price: 688255.95  },
    {brand: 'V-MIX 2SPlus 18-2S', work_vlolume: 19.8  , L:7.475, W:2.60, weight: 6900, tractor_power: 70, price: 688255.95  },
    {brand: 'V-MIX 2SPlus 24-2S ', work_vlolume: 24.9  , L:7.60, W:2.60, weight: 7200, tractor_power: 70, price: 688255.95  },
    {brand: 'V-MIX 2SPlus 27-2S ', work_vlolume: 27.0  , L:7.950, W:2.60, weight: 8400, tractor_power: 70, price: 688255.95  },
    {brand: 'V-MIX 2SPlus 28-2S ', work_vlolume: 28.6  , L:'', W:2.53, weight: '', tractor_power: 75, price: 688255.95  },
    {brand: 'V-MIX 2SPlus 36-2S ', work_vlolume: 36.4  , L:'', W:3.2, weight: 9160, tractor_power: 100, price: 688255.95  },

    {brand: 'Брацлав КСП-12', work_vlolume: 12  , L:4.4, W:2.4, weight: 4400, tractor_power: 75, price: 688255.95  },
    {brand: 'Брацлав КСП-10', work_vlolume: 10  , L:4.2, W:2.2, weight: 4400, tractor_power: 75, price: 688255.95  },
    {brand: 'Брацлав КСП-9', work_vlolume: 9  , L:4.12, W:2.2, weight: 4400, tractor_power: 75, price: 688255.95  },
    {brand: 'Брацлав КСП-8', work_vlolume: 8  , L:4.01, W:2.2, weight: 4400, tractor_power: 75, price: 688255.95  },
    {brand: 'Брацлав КСП-6', work_vlolume: 6  , L:3.95, W:2.2, weight: 4400, tractor_power: 75, price: 688255.95  },
    {brand: 'Брацлав КСП-5', work_vlolume: 5  , L:2.2, W:2, weight: 4400, tractor_power: 75, price: 688255.95  },

    {brand: 'Lucas G  Spirmix 110 L', work_vlolume: 11  , L:4.8, W:2, weight: 3250, tractor_power: 80, price: 688255.95  },
    {brand: 'Lucas G  Spirmix 130 L', work_vlolume: 13  , L:4.95, W:2.61, weight: 3830, tractor_power: 80, price: 688255.95  },
    {brand: 'Lucas G  Spirmix 160 L', work_vlolume: 16  , L:6.32, W:2.5, weight: 6110, tractor_power: 80, price: 688255.95  },
    {brand: 'Lucas G  Spirmix 200 L', work_vlolume: 20  , L:7.44, W:2.61, weight: 6860, tractor_power: 80, price: 688255.95  },
    {brand: 'Lucas G  Spirmix 260 L', work_vlolume: 26  , L:7.44, W:2.61, weight: 7500, tractor_power: 80, price: 688255.95  },

    {brand: 'Euromilk Rino FXL-8', work_vlolume: 8  , L:'', W:2.25, weight: 3600, tractor_power: 40, price: 422286.51 },
    {brand: 'Euromilk Rino FXL-10', work_vlolume: 10  , L:'', W:2.25, weight: 3750, tractor_power: 40, price: 422286.51  },
    {brand: 'Euromilk Rino FXL-12', work_vlolume: 12  , L:'', W:2.25, weight: 3900, tractor_power: 40, price: 422286.51  },
    {brand: 'Euromilk Rino FXX-14', work_vlolume: 14  , L:'', W:2.30, weight: 5500, tractor_power: 60, price: 422286.51  },
    {brand: 'Euromilk Rino FXX-16', work_vlolume: 16  , L:'', W:2.30, weight: 5650, tractor_power: 60, price: 422286.51  },
    {brand: 'Euromilk Rino FXX-18', work_vlolume: 18  , L:'', W:2.30, weight: 5850, tractor_power: 60, price: 422286.51  },
    {brand: 'Euromilk Rino FXX-20', work_vlolume: 20  , L:'', W:2.30, weight: 6000, tractor_power: 60, price: 422286.51  },
    {brand: 'Euromilk Rino FXX-22', work_vlolume: 22  , L:'', W:2.30, weight: 6159, tractor_power: 60, price: 422286.51  },

    {brand: 'Peecon Biga 7', work_vlolume: 7.5  , L:4.320, W:2.35, weight: 3850, tractor_power: 40, price: 422286.51  },
    {brand: 'Peecon Biga 10', work_vlolume: 10  , L:4.340, W:2.30, weight: 4000, tractor_power: 48, price: 422286.51  },
    {brand: 'Peecon Biga maxi 12', work_vlolume: 12  , L:4.63, W:2.35, weight: 4600, tractor_power: 60, price: 422286.51  },
    {brand: 'Peecon Biga twin 12', work_vlolume: 12  , L:6.56, W:2.35, weight: 5700, tractor_power: 70, price: 422286.51  },
    {brand: 'Peecon Biga twin 15', work_vlolume: 15  , L:6.56, W:2.35, weight: 6159, tractor_power: 70, price: 422286.51  },
    {brand: 'Peecon Biga twin 17', work_vlolume: 17  , L:6.56, W:2.35, weight: 6200, tractor_power: 70, price: 422286.51  },

    {brand: 'Хозяин СРК-6В', work_vlolume: 6  , L:4.02, W:2.35, weight: 6200, tractor_power: 70, price: 368774.82  },
    {brand: 'Хозяин СРК-11В', work_vlolume: 11  , L:5.1, W:2., weight: 6200, tractor_power: 70, price: 422286.51  },
    {brand: 'Хозяин СРК-14В', work_vlolume: 14  , L:6.99, W:2.36, weight: 6200, tractor_power: 70, price: 522286.51  },
    {brand: 'Хозяин СРК-16В', work_vlolume: 16  , L:6.99, W:2.39, weight: 6200, tractor_power: 70, price: 622286.51  },
    {brand: 'Хозяин СРК-21В', work_vlolume: 21  , L:6.44, W:2.6, weight: 6200, tractor_power: 70, price: 829665.00  },

  ],
  tractors: [
    {name: 'tractor_first_Name', power: '32', rotate: '1800', pov: "32", price: "43"},
    {name: 'tractor_second_Name', power: '34', rotate: '1200', pov: "32", price: "43"},
    {name: 'tractor_third_Name', power: '35', rotate: '1400', pov: "32", price: "43"},
    {name: 'tractor_fourth_Name', power: '36', rotate: '800', pov: "32", price: "43"},
  ],
  water_norms: [
    {kind_of_animal: 'Корови дійні', norm_per_day: 100},
    {kind_of_animal: 'Бики і нетелі', norm_per_day: 60},
    {kind_of_animal: 'Молодняк ВРХ', norm_per_day: 30},
    {kind_of_animal: 'Телята', norm_per_day: 20}
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
    {brand: "ПА-1А", water_volume: 2, seats: 1, heads: 2, weight: 6, price: "10"},
    {brand: "ПА-1Б", water_volume: 2.1, seats: 1, heads: 2, weight: 5.1, price: "10"},
    {brand: "АГК-4Б", water_volume: 40, seats: 4, heads: 100, weight: 30.7, price: "10"},
    {brand: "АГК-12", water_volume: 40, seats: 8, heads: 200, weight: 46, price: "10"},
  ],
  drinking_bowl_calves: [
    {brand: "АГП-Ф-200", water_volume: 4, seats: 20, heads: 200, weight: 200, price: "10"},
    {brand: "ОПТ-Ф-200", water_volume: 2, seats: 20, heads: 200, weight: 375, price: "10"},
    {brand: "ОПК-Ф-200", water_volume: 4, seats: 20, heads: 200, weight: 415, price: "10"},
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
    {kind_of_building: 'Траншея для сінажу', volume: 250, B: 6, L: 15, H: 3, lost_stern: 5, KKD: '0.98'},
    {kind_of_building: 'Траншея для сінажу', volume: 500, B: 9, L: 31.5, H: 3, lost_stern: 5, KKD: '0.98'},
    {kind_of_building: 'Траншея для сінажу', volume: 750, B: 12, L: 31.5, H: 3, lost_stern: 5, KKD: '0.98'},
    {kind_of_building: 'Траншея для сінажу', volume: 1500, B: 12, L: 49.5, H: 3, lost_stern: 5, KKD: '0.98'},
    {kind_of_building: 'Траншея для сінажу', volume: 2000, B: 12, L: 67.5, H: 3, lost_stern: 5, KKD: '0.98'},
    {kind_of_building: 'Коронебульбоплодні сховища', volume: 4000, B: 27, L: 78, H: 3.6, lost_stern: 3, KKD: 0.98}
  ],
  tubes_specifications: [
    {supply_of_water: '0.75-1', D: 0.04, V: 0.35},
    {supply_of_water: '1.5-2', D: 0.05, V: 0.45},
    {supply_of_water: '2-4', D: 0.08, V: 0.55},
    {supply_of_water: '4-8', D: 0.1, V: 0.65},
    {supply_of_water: '8-12', D: 0.125, V: 0.8},
    {supply_of_water: '12-20', D: 0.15, V: 1},
    {supply_of_water: '20-30', D: 0.2, V: 1.2},
  ],
  buildings_for_farm: {
    buildings_for_cows: [
      {name: 'Корівник',  buildingType:'cow' , type: "безприв'язний", heads: 408, L: 96, W: 18, stern_given: 'Мобільним'},
      {name: 'Корівник',  buildingType:'cow' ,type: "прив'язний", heads: 200, L: 72, W: 18, stern_given: 'Транспортером'},
      {name: 'Корівник',  buildingType:'cow',type: "-", heads: 100, L: 72, W: 12, stern_given: '-'},
      {name: 'Корівник',  buildingType:'cow' ,type: "-", heads: 200, L: 72, W: 21, stern_given: '-'}
    ],
    buildings_for_calves_before_20days: [
      {name: 'Родильне відділення',  buildingType:'cow',type: "-", heads: 96, L: 60, W: 21, stern_given: 'Транспортером'},
      {name: 'Родильне відділення з профілакторієм', buildingType:'cow', type: "-", heads: 160, L: 72, W: 21, stern_given: 'Транспортером'},
      {name: 'Телятник з родильне відділення', buildingType:'20daycow' ,type: "-", heads: 342, L: 90, W: 18, stern_given: '-'},
      {name: 'Телятник з родильне відділення', buildingType:'20daycow',type: "-", heads: 228, L: 60, W: 18, stern_given: '-'},
      {name: 'Телятник з родильне відділення', buildingType:'20daycow', type: "-", heads: 120, L: 60, W: 12, stern_given: '-'}
    ],
    building_for_calves: [
      {name: 'Приміщення для молодняку',  buildingType: 'calves', type: "-", heads: 300, L: 48, W: 18, stern_given: 'Мобільним'},
      {name: 'Приміщення для молодняку',  buildingType: 'calves', type: "-", heads: 170, L: 36, W: 18, stern_given: 'Мобільним'},
      {name: 'Приміщення для молодняку',  buildingType: 'calves', type: "-", heads: 263, L: 60, W: 18, stern_given: 'Мобільним'}
    ]
  },
  buildings_for_shit: [
    {kind_of_building: 'Гноєсховища', volume: 300, B: 28, L: 30, lost_stern: 0, KKD: 1},
    {kind_of_building: 'Гноєсховища', volume: 500, B: 18, L: 42, lost_stern: 0, KKD: 1},
    {kind_of_building: 'Гноєсховища', volume: 2000, B: 25, L: 65, lost_stern: 0, KKD: 1},
    {kind_of_building: 'Гноєсховища', volume: 4500, B: 25, L: 85, lost_stern: 0, KKD: 1},
    {kind_of_building: 'Гноєсховища', volume: 8000, B: 21, L: 270, lost_stern: 0, KKD: 1}
  ],
  shit_norms: {
    cows: 55,
    cow_before_20days: 7.5,
    calves: 14
  },
  litter_norm: {cows: 4, cow_before_20days: 5, calves: 5}
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