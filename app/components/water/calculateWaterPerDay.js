import React from 'react'

export const CalculateWaterPerDay = (props) => {
  const {cows, cow_before_20days, water} = props.props
  console.log(props)
  console.log(water)
  return (<div>
    <div>Потреба води для корів   :{cows * 100} літрів</div>
    <div>Потреба води для телят   :{cow_before_20days * 30} літрів</div>
    <div>Загальна потреба води    :{water.pureNeed} літрів</div>
    <div>Максимальна потреба води :{water.maxNeed} літрів</div>
    <div>Годинна потреба води     :{water.needPerHour} літрів</div>
  </div>)
}
