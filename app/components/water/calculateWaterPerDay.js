import React from 'react'

export const CalculateWaterPerDay = (props) => {
  const {cows, cow_before_20days, water} = props
  return (<div className="bg-primary">
    <h3 className="bg-primary text-left">Потреба води для корів на добу :{cows * 100} літрів</h3>
    <h3 className="bg-primary text-left">Потреба води для телят на добу :{cow_before_20days * 30} літрів</h3>
    <h3 className="bg-primary text-left">Загальна потреба води на добу :{water.pureNeed.toFixed(2)} літрів</h3>
    <h3 className="bg-primary text-left">Максимальна потреба води за добу :{water.maxNeed.toFixed(2)} літрів</h3>
    <h3 className="bg-primary text-left">Максимальна погодинна потреба води :{water.needPerHour.toFixed(2)} літрів</h3>
  </div>)
}
