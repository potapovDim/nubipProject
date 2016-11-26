import React from 'react'

export const SternMachineChoosing = ({machines, addMachine, volumeForOneTime}) => {
    const quantityMachine = (work_volume) => {
        return Math.ceil(volumeForOneTime / work_volume)
    }
    let table = machines.map(function (item, index) {
        return (
            <tr key={index}>
                <td style={{ width: '14%' }} className="active">{item.brand}</td>
                <td style={{ width: '14%' }} className="active">{item.work_volume}</td>
                <td style={{ width: '14%' }} className="active">{item.L}</td>
                <td style={{ width: '14%' }} className="active">{item.W}</td>
                <td style={{ width: '14%' }} className="active">{item.weight}</td>
                <td style={{ width: '14%' }} className="active">{item.tractor_power}</td>
                <td style={{ width: '14%' }} className="active">{item.price}</td>
                <td style={{ width: '14%' }} className="active">
                    <button onClick={() => addMachine(item, quantityMachine(item.work_volume))}>Вибрати машину в кількості {quantityMachine(item.work_volume)}</button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <table style={{ width: '100%' }} className="table-bordered text-center">
                <thead>
                    <tr className="success">
                        <td style={{ width: '14%', height: '40px' }}>Марка</td>
                        <td style={{ width: '14%' }}>Робочий о'єм , метрів кубічних</td>
                        <td style={{ width: '14%' }}>Довжина ,метрів</td>
                        <td style={{ width: '14%' }}>Ширина ,метрів</td>
                        <td style={{ width: '14%' }}>Масса ,кг</td>
                        <td style={{ width: '14%' }}>Потужність трактора , кВт</td>
                        <td style={{ width: '14%' }}>Ціна</td>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    )
} 