import React,{Component} from 'react'
import {FormControl,ControlLabel,HelpBlock,FormGroup} from 'react-bootstrap'

class Enties extends Component{
  state={
      value: ''
  }

  getValidationState=()=> {
    const entrie = this.state.value;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    //TODO прикрутити валідацію
  }
  handleChange=(e)=> {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}
export default Enties