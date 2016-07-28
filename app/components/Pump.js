import React from 'react';
import update from 'react-addons-update'
import {connect} from 'react-redux'


class Pump extends React.Component {
  state = {
    ex: [],
    message: ""
  };

  update() {
    let inputA = this.refs.inputA.value
    let inputB = this.refs.inputB.value
    let inputC = this.refs.inputC.value
    let inputD = this.refs.inputD.value
    let inputE = this.refs.inputE.value
    let {ex} = this.state

    if (inputA != '' && inputB != '' && inputC != '' && inputD != '' && inputE) {
      let x = update(ex, {$push: [{a: inputA, b: inputB, c: inputC, d: inputD, e: inputE}]})
      this.setState({
        ex: x
      })
    }
    else {
      alert('Enter fields')
    }
  }

  remove() {
    let {ex}=this.state
    let newEx = ex.slice(0, ex.length - 1)
    this.setState({
      ex: newEx
    })
  }

  componentDidMount () {
    this.props.dispatch({type:'SET_PAGE_NAME', pageName:'Pump'})
  }

  render() {
    let a = this.state.ex.map(function (item, index) {
      console.log(item.a)
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
        <table className="table table-striped">
          <thead>
          <tr>
            <th>HEADER 1</th>
            <th>HEADER 2</th>
            <th>HEADER 3</th>
            <th>HEADER 4</th>
            <th>HEADER 5</th>
          </tr>
          </thead>
          <tfoot>
          {a}
          </tfoot>
        </table>
        <table className="table table-striped">
          <tbody>
          <tr>
          <td><input ref="inputA" type="text" placeholder="field"/></td>
          <td><input ref="inputB" type="text" placeholder="field"/></td>
          <td><input ref="inputC" type="text" placeholder="field"/></td>
          <td><input ref="inputD" type="text" placeholder="field"/></td>
          <td><input ref="inputE" type="text" placeholder="field"/></td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.update.bind(this)}>Add</button>
        <button onClick={this.remove.bind(this)}>Remove</button>
      </div>
    )
  }
}

export default connect()(Pump)