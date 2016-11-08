import React from 'react'

const Build = ({name, type, heads, L, W, stern_given}) => {
  return (
    <div className="flex-wrap">
      <div>
        Споруда : {name}
      </div>
      <div>
        Тип утримання тварин : {type}
      </div>
      <div>
        Кількість голів : {heads}
      </div>
      <div>
        Довжина : {L}
      </div>
      <div>
        Ширина : {W}
      </div>
      <div>
        Роздавання корму : {stern_given}
      </div>
    </div>
  )
}


export const BuildingsForFarm = ({addBuildings, cows, cow_before_20days, building_for_calves, buildings_for_calves_before_20days, buildings_for_cows, type}) => {

  const recomentBuildForCows = () => {
    let value
    if (type === 'without_attachable') {

      if (cows < 100) {
        value = <Build {...buildings_for_cows[2]} />
      }
      else if ((100 < cows) && (cows <= 200)) {
        value = <Build {...buildings_for_cows[3]} />
      }
      else if ((200 < cows) && (cows <= 300)) {
        value = <div>
          <Build {...buildings_for_cows[2]} />
          <Build {...buildings_for_cows[3]} />
        </div>
      }
      else if ((300 < cows ) && (cows <= 400)) {
        value = <Build {...buildings_for_cows[0]} />
      }
      else if ((400 < cows) && (cows <= 500)) {
        value = <div>
          <Build {...buildings_for_cows[0]} />
          <Build {...buildings_for_cows[2]} />
        </div>
      }
      else if ((500 < cows ) && (cows <= 600)) {
        value = <div>
          <Build {...buildings_for_cows[3]} />
          <Build {...buildings_for_cows[3]} />
          <Build {...buildings_for_cows[3]} />
        </div>
      }
      else if ((600 < cows) && (cows <= 700)) {
        value = <div>
          <Build {...buildings_for_cows[3]} />
          <Build {...buildings_for_cows[3]} />
          <Build {...buildings_for_cows[3]} />
          <Build {...buildings_for_cows[2]} />
        </div>
      }
      else if ((700 < cows) && (cows <= 800)) {
        value = <div>
          <Build {...buildings_for_cows[0]} />
          <Build {...buildings_for_cows[0]} />
        </div>
      }
    }
    else {
      value = <div>
        <h4>Кількість приміщень {Math.ceil(cows / 200)}</h4>
        <Build {...buildings_for_cows[1]} />
      </div>
    }
    return value
  }
  const buildingsForCowBefore20Days = () => {
    let value
    if (cow_before_20days < 100) {
      value = <Build {...buildings_for_calves_before_20days[0]} />
    }
    else if ((100 < cow_before_20days) && (cow_before_20days < 200)) {
      value = <div>
        <Build {...buildings_for_calves_before_20days[0]} />
        <Build {...buildings_for_calves_before_20days[0]} />
      </div>
    }
    else if ((200 < cow_before_20days ) && (cow_before_20days < 300)) {
      value = <div>
        <Build {...buildings_for_calves_before_20days[1]} />
        <Build {...buildings_for_calves_before_20days[1]} />
      </div>
    }
    else if ((300 < cow_before_20days ) && (cow_before_20days < 400)) {
      value = <div>
        <Build {...buildings_for_calves_before_20days[3]} />
        <Build {...buildings_for_calves_before_20days[3]} />
      </div>
    }
    else if ((400 < cow_before_20days ) && (cow_before_20days < 500)) {
      value = <div>
        <Build {...buildings_for_calves_before_20days[3]} />
        <Build {...buildings_for_calves_before_20days[2]} />
      </div>
    }
    else if ((500 < cow_before_20days) && (cow_before_20days < 600)) {
      value = <div>
        <Build {...buildings_for_calves_before_20days[2]} />
        <Build {...buildings_for_calves_before_20days[2]} />
      </div>
    }
    else if ((600 < cow_before_20days) && (cow_before_20days < 700)) {
      value = <div>
        <Build {...buildings_for_calves_before_20days[2]} />
        <Build {...buildings_for_calves_before_20days[2]} />
        <Build {...buildings_for_calves_before_20days[4]} />
      </div>
    }
    else if ((700 < cow_before_20days ) && (cow_before_20days < 800)) {
      value = <div>
        <Build {...buildings_for_calves_before_20days[2]} />
        <Build {...buildings_for_calves_before_20days[2]} />
        <Build {...buildings_for_calves_before_20days[2]} />
      </div>
    }
    return value
  }
  const BuildingsForCalves = () => {
    let value
    if (cow_before_20days < 100) {
      value = <Build {...building_for_calves[1]} />
    }
    else if ((100 < cow_before_20days ) && (cow_before_20days < 200)) {
      value = <div>
        <Build {...building_for_calves[1]} />
      </div>
    }
    else if ((200 < cow_before_20days ) && (cow_before_20days <= 300)) {
      console.log('=========================')
      value = <div>
        <Build {...building_for_calves[0]} />
      </div>
    }
    else if ((300 < cow_before_20days ) && (cow_before_20days <= 400)) {
      value = <div>
        <Build {...building_for_calves[1]} />
        <Build {...building_for_calves[2]} />
      </div>
    }
    else if ((400 < cow_before_20days) && ( cow_before_20days <= 500)) {
      value = <div>
        <Build {...building_for_calves[2]} />
        <Build {...building_for_calves[0]} />
      </div>
    }
    return value
  }

  return (
    <div>
      <h3>Рекомендована приміщень для корів :</h3>
      {recomentBuildForCows()}
      <h3>Рекомендована приміщень для телят до 20 днів :</h3>
      {buildingsForCowBefore20Days()}
      <h3>Рекомендована приміщень для молодняку :</h3>
      {BuildingsForCalves()}
    </div>
  )
}

