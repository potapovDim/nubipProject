import React, {Component} from 'react'
import {InputGroup, Button, FormGroup, FormControl, Alert, OverlayTrigger, Popover} from 'react-bootstrap'
import {Link} from 'react-router'

class Enties extends Component {
  state = {
    alert: false,
    prompt: false,
    message: '',
    cows: 0,
    fuelPrice: 0,
    energyPrice: 0,
    paymentPrice: 0
  }
  moneyRegEx = /(^[0-9]{1,3})([.]{0,1})([0-9]{0,2}$)/
  cowsRegEx = /^[0-9]+$/

  handleChange = (e, key)=> {
    this.setState({alert: false})
    let _state = {...this.state}
    _state.alert = false
    _state[key] = +e.target.value
    if (key == 'cows') {
      console.log(typeof _state[key])
      this.cowsRegEx.test(_state[key]) ? this.setState(_state) :
        this.setState({
          alert: true,
          message: 'Кількість корів повинна містити лише цілі числа , без спец символів , чи букв , введіть поле коректно'
        })
    }
    else {
      this.moneyRegEx.test(_state[key]) ? this.setState(_state) :
        this.setState({
          alert: true,
          message: "Поля вводу цін на енергетичні носії чи оплату праці повині містити лише цілі числа або десяткові дроби , без спец символів чи букв , введіть поле коректно "
        })
    }
  }
  handleAddQuantiy = (key)=> {
    this.state.alert ? this.setState(
      {message: 'Ваші вхідні данні не вірні , введіть будь ласка коректні дані в полі :' + key}) : this.props.addEntry(
      key, this.state[key]);
  }
  popoverLeft = (
    <Popover id="popover-positioned-left" title="Popover left">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );
  handleRemoveQuantity = ()=> {
    this.props.resetAll();
  };


  render() {

    return (
      <div>
        {this.state.alert ?
          <p style={{clear:'both'}} className="text-center"><Alert bsStyle="danger">{this.state.message}</Alert></p> : null}
        <form style={{float:"left",width:"40%"}}>
          <FormGroup style={{width:'600px'}}>
            <InputGroup>
              <InputGroup.Addon style={{width:"300px"}}>Кількість корів </InputGroup.Addon>
              <FormControl onChange={(e)=>this.handleChange(e,'cows')} type="text"/>
              <InputGroup.Button>
                <Button onClick={this.handleAddQuantiy.bind(this,'cows')}>Додати</Button>
              </InputGroup.Button>
              <InputGroup.Button>
                <OverlayTrigger trigger="click" placement="left" overlay={this.popoverLeft}>
                  <Button>Інформація</Button>
                </OverlayTrigger>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>

          <FormGroup style={{width:'600px'}}>
            <InputGroup>
              <InputGroup.Addon style={{width:"300px"}}>Ціна на пальне ГРН / л</InputGroup.Addon>
              <FormControl onChange={(e)=>this.handleChange(e,'fuelPrice')} type="text"/>
              <InputGroup.Button>
                <Button onClick={this.handleAddQuantiy.bind(this,'cows')}>Додати</Button>
              </InputGroup.Button>
              <InputGroup.Button>
                <OverlayTrigger trigger="click" placement="left" overlay={this.popoverLeft}>
                  <Button>Інформація</Button>
                </OverlayTrigger>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>

          <FormGroup style={{width:'600px'}}>
            <InputGroup>
              <InputGroup.Addon style={{width:"300px"}}>Ціна на електроенергію ГРН / кВт</InputGroup.Addon>
              <FormControl onChange={(e)=>this.handleChange(e,'energyPrice')} type="text"/>
              <InputGroup.Button>
                <Button onClick={this.handleAddQuantiy.bind(this,'cows')}>Додати</Button>
              </InputGroup.Button>
              <InputGroup.Button>
                <OverlayTrigger trigger="click" placement="left" overlay={this.popoverLeft}>
                  <Button>Інформація</Button>
                </OverlayTrigger>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>

          <FormGroup style={{width:'600px'}}>
            <InputGroup>
              <InputGroup.Addon style={{width:"300px"}}>Заробітня плата ГРН / год</InputGroup.Addon>
              <FormControl onChange={(e)=>this.handleChange(e,'paymentPrice')} type="text"/>
              <InputGroup.Button>
                <Button onClick={this.handleAddQuantiy.bind(this,'cows')}>Додати</Button>
              </InputGroup.Button>
              <InputGroup.Button>
                <OverlayTrigger trigger="click" placement="left" overlay={this.popoverLeft}>
                  <Button>Інформація</Button>
                </OverlayTrigger>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>


          <Link to="/tables">
            <button type='button'>Перейти до таблиць</button>
          </Link>
        </form>

      {this.state.cows!=0&&this.state.fuelPrice!=0&&this.state.energyPrice!=0&&this.state.paymentPrice!=0? <form style={{lineHeight: '2.7',float:"right",width:"60%"}}>
          <p>Кількість корів        : {this.state.cows}</p>
          <p>Ціна за пальне         : {this.state.fuelPrice} грн/л</p>
          <p>Ціна за електроенергію : {this.state.energyPrice} грн/кВт</p>
          <p>Заробітня плата        : {this.state.paymentPrice} грн/год</p>
        </form>:null}
      </div>
    );
  }
}

export default Enties