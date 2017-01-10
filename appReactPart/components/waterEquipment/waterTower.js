import React from 'react'

const workVolume = (k=0.19, waterPerDay) => {
    return k * (waterPerDay/1000)
}

const lostWorkVolume = () => {
    return 0.2 + 0.2
}

const bankWater = (maxPerHour) => {
    return 2 * (maxPerHour/1000) + 6
}


const assertTower = (waterPerDay,maxPerHour) => {
    return  bankWater(maxPerHour) + lostWorkVolume() + workVolume(undefined,waterPerDay)
}
const Tower = ({tower,addEquip}) => {
    console.log(tower)
    return <tr >
                    <td style={{width: '12%'}} className="active"> {tower.brand}</td>
                    <td style={{width: '12%'}} className="active"> {tower.volumeFull}</td>
                    <td style={{width: '12%'}} className="active"> {tower.volumeCup}</td>
                    <td style={{width: '12%'}} className="active"> {tower.volumeTop}</td>
                    <td style={{width: '12%'}} className="active"> {tower.heigthToBottom}</td>
                    <td style={{width: '12%'}} className="active"> {tower.dCup}</td>
                    <td style={{width: '12%'}} className="active"> {tower.dTop}</td>
                    <td style={{width: '12%'}} className="active"> {tower.weigth}</td>
                    <td><button onClick={() => addEquip('tower',tower)} className="btn btn-default">Прийняти</button></td>
                </tr>
}

const returnTower = (towers,waterNeed,addEquip) => {
    console.log(towers)
    let build
        if(waterNeed<29){
            build = <Tower tower={towers[0]} addEquip={addEquip}/>
        } 
        else if(29<waterNeed&&waterNeed<53){
            build = <Tower tower={towers[1]} addEquip={addEquip}/>
        }
        else if(53<waterNeed&&waterNeed<85){
            build = [<Tower tower={towers[1]} addEquip={addEquip} />, <Tower tower={towers[0]} addEquip={addEquip}/>]
        }
        else if(waterNeed>85){
            build = <Tower tower={towers[2]} addEquip={addEquip}/>
        }
    return build
}

export const WaterTower = ({water_towers, waterNorm:{ maxNeed, needPerHour},addEquip}) => {
    const waterNeed = assertTower(maxNeed,needPerHour)
    const build = returnTower(water_towers, waterNeed,addEquip)
    return (<div>
    <table className="table-bordered text-center">
      <thead>
            <tr className="success">
                <td className="width-bl">Марка</td>
                <td className="width-bl">Повна місткість бака ,м3</td>
                <td className="width-bl">Місткість резервуара ,м3</td>
                <td className="width-bl">Місткість води у колоні ,м3</td>
                <td className="width-bl">Висота до дна бака ,м</td>
                <td className="width-bl">Діаметр бака ,м</td>
                <td className="width-bl">Діаметр колони</td>
                <td className="width-bl">Маса ,кг</td>
            </tr>
            </thead>
          <tbody>{build}</tbody>
          </table>
    </div>)
} 