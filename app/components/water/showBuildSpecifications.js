import React from 'react'
import _ from 'lodash'

export const BuildingsSpecifications = ({builds}) => {
  const table = Object.keys(_.omit(builds, ['0'])).map(item=> {
    return (<tr>
      <td >{builds[item].name}</td>
      <td >{(builds[item].waterNeedingForThisBuild*2.6 / 86400000).toFixed(5)}</td>
      <td >{builds[item].tube.toFixed(2)} </td>
      <td >{builds[item].tubeLength.toFixed(2)}</td>
    </tr>)
  })
  return <div>
    <table className="table">
      <thead>
      <tr className="success">
        <td>Назва споруди</td>
        <td>Максимальна посекундна потреба води для данного будинку , м кубічних на секунду</td>
        <td>Діаметр труби від цього будинку до попереднього,мeтрів</td>
        <td>Довжина труби від цього будинку до попереднього,метрів</td>
      </tr>
      </thead>
      <tbody>
      {table}
      </tbody>
    </table>
  </div>
}