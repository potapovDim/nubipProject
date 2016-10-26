import React from 'react'
import _ from 'lodash'

export const CowStern = ({stern}) => {
  const table = _.mapKeys(stern, (key, value)=> {
    return <tr>
      <td style={{width: '20%'}} className="active">{key}</td>
      <td style={{width: '20%'}} className="active">{value}</td>
    </tr>
  })
  console.log(table)
  return <div>safaskfalsklgaslsgja;g;jsaljga;lgjsa;l
  </div>
}