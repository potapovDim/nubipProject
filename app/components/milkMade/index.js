import React,{Component} from 'react'
import {ChoosedMilkMachine} from './choosingMilkMachine'
import {addMilkMachine} from '../../reducers/milking/actions'

 class MilkCalc extends Component{
    addMilkMachine = (quantity,machine) => {
        this.props.dispatch(addMilkMachine(quantity,machine))
    }
    
    render () {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
        return(<ChoosedMilkMachine {...this.props} chooceMachine={this.addMilkMachine}/>)
    }
}

export default MilkCalc
