import React from 'react'

const DrinkingBowBuild = (table) => {
      return (
           <table style={{width:'100%'}}className="table-bordered text-center">
            <thead>
            <tr className="success">
                <td style={{width:'10%',height:'40px'}} >Марка</td>
                <td style={{width:'10%'}} >Місткість чаші ,л</td>
                <td style={{width:'10%'}} >Кількість місць напування</td>
                <td style={{width:'10%'}} >Кількість голів ,що обслуговує</td>
                <td style={{width:'10%'}} >Маса ,кг</td>
                <td style={{width:'10%'}} >Ціна </td>
            </tr>
            </thead>
            <tbody>
            {table}
            </tbody>
          </table>
      )
}

export const DrinkinBow = ({cows, cow_before_20days, drinking_bowl_cows ,drinking_bowl_calves,addDrinkingBow}) =>{
    const bowsForCalses = Math.ceil(cow_before_20days/200)
    const bowsForCowsIf200 = Math.ceil(cows/200)
    const bowsForCowsIf100 = Math.ceil(cows/100)
    const bowsForCowsIf2 = Math.ceil(cows/2)
 
    const tableCowsTwoHead = drinking_bowl_cows.filter(bow => {
        return bow.heads === 2}).map(bow => {
        return ReturnDrinkingBow('cows', addDrinkingBow, bow, bowsForCowsIf2)
    })
    const tableCow100Heads = drinking_bowl_cows.filter(bow => {
        return bow.heads === 100
    }).map(bow => {
        return ReturnDrinkingBow('cows', addDrinkingBow, bow, bowsForCowsIf100)
    })
    const tableCows200Heads  = drinking_bowl_cows.filter(bow => {
        return bow.heads === 200
    }).map(bow => {
        return ReturnDrinkingBow('cows', addDrinkingBow, bow, bowsForCowsIf200)
    })

    const tableCalves = drinking_bowl_calves.map(bow => {
        return ReturnDrinkingBow('calves', addDrinkingBow, bow, bowsForCalses)
    })


    return (
        <div>
        <h2>Запропоновані таблиці атонапувалок </h2>
        <h3>Атонапувалки для корів</h3>
        <h4>Автонапувалки на 200 голів</h4>
        {DrinkingBowBuild(tableCows200Heads)}
        <h4>Автонапувалки на 100 голів</h4>
        {DrinkingBowBuild(tableCow100Heads)}
        <h4>Автонапувалки на 2 голови</h4>
        {DrinkingBowBuild(tableCowsTwoHead)}
        <h3>Атонапувалки для телят на 200 голів</h3>
        {DrinkingBowBuild(tableCalves)}
        </div>
    )

}

const ReturnDrinkingBow = (type,choosDrinkinBow,bow,quantity) => {
      return (
        <tr >
          <td style={{width:'10%'}} className="active"> {bow.brand}</td>
          <td style={{width:'10%'}} className="active"> {bow.water_volume}</td>
          <td style={{width:'10%'}} className="active"> {bow.seats}</td>
          <td style={{width:'10%'}} className="active"> {bow.heads}</td>
          <td style={{width:'10%'}} className="active"> {bow.weight}</td>
          <td style={{width:'10%'}} className="active"> {bow.price}</td>
          <td style={{width:'40%'}}><button onClick={()=>choosDrinkinBow(type,quantity,bow)}>Вибрати данний вид автонапувалки {quantity} шт</button></td>
        </tr>
     )
}
