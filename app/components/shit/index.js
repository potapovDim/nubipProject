import React from 'react'
import {Link} from 'react-router'
import _ from 'lodash'

export  class ShitRemove extends React.Component{
    calculateOneCicle = () =>{
        const {goriz,mount} = this.state
        return (goriz/0.22)+(mount/0.24)
    }
    calculateLineProductivity = ()  => {
       return this.calculateQuantityPerOneMachine()/(3*this.calculateOneCicle())
    }
    calculateQuantityPerOneMachine = () => {
        const {line,long,width} = this.state
        return line*long/width
    }
    stat = {}
    setValue = (event,type) => {
        let _state = this.state
        _state[type]=parseFroat(event.target.value)
        this.setState(_state)
    }
    totalNeedMachine = () => {
        return (this.props.cows+this.state.cow_before20days*0.3)/this.calculateQuantityPerOneMachine()
    }
    totalTimeWorkOneMachine = () => {
        return 3*this.calculateOneCicle()
    }
    totalTimeAllMachineWork = () => {
        return this.totalTimeWorkOneMachine()*this.totalNeedMachine()
    }
    render () {
        return (<div>
        <h3>Кількість тварин в ряді</h3>
        <input placeholder="Кількість твариш" onChange={(e)=>this.setValue(e,'line')}/>
        <h3>Робоча довжина ряду</h3>
        <input placeholder="Довжина" onChange={(e)=>this.setValue(e,'long')}/>
        <h3>Ширина одного стійла</h3>
        <input placeholder="Ширина" onChange={(e)=>this.setValue(e,'width')}/>
        <h3>Довжина горизонтального транспортера</h3>
        <input placeholder="горизонтального" onChange={(e)=>this.setValue(e,'goriz')}/>
        <h3>Довжина похилого транспортера</h3>
        <input placeholder="похилого" onChange={(e)=>this.setValue(e,'mount')}/>
        This is Shitt!!!!!!!!</div>)
    }
} 