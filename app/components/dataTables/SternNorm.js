import React from 'react'
import update from 'react-addons-update'


class SternNorm extends React.Component {
  state = {
    sternNorms: [
      {
        name: 'firstName',
        norm1: '1.1',
        norm2: '1.1'
      },
      {
        name: 'firstName',
        norm1: '1.1',
        norm2: '1.1'
      },
      {
        name: 'firstName',
        norm1: '1.1',
        norm2: '1.1'
      }
    ],
    open: false,
    alert: '',
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
  }
  componentWillMount(){
    this.props.setTableValue('sternNorms', this.state.sternNorms)
  }

  update() {
    let inputA = this.refs.inputA.value
    let inputB = this.refs.inputB.value
    let inputC = this.refs.inputC.value
    let {sternNorms} = this.state

    if (inputA != '' && inputB != '' && inputC != '') {
      let norms = update(sternNorms, {$push: [{a: inputA, b: inputB, c: inputC}]})
      this.setState({
        sternNorms: norms
      })
      this.props.setTableValue('sternNorms', norms)
    }
    else {
      alert('Enter fields')
    }
  }

  pushToState() {
    this.props.setTableValue('sternNorms', this.state.sternNorms)
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
    if (key != 'input1') {
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

  remove() {
    let {sternNorms}=this.state
    let remSter = sternNorms.slice(0, sternNorms.length - 1)
    this.setState({
      sternNorms: remSter
    })
    this.props.setTableValue('sternNorms', remSter)
  }

  openCloseTable = ()=> {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    let {alert, input1, input2, input3}=this.state
    let sternArr = this.state.sternNorms.map(function (item, index) {
      return (
        <tr key={index}>
          <td className="active">Field {item.name}</td>
          <td className="active">Fielt {item.norm1}</td>
          <td className="active">Field {item.norm2}</td>
        </tr>
      )
    })
    return (
      <div>
        {alert ? <div className="alert alert-danger" role="alert">{alert}</div> : null}
        <button type="button" className="btn btn-default" onClick={this.openCloseTable}>Onen/Close Pump table</button>
        {this.state.open ?
          <div>
            <table className="table table-hover">
              <thead>
              <tr>
                <th>HEADER 1</th>
                <th>HEADER 2</th>
                <th>HEADER 3</th>
              </tr>
              </thead>
              <tbody>
              {sternArr}
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
              </tr>
              </tbody>
            </table>
            <div className="btn-group">
              <button type='button' className="btn btn-success btn-group" onClick={this.update.bind(this)}>Add</button>
              <button type='button' className="btn btn-danger " onClick={this.remove.bind(this)}>Remove</button>
              <button type='button' className="btn btn-primary " onClick={this.pushToState.bind(this)}>Form table
              </button>
            </div>
          </div> :
          <div>Table is hided</div>}
      </div>
    )
  }
}


export default SternNorm