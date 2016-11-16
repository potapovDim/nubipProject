import React from 'react'
import _ from 'lodash'
class WaterEquipment extends React.Component {
  state = {
    height: 1
  }

  assertHeightValue = event => {
    /[\d]$/.test(event.target.value) ? this.setState({
      height: _.min([event.target.value || 1, 50]),
      heightPressure: (_.min([event.target.value || 1, 50]) * 9.807 / 1000).toFixed(2),
      lostPressure: (this.state.height * 3.45 / 1000).toFixed(2),
      fullNeedPressure: ((_.min([event.target.value || 1, 50]) * 9.807 / 1000) +
      (_.min([event.target.value || 1, 50]) * 3.45 / 1000)).toFixed(2)

    }) :
      this.setState({height: 1})
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="Height">Для розрахунку водонапірного обладнання необхідно ввести значення
          висоти підйому води від джерела(водойми) до нагнітальної башти,максимум 50 метрів</label>
        <input onChange={this.assertHeightValue} className="form-control" id="Height" value={this.state.height}/>
        <div className="bg-primary">{this.state.heightPressure} мПа тиск всмоктування</div>
        <div className="bg-primary">{this.state.lostPressure} мПа тиск на втрати на опори втрубопроводах</div>
        <div className="bg-primary">{this.state.fullNeedPressure} мПа повний тиск в ситсемі</div>
      </div>)
  }
}

export default WaterEquipment