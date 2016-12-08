import React from 'react'
import classNames from 'classnames'

const Build = ({name, type, heads, L, W, stern_given}) => {
    return (
        <div className="flex-wrap">
            <div style={{ width: '17%' }}>
                Споруда : {name}
            </div>
            <div style={{ width: '17%' }} >
                Тип утримання тварин : {type}
            </div>
            <div style={{ width: '17%' }} >
                Кількість голів : {heads}
            </div>
            <div style={{ width: '17%' }} >
                Довжина : {L}
            </div >
            <div style={{ width: '17%' }}>
                Ширина : {W}
            </div>
            <div style={{ width: '17%' }}>
                Роздавання корму : {stern_given}
            </div>
        </div>
    )
}
// <tr key={index}>
//           <td style={{width: '14%'}} className="active">{item.kind_of_building}</td>
//           <td style={{width: '14%'}} className="active">{item.volume}</td>
//           <td style={{width: '14%'}} className="active">{item.B}</td>
//           <td style={{width: '14%'}} className="active">{item.L}</td>
//           <td style={{width: '14%'}} className="active">{item.H}</td>
//           <td style={{width: '14%'}} className="active">{item.lost_stern}</td>
//           <td style={{width: '14%'}} className="active">{item.KKD}</td>
//         </tr>

export const BuildingsForFarm = ({sternVolume , buildingsForStern}) => {
    const buildings = {}
    const recomentBuildForSilos = () => {
        const volume = sternVolume["Об'ем силосу"] / 100
        let value
        if (volume < 5) {
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
        else if ((300 < cows) && (cows <= 400)) {
            value = <Build {...buildings_for_cows[0]} />
        }
        else if ((400 < cows) && (cows <= 500)) {
            value = <div>
                <Build {...buildings_for_cows[0]} />
                <Build {...buildings_for_cows[2]} />
            </div>
        }
        else if ((500 < cows) && (cows <= 600)) {
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
        return value
    }
    const recomendBuildForSoloma = () => {
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
        else if ((200 < cow_before_20days) && (cow_before_20days < 300)) {
            value = <div>
                <Build {...buildings_for_calves_before_20days[1]} />
                <Build {...buildings_for_calves_before_20days[1]} />
            </div>
        }
        else if ((300 < cow_before_20days) && (cow_before_20days < 400)) {
            value = <div>
                <Build {...buildings_for_calves_before_20days[3]} />
                <Build {...buildings_for_calves_before_20days[3]} />
            </div>
        }
        else if ((400 < cow_before_20days) && (cow_before_20days < 500)) {
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
        else if ((700 < cow_before_20days) && (cow_before_20days < 800)) {
            value = <div>
                <Build {...buildings_for_calves_before_20days[2]} />
                <Build {...buildings_for_calves_before_20days[2]} />
                <Build {...buildings_for_calves_before_20days[2]} />
            </div>
        }
        return value
    }
    const recomendBuildsForBur = () => {
        let value

        if (calves < 100) {
            value = <Build {...building_for_calves[1]} />
        }
        else if ((100 < calves) && (calves < 200)) {
            value = <div>
                <Build {...building_for_calves[1]} />
            </div>
        }
        else if ((200 < calves) && (calves <= 300)) {
            value = <div>
                <Build {...building_for_calves[0]} />
            </div>
        }
        else if ((300 < calves) && (calves <= 400)) {

            value = <div>
                <Build {...building_for_calves[1]} />
                <Build {...building_for_calves[2]} />
            </div>
        }
        else if ((400 < calves) && (calves <= 800)) {
            value = <div>
                <Build {...building_for_calves[2]} />
                <Build {...building_for_calves[0]} />
            </div>
        }
        return value
    }

    return (
        <div>
            <button
                className={classNames('btn ', { 'btn-default': buildingsADD === false }, { 'btn-success': buildingsADD === true })}
                onClick={() => addBuildings(buildings)}>Прийняти приміщення для утримання корів та
        молодняку
      </button>
            <h3>Рекомендована приміщень для корів :</h3>
            {recomentBuildForCows()}
            <h3>Рекомендована приміщень для телят до 20 днів :</h3>
            {buildingsForCowBefore20Days()}
            {BuildingsForCalves() && <div><h3>Рекомендована приміщень для молодняку :</h3>
                {BuildingsForCalves()}
            </div>
            }
        </div>
    )
}

