import React from 'react'
import { addSternMachine } from '../../reducers/calculation/stern/actions'
import { SternMachineChoosing } from './chooseSternMachine'
import { EconomicEffect } from './showEconomicForMachine'
import {
    InputGroup,
    FormControl,
    Checkbox
} from 'react-bootstrap'



export default class SternMachine extends React.Component {
    state = {
        machineByNorm: null,
        volumeForOneTime: null,
        machine: null,
        quantity: null,
        sternGivenType: null
    }
    calculateValuePerOneTime = (sternGivenType) => {
        const {sternVolume, stallPeriod, machines} = this.props
        const volumeForOneTime = sternGivenType === 'fullvolume' ?
            (sternVolume["Об'ем силосу"] + sternVolume["Об'ем солома"] + sternVolume["Об'ем Коренеплоди"]) / (stallPeriod * 3) :
            ((sternVolume["Об'ем силосу"] + sternVolume["Об'ем солома"] + sternVolume["Об'ем Коренеплоди"])) * 0.3 / (stallPeriod * 3)
        const machineByNorm = volumeForOneTime < 25
            ? machines.filter(machine => {
                return 1.1 < machine.work_volume / volumeForOneTime && machine.work_volume / volumeForOneTime <= 1.3
            })
            : machines.filter(machine => {
                console.log(machine)
                return Math.ceil(volumeForOneTime / machine.work_volume) >=2 || Math.ceil(volumeForOneTime / machine.work_volume) <= 8
            })
        this.setState({ machineByNorm, volumeForOneTime, sternGivenType })
    }

    addMachine = (machine, quantity) => {
        this.setState({ machine, quantity })
        this
            .props
            .dispatch(addSternMachine(machine, quantity))
    }
    render() {
        const {machineByNorm, volumeForOneTime, machine, quantity} = this.state
        const {sternVolume, stallPeriod, machines, peymantPerOur, fuelPrice} = this.props
        const sternVol = sternVolume["Об'ем силосу"] + sternVolume["Об'ем солома"] + sternVolume["Об'ем Коренеплоди"]
        return (
            <div>
                <div>
                    Роздавання кормів може здійснюватися по зміщеним графіком (навантаження на машину зростає на 35-50%)
                        <div><Checkbox inline onChange={() => this.calculateValuePerOneTime('partlyvolume')}
                        disabled={this.state.sternGivenType !== null}>
                        За зміщеним графіком
                        </Checkbox>
                        <Checkbox inline onChange={() => this.calculateValuePerOneTime('fullvolume')}
                            disabled={this.state.sternGivenType !== null}>
                            Одночасна видача
                        </Checkbox>
                    </div>
                </div>
                {this.state.sternGivenType &&
                    <div>
                        <h3 className="text-center">Машини які задовольняють роздачу корму в заданому об'ємі {volumeForOneTime.toFixed(2)}</h3>
                        <SternMachineChoosing
                            machines={machineByNorm}
                            addMachine={this.addMachine}
                            volumeForOneTime={volumeForOneTime} />
                        {(machine && quantity) && <EconomicEffect
                            quantity={quantity}
                            volumePerYear={sternVol}
                            peymantPerOur={peymantPerOur}
                            persons={quantity}
                            machine={machine}
                            fuelPrice={fuelPrice}
                            />
                        }
                    </div>
                }
            </div >
        )
    }
}