import React from 'react';
import update from 'react-addons-update'


class Pump extends React.Component {
  state = {
    input1: {
      value: '',
      name: 'Header 1'
    },
    input2: {
      value: '',
      name: 'Header 2'
    },
    input3: {
      value: '',
      name: 'Header 3'
    },
    input4: {
      value: '',
      name: 'Header 4'
    },
    input5: {
      value: '',
      name: 'Header 5'
    },
    alert: '',
    pumps: [],
    openTable: false
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
      this.props.setTableValue('pumpTable', x)
    }
    else {
      alert('Enter fields')
    }
  }

  pushToState() {
    this.props.setTableValue('pumpTable', this.state.pumps)
  }

  remove() {
    let {pumps}=this.state
    let remPum = pumps.slice(0, pumps.length - 1)
    this.setState({
      pumps: remPum
    })
    console.log(pumps)
    this.props.setTableValue('pumpTable', remPum)
  }

  componentWillMount() {
    this.props.setTableValue('pumpTable', this.state.pumps)
    this.props.dispatch({type: 'SET_PAGE_NAME', pageName: 'Helper tables'})
  }

  handleInput = (e, key) => {
    e.preventDefault();
    let _state = {...this.state}
    if (_state.alert != '') {
      return
    }
    else {
      _state[key].value = e.target.value.trim('')
      this.setState(_state)
    }
  }

  handleOnBlur = (key)=> {

    let _state = {...this.state}

    if (key == 'input1') {
      if (/([a-z\,\s!@%'"а-яА-ЯA-Z]+)/.test(_state[key].value)) {
        _state.alert = `'IDI NA HUI in '${this.state[key].name}`
        this.setState(
          _state
        )
      }
      else {
        _state.alert = ''
        this.setState(_state)
      }
    }
  }
  openCloseTable = ()=> {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {input1, input2, input3, input4, input5, alert} = this.state
    let pumpArr = this.state.pumps.map(function (item, index) {
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
        <button type="button" className="btn btn-default" onClick={this.openCloseTable}>Onen/Close Pump table</button>
        {this.state.open ? <div>
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
            {pumpArr}
            <tr>
              <td><input value={input1.value}
                         onChange={(e)=>this.handleInput(e,'input1')}
                         onBlur={()=>this.handleOnBlur('input1')}
                         className="form-control" ref="inputA" type="text" placeholder="field"/></td>
              <td><input value={input2.value}
                         onChange={(e)=>this.handleInput(e,'input2')}
                         onBlur={()=>this.handleOnBlur('input2')}
                         className="form-control" ref="inputB" type="text" placeholder="field"/></td>
              <td><input value={input3.value}
                         onChange={(e)=>this.handleInput(e,'input3')}
                         onBlur={()=>this.handleOnBlur('input3')}
                         className="form-control" ref="inputC" type="text" placeholder="field"/></td>
              <td><input value={input4.value}
                         onChange={(e)=>this.handleInput(e,'input4')}
                         onBlur={()=>this.handleOnBlur('input4')}
                         className="form-control" ref="inputD" type="text" placeholder="field"/></td>
              <td><input value={input5.value}
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
        </div> : <div>Table is hided</div>}
      </div>
    )
  }
}


export default Pump