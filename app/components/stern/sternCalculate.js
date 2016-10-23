import React from 'react'

export const SternCalculation = ({building_for_stern}) => {
  const renderTAble = () => {
    return building_for_stern.map(item =>{
      return (
        <tr key={index}>
          <td style={{width: '25%'}} className="active">{item.kind_of_building}</td>
          <td style={{width: '15%'}} className="active">{item.volume}</td>
          <td style={{width: '10%'}} className="active">{item.B}</td>
          <td style={{width: '10%'}} className="active">{item.L}</td>
          <td style={{width: '10%'}} className="active">{item.H}</td>
          <td style={{width: '15%'}} className="active">{item.lost_stern}</td>
          <td style={{width: '15%'}} className="active">{item.KKD}</td>
        </tr>
      )
    })
  }
  return (<div>

  </div>)
}

