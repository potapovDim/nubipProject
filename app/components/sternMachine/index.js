import React from 'react'
import {addSternMachine} from '../../reducers/calculation/stern/actions'
import {SternMachineChoosing} from './chooseSternMachine'
import {EconomicEffect} from './showEconomicForMachine'
export default class SternMachine extends React.Component {

    componentWillMount() {
        const {sternVolume, stallPeriod, machines} = this.props
        const volumeForOneTime = (sternVolume["Об'ем силосу"] + sternVolume["Об'ем солома"] + sternVolume["Об'ем Коренеплоди"]) / (stallPeriod * 3)
        console.log('!!!!!!!', volumeForOneTime)
        const machineByNorm = volumeForOneTime < 25
            ? machines.filter(machine => {
                return 1.1 < machine.work_volume / volumeForOneTime && machine.work_volume / volumeForOneTime <= 1.3
            })
            : machines.filter(machine => {
                return Math.ceil(volumeForOneTime / machine.work_volume) === 2 || Math.ceil(volumeForOneTime / machine.work_volume) === 3
            })
        this.setState({machineByNorm, volumeForOneTime})
    }

    addMachine = (machine, quantity) => {
        this.setState({machine, quantity})
        this
            .props
            .dispatch(addSternMachine(machine, quantity))
    }
    render() {
        const {machineByNorm, volumeForOneTime, machine, quantity} = this.state
        const {sternVolume, stallPeriod, machines ,peymantPerOur} = this.props
        const sternVol = sternVolume["Об'ем силосу"] + sternVolume["Об'ем солома"] + sternVolume["Об'ем Коренеплоди"]
        return (
            <div>
                <h3 className="text-center">Машини які задовольняють роздачу корму в заданому об'ємі {volumeForOneTime.toFixed(2)}</h3>
                <SternMachineChoosing
                    machines={machineByNorm}
                    addMachine={this.addMachine}
                    volumeForOneTime={volumeForOneTime}/> 
                    {(machine && quantity) && <EconomicEffect
                        quantity={quantity}
                        volumePerYear={sternVol}
                        peymantPerOur = {peymantPerOur}
                        persons={quantity}
                        machine={machine}
                        />}
            </div>
        )
    }
}