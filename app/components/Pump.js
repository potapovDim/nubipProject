import React from 'react';
import update from 'react-addons-update'
import {connect} from 'react-redux'


class Pump extends React.Component {
  state = {
    pumps: [],
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    alert: ''
  };

  update() {
    let inputA = this.refs.inputA.value
    let inputB = this.refs.inputB.value
    let inputC = this.refs.inputC.value
    let inputD = this.refs.inputD.value
    let inputE = this.refs.inputE.value
    let {pumps} = this.state

    if (inputA != '' && inputB != '' && inputC != '' && inputD != '' && inputE) {
      let x = update(pumps, {$push: [{a: inputA, b: inputB, c: inputC, d: inputD, e: inputE}]})
      this.setState({
        pumps: x
      })
    }
    else {
      alert('Enter fields')
    }
  }

  pushToState() {
    this.props.dispatch({type: 'FORM_PUMP_TABLE', pumpTable: this.state.pumps})
  }

  remove() {
    let {pumps}=this.state
    let newEx = pumps.slice(0, pumps.length - 1)
    this.setState({
      pumps: newEx
    })
  }

  componentDidMount() {
    this.props.dispatch({type: 'SET_PAGE_NAME', pageName: 'Pump'})
  }

  handleInput = (e, key) => {
    console.log(this.state.input1)
    e.preventDefault();
    let _state = {...this.state}
    _state[key] = e.target.value.trim('')
    this.setState(_state)

  }

  handleOnBlur = (key)=> {
    let _state = {...this.state}
    console.log(_state.alert + "this i alert")
    console.log(_state[key])
    if (/([a-z\,\s!@%'"а-яА-ЯA-Z]+)/.test(_state[key])) {
      _state[key] = ''
      _state.alert = 'IDI NA HUI'
      this.setState(
        _state
      )
    }
    else {
      _state.alert = ''
      this.setState(_state)
    }
  }

  render() {
    console.log(this.state.alert)
    const {input1, input2, input3, input4, input5, alert} = this.state
    let a = this.state.pumps.map(function (item, index) {
      return (
        <tr key={index}>
          <td className="active">Field {item.a}</td>
          <td className="active">Field {item.b}</td>
          <td className="active">Field {item.c}</td>
          <td className="active">Field {item.d}</td>
          <td className="active">Field {item.e}</td>
        </tr>
      )
    });
    return (
      <div>
        {alert ? <div className="alert alert-danger" role="alert">{alert}</div> : null}
        <table className="table table-hover">
          <thead>
          <tr>
            <th>HEADER 1</th>
            <th>HEADER 2</th>
            <th>HEADER 3</th>
            <th>HEADER 4</th>
            <th>HEADER 5</th>
          </tr>
          </thead>
          <tbody>
          {a}
          <tr>
            <td><input value={input1}
                       onChange={(e)=>this.handleInput(e,'input1')}
                       onBlur={()=>this.handleOnBlur('input1')}
                       className="form-control" ref="inputA" type="text" placeholder="field"/></td>
            <td><input value={input2}
                       onChange={(e)=>this.handleInput(e,'input2')}
                       onBlur={()=>this.handleOnBlur('input2')}
                       className="form-control" ref="inputB" type="text" placeholder="field"/></td>
            <td><input value={input3}
                       onChange={(e)=>this.handleInput(e,'input3')}
                       onBlur={()=>this.handleOnBlur('input3')}
                       className="form-control" ref="inputC" type="text" placeholder="field"/></td>
            <td><input value={input4}
                       onChange={(e)=>this.handleInput(e,'input4')}
                       onBlur={()=>this.handleOnBlur('input4')}
                       className="form-control" ref="inputD" type="text" placeholder="field"/></td>
            <td><input value={input5}
                       onChange={(e)=>this.handleInput(e,'input5')}
                       onBlur={()=>this.handleOnBlur('input5')}
                       className="form-control" ref="inputE" type="text" placeholder="field"/></td>
          </tr>
          </tbody>
        </table>
        <div className="btn-group">
          <button type='button' className="btn btn-success btn-group" onClick={this.update.bind(this)}>Add</button>
          <button type='button' className="btn btn-danger " onClick={this.remove.bind(this)}>Remove</button>
          <button type='button' className="btn btn-primary " onClick={this.pushToState.bind(this)}>Form table</button>
        </div>
      </div>
    )
  }
}

export default connect()(Pump)