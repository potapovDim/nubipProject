import React,{Component} from 'react'
import {InputGroup,Button,FormGroup,FormControl,Alert,OverlayTrigger,Popover} from 'react-bootstrap'

class Enties extends Component{
  state={
    alert:false,
    cows: 0,
    fuelPrice:0,
    energyPrice:0,
    paymentPrice:0
  }


  paymentRegEx=/(^[0-9]{1,3})([.]{0,1})([0-9]{0,2}$)/
  cowsRegEx=/^[0-9]+$/

  handleChange=(e,key)=> {
    this.setState({alert:false})
    let _state={...this.state}
    _state.alert=false
    _state[key]=e.target.value
    if(key=='cows'){
      this.cowsRegEx.test(_state[key])?this.setState(_state):this.setState({alert:true})
    }
    else {
      this.paymentRegEx.test(_state[key])?this.setState(_state):this.setState({alert:true})
    }
  }
  handleAddQuantiy=()=>{
      let _state=this.state
      this.props.addEntry(_state.value.match(/[0-9]+/)[0].substr(0,4));
  }
  popoverLeft = (
    <Popover id="popover-positioned-left" title="Popover left">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );
  handleRemoveQuantity=()=>{
    this.props.resetAll();
  }
  render() {
    console.log(this.state)
    return (
      <form>
        {this.state.alert?<Alert  bsStyle="danger" >You enter not valid data , watch info for field at the right side of field</Alert>:null}
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon style={{width:"200px"}}>Cows    </InputGroup.Addon>
            <FormControl onChange={(e)=>this.handleChange(e,'cows')} type="text" />
            <InputGroup.Button>
              <OverlayTrigger trigger="click" placement="left" overlay={this.popoverLeft}>
                <Button>INFO</Button>
              </OverlayTrigger>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon style={{width:"200px"}}>Fuel price UAH / liter</InputGroup.Addon>
            <FormControl onChange={(e)=>this.handleChange(e,'fuelPrice')} type="text" />
            <InputGroup.Button>
              <OverlayTrigger trigger="click" placement="left" overlay={this.popoverLeft}>
                <Button>INFO</Button>
              </OverlayTrigger>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon style={{width:"200px"}} >Energy prise UAH / kW</InputGroup.Addon>
            <FormControl onChange={(e)=>this.handleChange(e,'energyPrice')} type="text" />
            <InputGroup.Button>
              <OverlayTrigger trigger="click" placement="left" overlay={this.popoverLeft}>
                <Button>INFO</Button>
              </OverlayTrigger>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon style={{width:"200px"}} >Payment price UAH / hour</InputGroup.Addon>
            <FormControl onChange={(e)=>this.handleChange(e,'paymentPrice')} type="text" />
            <InputGroup.Button>
              <OverlayTrigger trigger="click" placement="left" overlay={this.popoverLeft}>
                <Button>INFO</Button>
              </OverlayTrigger>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <button type='button' onClick={this.show}>adsafsa</button>
      </form>
    );
  }
}

export default Enties