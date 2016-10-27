import React from 'react'

export const CowStern = ({stern}) => {
  const table = Object.keys(stern).map((value) => {
    return <tr>
      <td style={{width: '20%'}} className="active">{value}</td>
      <td style={{width: '20%'}} className="active">{stern[value]} кг</td>
    </tr>
  })
  return <div>{table}</div>
}