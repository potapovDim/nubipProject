import React from 'react'
import _ from 'lodash'

export const BuildingsSpecifications = ({builds}) => {
  const table = Object.keys(_.omit(builds, ['насос'])).map(item=> {
    return (<tr>
      <td >{builds[item].title}</td>
      <td >{(builds[item].waterNeedingForThisBuild).toFixed(4)}</td>
      <td >{builds[item].tubeD} </td>
      <td >{builds[item].roadToParent.leftToFather + builds[item].roadToParent.topToFather}</td>
    </tr>)
  })
  return <div>
    <table className="table">
      <thead>
      <tr className="success">
        <td>Назва споруди</td>
        <td>Максимальна посекундна потреба води для данного будинку , м кубічних</td>
        <td>Діаметр труби від цього будинку до попереднього</td>
        <td>Довжина труби від цього будинку до попереднього</td>
      </tr>
      </thead>
      <tbody>
      {table}
      </tbody>
    </table>
  </div>
}