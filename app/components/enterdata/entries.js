import React,{Component} from 'react'
import {FormControl,ControlLabel,HelpBlock,FormGroup,Button} from 'react-bootstrap'

class Enties extends Component{
  state={
      value:''
  }

  getValidationState=()=> {
    let entrie = this.state.value;
    if (/^[0-9]+$/.test(entrie)) return 'success';
    else if (/^[0-9]+$/.test(entrie)==false&&entrie.length!=0) return 'error';
  }
  handleChange=(e)=> {
    this.setState({ value: e.target.value });
  }
  handleAddQuantiy=()=>{
      let _state=this.state
      this.props.addCows(_state.value.match(/[0-9]+/)[0].substr(0,4));
  }
  handleRemoveQuantity=()=>{
    this.props.resetAll();
  }
  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Enter cows quantity</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Quantity should exist just numbers,from string will take just numbers</HelpBlock>
          <Button onClick={this.handleAddQuantiy}>Add quantity</Button>
          <Button onClick={this.handleRemoveQuantity}>Remove quantity</Button>
        </FormGroup>
      </form>
    );
  }
}

export default Enties