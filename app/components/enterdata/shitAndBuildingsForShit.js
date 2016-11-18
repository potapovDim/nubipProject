import React from 'react'
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


export const BuildingsForShit = ({cows, cow_before_20days, shit_norms, buildings_for_shit}) => {
  const calculateShit = () => {
    let allShit
    let builds = []
    if (cow_before_20days < 100) {
      allShit = cow_before_20days * shit_norms['cows_before_20days'] + cows * shit_norms['cows'] + 100 * shit_norms['calves']
      builds = [buildings_for_shit[3]]
    }
    else if (cow_before_20days < 300) {
      allShit = cow_before_20days * shit_norms['cows_before_20days'] + cows * shit_norms['cows'] + 250 * shit_norms['calves']
      builds = [buildings_for_shit[4]]
    }
    else if (cow_before_20days < 600) {
      allShit = cow_before_20days * shit_norms['cows_before_20days'] + cows * shit_norms['cows'] + 350 * shit_norms['calves']
      builds = [buildings_for_shit[4], buildings_for_shit[2]]
    }
    else if (cow_before_20days < 1500) {
      allShit = cow_before_20days * shit_norms['cows_before_20days'] + cows * shit_norms['cows'] + 350 * shit_norms['calves']
      builds = [buildings_for_shit[4], buildings_for_shit[4]]
    }
    return {shitMass: allShit * 365, builds}
  }

  const builds = calculateShit().builds.map(item=>
    <Build item={item}/>
  )
  return (
    <div>
      <h3>Масса гною за рік в кілограмах : {calculateShit().shitMass} </h3>
      <h3>Рекомендована приміщень для зберігання гною:</h3>
      <div>{
        builds
      }</div>
    </div>
  )
}

//об'ємна маса гною, кг / м 3 (стійловий гній-700-900 кг / м 3.
//{kind_of_building: 'Гноєсховища', volume: 2000, B: 25, L: 65, H: 3.6}