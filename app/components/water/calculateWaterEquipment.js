import React from 'react'
import _ from 'lodash'
class WaterEquipment extends React.Component {
  state = {
    height: 1
  }

  assertHeightValue = event => {
    /[\d]$/.test(event.target.value) ? this.setState({
      height: _.min([event.target.value || 0, 50])
    }) :
      this.setState({height: 0})
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="Height">Для розрахунку водонапірного обладнання необхідно ввести значення
          висоти підйому води від джерела(водойми) до нагнітальної башти,максимум 50 метрів</label>
        <input onChange={this.assertHeightValue} className="form-control" id="Height" value={this.state.height}/>
        <div className="bg-primary">{(this.state.height * 9.807).toFixed(2) }
          кПа , чи {(this.state.height * 9.807 / 1000).toFixed(2) } мПа тиск всмоктування
        </div>
        <div className="bg-primary">{(this.state.height * 4.45).toFixed(2) } кПа
          ,чи {(this.state.height * 4.45 / 1000).toFixed(2) } мПа тиск на втрати на опори в
          трубопроводах
        </div>
        <div className="bg-primary">{((this.state.height * 4.45) + (this.state.height * 9.807 )).toFixed(2) } кПа
          ,чи {((this.state.height * 4.45 / 1000) + (this.state.height * 9.807 / 1000)).toFixed(2) } мПа повний тиск в
          ситсемі
        </div>
      </div>)
  }
}

export default WaterEquipment