import React from 'react'

const calculateShit = (cows, cow_before_20days, litter_norm, stallPeriod, shit_norms, buildings_for_shit) => {
  let allShit = (cow_before_20days * shit_norms['cow_before_20days'] + cow_before_20days * litter_norm['cow_before_20days'])
    + (cows * shit_norms['cows'] + cows * litter_norm['cows']) + (100 * shit_norms['calves'] + 100 * litter_norm['calves'])
  let builds = []
  let litter = (cow_before_20days * litter_norm['cow_before_20days'])
    + (cows * litter_norm['cows']) + (100 * litter_norm['calves'])
  const shitInKg = allShit * (stallPeriod + 0.5 * (365 - stallPeriod))
  const yearLitter = litter * (stallPeriod + 0.5 * (365 - stallPeriod))
  const shitVolume = shitInKg / 850
  if (shitVolume <= 300) {
    builds = [buildings_for_shit[0]]
  }
  else if (300 <= shitVolume && shitVolume <= 500) {
    builds = [buildings_for_shit[1]]
  }
  else if (500 <= shitVolume && shitVolume <= 800) {
    builds = [buildings_for_shit[0], buildings_for_shit[1]]
  }
  else if (800 <= shitVolume && shitVolume <= 1000) {
    builds = [buildings_for_shit[1], buildings_for_shit[1]]
  }
  else if (1000 <= shitVolume && shitVolume <= 1500) {
    builds = [buildings_for_shit[1], buildings_for_shit[1], buildings_for_shit[1]]
  }
  else if (1500 <= shitVolume && shitVolume <= 2000) {
    builds = [buildings_for_shit[2]]
  }
  else if (1500 <= shitVolume && shitVolume <= 2000) {
    builds = [buildings_for_shit[2]]
  }
  else if (2000 <= shitVolume && shitVolume <= 2500) {
    builds = [buildings_for_shit[2], buildings_for_shit[1]]
  }
  else if (2500 <= shitVolume && shitVolume <= 3000) {
    builds = [buildings_for_shit[2], buildings_for_shit[1], buildings_for_shit[1]]
  }
  else if (3000 <= shitVolume && shitVolume <= 3500) {
    builds = [buildings_for_shit[2], buildings_for_shit[1], buildings_for_shit[1, buildings_for_shit[1]]]
  }
  else if (3500 <= shitVolume && shitVolume <= 4500) {
    builds = [buildings_for_shit[3]]
  }
  else if (4500 <= shitVolume && shitVolume <= 5000) {
    builds = [buildings_for_shit[2], buildings_for_shit[1] ]
  }
   else if (5000 <= shitVolume && shitVolume <= 5500) {
    builds = [buildings_for_shit[2], buildings_for_shit[1], buildings_for_shit[1]]
  }
   else if (5500 <= shitVolume && shitVolume <= 7000) {
    builds = [buildings_for_shit[2], buildings_for_shit[2], buildings_for_shit[1]]
  }
   else if (7000 <= shitVolume && shitVolume <= 8000) {
    builds = [buildings_for_shit[4]]
  }
   else if (8000 <= shitVolume && shitVolume <= 9000) {
    builds = [buildings_for_shit[4],  buildings_for_shit[1],  buildings_for_shit[1]]
  }
   else if (9000 <= shitVolume && shitVolume <= 10000) {
    builds = [buildings_for_shit[4],  buildings_for_shit[2]]
  }
   else if (10000 <= shitVolume && shitVolume <= 12500) {
    builds = [buildings_for_shit[4 , buildings_for_shit[3]]]
  }
   else if (12500 <= shitVolume && shitVolume <= 16000) {
    builds = [buildings_for_shit[4] , buildings_for_shit[4]]
  }
  return { shitInKg, shitVolume, yearLitter, builds }
}

const Build = ({item}) => {
  return (
    <div className="flex-wrap text-center">
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

  const {shitInKg, shitVolume, yearLitter, builds} = calculateShit(cows, cow_before_20days, litter_norm, stallPeriod, shit_norms, buildings_for_shit)
  const buildsRecomended = builds.map(item =>
    <Build item={item} />
  )
  return (
    <div>
      <h3>Гній від тварин та рекомендовані будівлі</h3>
      <h4>Масса гною за стійловий період  : {shitInKg}кілограмів</h4>
      <h4>Масса підстилки за стійловий період  : {yearLitter}кілограмів </h4>
      <h4>Об'єм гною  за стійловий період в: {shitVolume}метрів кубічнич </h4>
      <h4>Рекомендована приміщень для зберігання гною </h4>
      <div>{buildsRecomended}</div>
    </div>
  )
}
