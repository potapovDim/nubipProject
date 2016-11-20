import React from 'react'
import {Link} from 'react-router'
import _ from 'lodash'

class SternPerDay extends React.Component {
  calculation = () =>(
    <div className="flex-wrap">
      <div>dsamf;lajfajs;fj;las;</div>
      <div>asflka;lfslaljkgsajj;kgsajkgs</div>
    </div>
  )

  render() {
    let oneCycleStern ={} 
    const {
      params:{typeFeeding, getMilkPerYear, allStern},
      entries:{cow_before_20days, cows, season_stall},
      sternNormCows,
      sternNormCalves
    } = this.props
    const tableCows = sternNormCows.map((value) =>
      (<div className="flex-wrap">
        <div>{value.view_feed}</div>
        <div>{value[getMilkPerYear]} кг</div>
      </div>)
    )
    const tableCalses = sternNormCalves.map((value) =>
      (<div className="flex-wrap">
        <div>{value.view_feed}</div>
        <div>{value[typeFeeding]} кг</div>
      </div>)
    )

    const tableCowsSternPerDay = sternNormCows.map((value) =>
      (<div className="flex-wrap">
        <div>{value.view_feed}</div>
        <div>{value[getMilkPerYear] * cows} кг</div>
      </div>)
    )
    const tableCalsesSternPerDay = sternNormCalves.map((value) =>
      (<div className="flex-wrap">
        <div>{value.view_feed}</div>
        <div>{value[typeFeeding] * cow_before_20days} кг</div>
      </div>)
    )
    const sternPerDayAndPedOneGo = Object.keys(allStern).map(value=>{
      oneCycleStern[value] = (allStern[value] / season_stall / 3).toFixed(2)
      return (<div className="flex-wrap">
        <div>{value}</div>
        <div>{(allStern[value] / season_stall / 3).toFixed(2)} кг</div>
      </div>)
    })
    return (
      <div>
        <div><h2>Кількість корів {cows}</h2></div>
        <div><h2>Кількість телят на відгодівлю {cow_before_20days}</h2></div>
        <div className="row">
          <div className="col-xs-6 col-sm-4">
            <h2>Норми корму для корів (на одну голову)</h2>
            {tableCows}
          </div>
          <div className="col-xs-6 col-sm-4">
            <h2>Норми корму для телят (на одну голову)</h2>
            {tableCalses}
          </div>
          <div className="col-xs-6 col-sm-4">{this.calculation()}</div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-4">
            <h2>Норми корму для корів на день (на все стадо)</h2>
            {tableCowsSternPerDay}
          </div>
          <div className="col-xs-6 col-sm-4">
            <h2>Норми корму для телят на день (на все стадо)</h2>
            {tableCalsesSternPerDay}
          </div>
          <div className="col-xs-6 col-sm-4">{this.calculation()}</div>
        </div>
        <div class="row">

          <div className="col-xs-6 col-sm-4">
            <h2>Потрібно роздати кормів за один цикл годівлі(3 цикла)</h2>
            {sternPerDayAndPedOneGo}
          </div>
        </div>
      </div>
    )
  }
}
export default SternPerDay