import React from 'react'

const quantityMachine = (heads, productivity_per_hour) => {
    return Math.ceil(heads / (productivity_per_hour * 2))
}

export const ChoosedMilkMachine = ({ type, cows, chooceMachine, milking_machines_stall, milking_machines_parlor}) => {
    const machineTable = type === 'without_attachable' ? <ParlorMachine
        machines={milking_machines_parlor}
        cows={cows}
        chooceMachine={chooceMachine} /> : <StallMachine
            machines={milking_machines_stall}
            cows={cows}
            chooceMachine={chooceMachine} />
    return (<div>
        <h2>Доїліні агрегати та їх кількість яка задовільня</h2>
        <table className="table">
            {machineTable}
        </table>
    </div>)
}

const StallMachine = ({cows, machines, chooceMachine}) => {
    const table = machines.map((item, index) => {
        return (<tr key={index}>
            <td style={{ width: '8%' }} className="active"> {item.brand}</td>
            <td style={{ width: '8%' }} className="active"> {item.quantity_cows}</td>
            <td style={{ width: '8%' }} className="active"> {item.quantity_machines}</td>
            <td style={{ width: '8%' }} className="active"> {item.type_brand_apparatus}</td>
            <td style={{ width: '8%' }} className="active"> {item.quantity_personal}</td>
            <td style={{ width: '8%' }} className="active"> {item.productivity}</td>
            <td style={{ width: '8%' }} className="active"> {item.man_productivity_with2}</td>
            <td style={{ width: '8%' }} className="active"> {item.man_productivity_with3}</td>
            <td style={{ width: '8%' }} className="active"> {item.brand_vacuum_pump}</td>
            <td style={{ width: '8%' }} className="active"> {item.vacuum_pump_quantity}</td>
            <td style={{ width: '8%' }} className="active"> {item.power}</td>
            <td style={{ width: '8%' }} className="active"> {item.weight}</td>
            <td style={{ width: '8%' }} className="active"> {item.price}</td>
            <td><button onClick={() => chooceMachine(quantityMachine(cows, item.productivity), item)} className="btn btn-default">Вибрати машину в кількості {quantityMachine(cows, item.productivity)}</button></td>
        </tr>)
    })
    return (<div>
        <table className="table-bordered text-center">
            <thead>
                <tr className="success">
                    <td style={{ height: '50' }} className="active"> {item.brand}</td>
                    <td style={{ width: '8%' }} className="active"> {item.quantity_cows}</td>
                    <td style={{ width: '8%' }} className="active"> {item.quantity_machines}</td>
                    <td style={{ width: '8%' }} className="active"> {item.type_brand_apparatus}</td>
                    <td style={{ width: '8%' }} className="active"> {item.quantity_personal}</td>
                    <td style={{ width: '8%' }} className="active"> {item.productivity}</td>
                    <td style={{ width: '8%' }} className="active"> {item.man_productivity_with2}</td>
                    <td style={{ width: '8%' }} className="active"> {item.man_productivity_with3}</td>
                    <td style={{ width: '8%' }} className="active"> {item.brand_vacuum_pump}</td>
                    <td style={{ width: '8%' }} className="active"> {item.vacuum_pump_quantity}</td>
                    <td style={{ width: '8%' }} className="active"> {item.power}</td>
                    <td style={{ width: '8%' }} className="active"> {item.weight}</td>
                    <td style={{ width: '8%' }} className="active"> {item.price}</td>
                </tr>
            </thead>
            <tbody>{table}</tbody>
        </table>
    </div>)
}

const ParlorMachine = ({cows, machines, chooceMachine}) => {
    const table = machines.map((item, index) => {
        return (<tr key={index}>
            <td style={{ width: '8%' }} className="active"> {item.brand}</td>
            <td style={{ width: '8%' }} className="active"> {item.quantity_cows}</td>
            <td style={{ width: '8%' }} className="active"> {item.quantity_personal}</td>
            <td style={{ width: '8%' }} className="active"> {item.quantity_operator}</td>
            <td style={{ width: '8%' }} className="active"> {item.quantity_apparatus}</td>
            <td style={{ width: '8%' }} className="active"> {item.productivity_per_hour}</td>
            <td style={{ width: '8%' }} className="active"> {item.power_needed}</td>
            <td style={{ width: '8%' }} className="active"> {item.hopper_capacity}</td>
            <td style={{ width: '8%' }} className="active"> {item.length_conveyor}</td>
            <td style={{ width: '8%' }} className="active"> {item.power_drive}</td>
            <td style={{ width: '8%' }} className="active"> {item.vacuum_system_aggregate}</td>
            <td style={{ width: '8%' }} className="active"> {item.aggregate_power}</td>
            <td style={{ width: '8%' }} className="active"> {item.weight}</td>
            <td style={{ width: '8%' }} className="active"> {item.price}</td>
            <td><button onClick={() => chooceMachine(quantityMachine(cows, item.productivity_per_hour), item)} className="btn btn-default">Вибрати машину в кількості {quantityMachine(cows, item.productivity_per_hour)}</button></td>
        </tr>)
    })
    return (<div>
        <table className="table-bordered text-center">
            <thead>
                <tr className="success">
                    <td style={{ height: '50' }} className="width-bl">Марка</td>
                    <td className="width-bl">Кількість корів на яку розрахована установка </td>
                    <td className="width-bl">Кількість майстрів машинного доїння</td>
                    <td className="width-bl">Кількість операторів для керування рухом корів</td>
                    <td className="width-bl">Кількість доїльних апаратів</td>
                    <td className="width-bl">Продуктивність за 1 годину роботи , корів</td>
                    <td className="width-bl">Потужність ,кВт</td>
                    <td className="width-bl">Місткість бункера</td>
                    <td className="width-bl">Довжина шайбового транспортера</td>
                    <td className="width-bl">Потужність привода, кВт</td>
                    <td className="width-bl">Вакуум-силовий агрегат УВУ-60/45 ,шт</td>
                    <td className="width-bl">Потужність агрегату ,кВт</td>
                    <td className="width-bl">Маса</td>
                    <td className="width-bl">Ціна</td>
                </tr>
            </thead>
            <tbody>{table}</tbody>
        </table>
    </div>)
}