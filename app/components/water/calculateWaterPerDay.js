import React from 'react'

export const CalculateWaterPerDay = (props) => {
  const {cows, cow_before_20days, water} = props.props
  return (<div className="bg-primary">
    <h3 className="bg-primary text-center">Потреба води для корів   :{cows * 100} літрів</h3>
    <h3 className="bg-primary text-center">Потреба води для телят   :{cow_before_20days * 30} літрів</h3>
    <h3 className="bg-primary text-center">Загальна потреба води    :{water.pureNeed} літрів</h3>
    <h3 className="bg-primary text-center">Максимальна потреба води :{water.maxNeed} літрів</h3>
    <h3 className="bg-primary text-center">Годинна потреба води     :{water.needPerHour} літрів</h3>
  </div>)
}
