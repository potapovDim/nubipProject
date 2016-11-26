import React from 'react'

const choosedPumpByWaterNeed = (pumps, vaterNeed) => {
    return pumps.filter((pump)=> {
        return pump.innings>(vaterNeed/1000) 
    })
}


const calculatePumpByPressure = (height,needPressure,pumps) => {
    const mPaPressure = needPressure/1000
    console.log(mPaPressure)
    let recomendedPumns 
    const {pumps_rotary,pumps_submersible} = pumps
    if(height<10){
        recomendedPumns = pumps_rotary.filter((pump)=>{
            return pump.full_pressure>mPaPressure
        }).filter(pump => pump.full_pressure / mPaPressure  <= 1.3 )
    }
    else if(height>10){
         recomendedPumns = pumps_submersible.filter((pump)=>{
            return pump.full_pressure>mPaPressure
        }).filter(pump => pump.full_pressure / mPaPressure <=1.3)
    }
    return recomendedPumns
}


export const ChoosedPump = ({height,needPressure,pumps,needPerHour,choosePump}) => {
    const pumpsAfterFilter = choosedPumpByWaterNeed(calculatePumpByPressure(height, needPressure, pumps),needPerHour)
    const pumpTable = (height<10) ? <PumpRotary 
                pump = {pumpsAfterFilter}
                choosePump={choosePump}/> : <PumpSubmersible 
                                                    pump = {pumpsAfterFilter} 
                                                    choosePump={choosePump}/>
    return (<div>
                <table className="table">
                    {pumpTable}
                </table>
            </div>)
}

const PumpRotary = ({pump, choosePump}) => {
    const table =  pump.map((item,index)=>{
          return ( <tr key={index}>
                    <td style={{width: '12%'}} className="active"> {item.brand}</td>
                    <td style={{width: '12%'}} className="active"> {item.innings}</td>
                    <td style={{width: '12%'}} className="active"> {item.full_pressure}</td>
                    <td style={{width: '12%'}} className="active"> {item.speed_rotate}</td>
                    <td style={{width: '12%'}} className="active"> {item.power}</td>
                    <td style={{width: '12%'}} className="active"> {item.KKD}</td>
                    <td style={{width: '12%'}} className="active"> {item.allowable_height}</td>
                    <td style={{width: '12%'}} className="active"> {item.price}</td>
                    <td><button onClick={() => choosePump('pump',item)} className="btn btn-default">Вибрати насос</button></td>
                </tr>)
    })
    return(<div>
     <table className="table-bordered text-center">
          <thead>
          <tr className="success">
            <td style={{width: '12%', height: '40px'}}>Марка</td>
            <td style={{width: '12%'}}>Подача ,м3/год</td>
            <td style={{width: '12%'}}>Повний напір ,мПа</td>
            <td style={{width: '12%'}}>Частота обертання ,1/хв</td>
            <td style={{width: '12%'}}>Потужність електродвигуна ,кВт</td>
            <td style={{width: '12%'}}>ККД насоса ,%</td>
            <td style={{width: '12%'}}>Допустима висота всмоктування ,м</td>
            <td style={{width: '12%'}}>Ціна</td>
          </tr>
          </thead>
          <tbody>{table}</tbody>
        </table>
    </div>)
}

 const PumpSubmersible =({pump, choosePump}) => { 
    const table = pump.map((item, index) => {
      return (<tr key={index}>
                <td style={{width: '11%'}} className="active"> {item.brand}</td>
                <td style={{width: '11%'}} className="active"> {item.innings}</td>
                <td style={{width: '11%'}} className="active"> {item.full_pressure}</td>
                <td style={{width: '11%'}} className="active"> {item.speed_rotate}</td>
                <td style={{width: '11%'}} className="active"> {item.power}</td>
                <td style={{width: '11%'}} className="active"> {item.diameter_hole}</td>
                <td style={{width: '11%'}} className="active"> {item.diameter_pipe}</td>
                <td style={{width: '11%'}} className="active"> {item.quantity_whiles}</td>
                <td style={{width: '11%'}} className="active"> {item.price}</td>
                 <td><button onClick={() => choosePump('pump',item)} className="btn btn-default">Вибрати насос</button></td>
            </tr>)
    })
    return(<div>
    <table className="table-bordered text-center">
      <thead>
          <tr className="success">
            <td className="width-bl">Марка</td>
            <td className="width-bl">Подача ,м3/год</td>
            <td className="width-bl">Повний напір ,мПа</td>
            <td className="width-bl">Частота обертання ,1/хв</td>
            <td className="width-bl">Потужність електродвигуна ,кВт</td>
            <td className="width-bl">Діаметр свердловини</td>
            <td className="width-bl">Діаметр трубопровода</td>
            <td className="width-bl">Кількість робочих коліс</td>
            <td className="width-bl">Ціна</td>
          </tr>
          </thead>
          <tbody>{table}</tbody>
          </table>
    </div>)
 }