import React from 'react'


export default class SternMachine extends React.Component {

    componentWillMount(){
        const {sternVolume, stallPeriod,machines} = this.props
        const volumeForOneTime = (sternVolume["Об'ем силосу"]+ sternVolume["Об'ем солома"] + sternVolume["Об'ем Коренеплоди"]) / stallPeriod /3
        console.log(machines)
        console.log(volumeForOneTime)
        const machineByNorm = machines.filter(machine => {
            console.log(machine.work_volume%volumeForOneTime <= 3 && machine.work_volume%volumeForOneTime !== machine.work_volume)
            return (machine.work_volume%volumeForOneTime <= 1 && machine.work_volume%volumeForOneTime !== machine.work_volume)
        })
        console.log(machineByNorm)
    }

    render(){
        return(
           <div>hellloodosadoaskldkas;kf;a;k</div>     
        )
    }
}