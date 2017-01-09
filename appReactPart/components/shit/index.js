import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'


//  shit_norms: {
//     cows: 55,
//     cow_before_20days: 7.5,
//     calves: 14
//   },
//   litter_norm: {cows: 4, cow_before_20days: 5, calves: 5}

export class ShitRemove extends React.Component {

    state = { lineQuantity: null, long: null, width: null }
    setValue = (event, type) => {
        let _state = this.state
        _state[type] = parseFloat(event.target.value)
        this.setState(_state)
    }



    calculateOneCicle = () => { //мінімальна тривалість одного циклу
        const {goriz, mount} = this.state
        return (goriz / 0.22) + (mount / 0.24)
    }
    calculateLineProductivity = () => { //Продуктивність технологічної лінії
        return this.calculateQuantityPerOneMachine() * this.shitPerDay() / (3 * this.calculateOneCicle())
    }
    calculateQuantityPerOneMachine = () => { //кількість тварин що обслуговуєтсья одніїє машиною
        const {lineQuantity, long, width} = this.state
        return lineQuantity * long / width
    }
    totalNeedMachine = () => { //Загальна потреба в стебкових транспортехар
        console.log(this.props.cows,this.props.cow_before_20days)
        return (this.props.cows + this.props.cow_before_20days * 0.3) / this.calculateQuantityPerOneMachine()
    }
    totalTimeWorkOneMachine = () => { //час роботи машини протягом доби
        console.log()
        return 3 * this.calculateOneCicle()
    }
    totalTimeAllMachineWork = () => { //Загальна тривалість технологічного процесу для всіх машин
        console.log(this.totalTimeWorkOneMachine())
        console.log(this.totalNeedMachine())
        return this.totalTimeWorkOneMachine() * this.totalNeedMachine()
    }
    shitPerDay = () => {
        return 55 + 4
    }
    render() {
        const {lineQuantity, long, width} = this.state
        return (<div>
            <h3>Кількість рядів</h3>
            <input placeholder="Кількість рядів" onChange={(e) => this.setValue(e, 'lineQuantity')} />
            <h3>Робоча довжина ряду</h3>
            <input placeholder="Довжина" onChange={(e) => this.setValue(e, 'long')} />
            <h3>Ширина одного стійла</h3>
            <input placeholder="Ширина" onChange={(e) => this.setValue(e, 'width')} />
            <h3>Довжина горизонтального транспортера</h3>
            <input placeholder="горизонтального" onChange={(e) => this.setValue(e, 'goriz')} />
            <h3>Довжина похилого транспортера</h3>
            <input placeholder="похилого" onChange={(e) => this.setValue(e, 'mount')} />
            {lineQuantity && long && width && <div>
                <div>Мінімальна тривалість одного циклу :{this.calculateOneCicle().toFixed(2)} секунд</div>
                <div>Продуктивність технологічної лінії :{this.calculateLineProductivity().toFixed(2)} кг/с</div>
                <div>Кількість тварин, що обслуговуєтсья однією лінією :{this.calculateQuantityPerOneMachine().toFixed(0)} голів</div>
                <div>Час роботи машини протягом доби :{this.totalTimeWorkOneMachine().toFixed(2)} с</div>
                <div>Загальна тривалість технологічного процесу :{this.totalTimeAllMachineWork().toFixed(2)} с</div>
                <div>Загальна потреба в скребкових транспортерах :{this.totalNeedMachine().toFixed(0)} шт</div>
                <Link to="/stern"><button className="btn btn-default">До кормоприготування</button></Link>
                </div>
                
            }
            </div>)
    }
} 