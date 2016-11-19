import React from 'react'

const calculateShit = (cows, cow_before_20days, litter_norm, stallPeriod, shit_norms,buildings_for_shit) => {
  let allShit
  let builds = []
  let litter
  if (cow_before_20days < 100) {
    litter = (cow_before_20days*litter_norm['cow_before_20days'])
     + (cows*litter_norm['cows']) +(100*litter_norm['calves'])
    allShit = (cow_before_20days * shit_norms['cow_before_20days']+cow_before_20days*litter_norm['cow_before_20days'])
     + (cows * shit_norms['cows']+cows*litter_norm['cows']) +(100 * shit_norms['calves']+100*litter_norm['calves'])
    builds = [buildings_for_shit[2]]
  }
  else if (cow_before_20days < 300) {
     litter = (cow_before_20days*litter_norm['cow_before_20days'])
     + (cows*litter_norm['cows']) +(150*litter_norm['calves'])
    allShit = (cow_before_20days * shit_norms['cow_before_20days']+cow_before_20days*litter_norm['cow_before_20days'])
     + (cows * shit_norms['cows']+cows*litter_norm['cows']) +( 150 * shit_norms['calves']+150*litter_norm['calves'])
    builds = [buildings_for_shit[4]]
  }
    else if (cow_before_20days < 350) {
     litter = (cow_before_20days*litter_norm['cow_before_20days'])
     + (cows*litter_norm['cows']) +(150*litter_norm['calves'])
    allShit = (cow_before_20days * shit_norms['cow_before_20days']+cow_before_20days*litter_norm['cow_before_20days'])
     + (cows * shit_norms['cows']+cows*litter_norm['cows']) +( 150 * shit_norms['calves']+150*litter_norm['calves'])
    builds = [buildings_for_shit[4], buildings_for_shit[2]]
  }
   else if (cow_before_20days < 450) {
     litter = (cow_before_20days*litter_norm['cow_before_20days'])
     + (cows*litter_norm['cows']) + (300*litter_norm['calves'])
    allShit = (cow_before_20days * shit_norms['cow_before_20days']+cow_before_20days*litter_norm['cow_before_20days'])
     + (cows * shit_norms['cows']+cows*litter_norm['cows']) +( 300 * shit_norms['calves']+300*litter_norm['calves'])
    builds = [buildings_for_shit[4], buildings_for_shit[3]]
  }
  else if (cow_before_20days < 600) {
     litter = (cow_before_20days*litter_norm['cow_before_20days'])
     + (cows*litter_norm['cows']) + (300*litter_norm['calves'])
    allShit = (cow_before_20days * shit_norms['cow_before_20days']+cow_before_20days*litter_norm['cow_before_20days'])
     + (cows * shit_norms['cows']+cows*litter_norm['cows']) +( 300 * shit_norms['calves']+300*litter_norm['calves'])
    builds = [buildings_for_shit[4], buildings_for_shit[4]]
  }
  else if (cow_before_20days < 1500) {
     litter = (cow_before_20days*litter_norm['cow_before_20days'])
     + (cows*litter_norm['cows']) +(500*litter_norm['calves'])
    allShit = (cow_before_20days * shit_norms['cow_before_20days']+cow_before_20days*litter_norm['cow_before_20days'])
     + (cows * shit_norms['cows']+cows*litter_norm['cows']) +( 500 * shit_norms['calves']+500*litter_norm['calves'])
    builds = [buildings_for_shit[4], buildings_for_shit[4],buildings_for_shit[3]]
  }
  const shitInKg = allShit * (stallPeriod+0.5*(365-stallPeriod))
  const yearLitter = litter * (stallPeriod+0.5*(365-stallPeriod))
  const shitVolume = shitInKg / 850  
  return {shitInKg, shitVolume, yearLitter, builds}
}

const Build = ({item}) => {
  return (
    <div className="flex-wrap">
      <div>
        Споруда : {item.kind_of_building}
      </div>
      <div>
        Об'єм : {item.volume}
      </div>
      <div>
        Довжина : {item.L}
      </div>
      <div>
        Ширина : {item.B}
      </div>
    </div>
  )
}

export const BuildingsForShit = ({buildings_for_shit, cow_before_20days, cows, litter_norm, shit_norms, stallPeriod}) => {
  
  const {shitInKg, shitVolume , yearLitter, builds} = calculateShit(cows, cow_before_20days, litter_norm, stallPeriod, shit_norms,buildings_for_shit)
  const buildsRecomended = builds.map(item=>
    <Build item={item}/>
  )
  return (
    <div>
      <h3>Гній від тварин та рекомендовані будівлі</h3>
      <h4>Масса гною за стійловий період  : {shitInKg}  кілограмів</h4>
      <h4>Масса підстилки за стійловий період  : {yearLitter}  кілограмів </h4>
      <h4>Об'єм гною  за стійловий період в: {shitVolume} метрів кубічнич </h4>
      <h4>Рекомендована приміщень для зберігання гною </h4>
      <div>{buildsRecomended}</div>
    </div>
  )
}


//об'ємна маса гною, кг / м 3 (стійловий гній-700-900 кг / м 3.
//{kind_of_building: 'Гноєсховища', volume: 2000, B: 25, L: 65, H: 3.6}