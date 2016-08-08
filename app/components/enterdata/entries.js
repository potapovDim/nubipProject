import React,{Component} from 'react'
import {InputGroup,Button,FormGroup,FormControl} from 'react-bootstrap'

class Enties extends Component{
  state={
    cows: 0,
    fuelPrice:0,
    energyPrice:0,
    paymentPrice:0
  }


  paymentRegEx=/(^[0-9]{1,3})([.]{0,1})([0-9]{0,2}$)/
  cowsRegEx=/^[0-9]+$/

  getValidationState=()=> {
    let entrie = this.state.value;
    if (this.cowsRegEx.test(entrie)) return 'success';
    else if (this.cowsRegEx.test(entrie)==false&&entrie.length!=0) return 'error';
  }

  handleChange=(e,key)=> {
    let _state={...this.state}
    _state[key]=e.target.value
    this.setState(_state);
  }
  handleAddQuantiy=()=>{
      let _state=this.state
      this.props.addEntry(_state.value.match(/[0-9]+/)[0].substr(0,4));
  }

  handleRemoveQuantity=()=>{
    this.props.resetAll();
  }
  render() {
    console.log(this.state)
    return (
      <form>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon style={{width:"200px"}}>Cows    </InputGroup.Addon>
            <FormControl onChange={(e)=>this.handleChange(e,'cows')} type="text" />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon style={{width:"200px"}}>Fuel price UAH / liter</InputGroup.Addon>
            <FormControl onChange={(e)=>this.handleChange(e,'fuelPrice')} type="text" />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon style={{width:"200px"}} >Energy prise UAH / kW</InputGroup.Addon>
            <FormControl onChange={(e)=>this.handleChange(e,'energyPrice')} type="text" />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon style={{width:"200px"}} >Payment price UAH / hour</InputGroup.Addon>
            <FormControl onChange={(e)=>this.handleChange(e,'paymentPrice')} type="text" />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <button type='button' onClick={this.show}>adsafsa</button>
      </form>
    );
  }
}

export default Enties