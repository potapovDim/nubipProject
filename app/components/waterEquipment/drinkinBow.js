import React from 'react'

const DrinkingBowBuild = ({brand, water_volume, seats, heads, weight, price}) => {
     let table = drinking_bowl_cows.map(function (item, index) {
      return (

        <tr key={index}>
          <td style={{width:'16%'}} className="active"> {item.brand}</td>
          <td style={{width:'16%'}} className="active"> {item.water_volume}</td>
          <td style={{width:'16%'}} className="active"> {item.seats}</td>
          <td style={{width:'16%'}} className="active"> {item.heads}</td>
          <td style={{width:'16%'}} className="active"> {item.weight}</td>
          <td style={{width:'16%'}} className="active"> {item.price}</td>
        </tr>
     )})
      return (
           <table style={{width:'100%'}}className="table-bordered text-center">
            <thead>
            <tr className="success">
                <td style={{width:'16%',height:'40px'}} >Марка</td>
                <td style={{width:'16%'}} >Місткість чаші ,л</td>
                <td style={{width:'16%'}} >Кількість місць напування</td>
                <td style={{width:'16%'}} >Кількість голів ,що обслуговує</td>
                <td style={{width:'16%'}} >Маса ,кг</td>
                <td style={{width:'16%'}} >Ціна </td>
            </tr>
            </thead>
            <tbody>
            {table}
            </tbody>
          </table>
      )
}

export const DrinkinBow = ({cows, cow_before_20days, drinking_bowl_cows ,drinking_bowl_calves}) =>{
    
}