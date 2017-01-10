import React from 'react'

export const FullStern = ({stern}) => {
  const table = Object.keys(stern).map((value) => {
    return <div className="flex-wrap between block-center">
      <div className="table-right">{value}</div>
      <div className="table-left">{stern[value]} кг</div>
    </div>
  })

  return <div className="text-center">{table}</div>
}