import React, {Component} from 'react'
import {InputGroup, Button, FormGroup, FormControl, Alert, OverlayTrigger, Popover} from 'react-bootstrap'
import {Link} from 'react-router'

class Enties extends Component {
  state = {
    alert: false,
    message: '',
    cows: 0,
    fuelPrice: 0,
    energyPrice: 0,
    paymentPrice: 0
  }

  moneyRegEx = /(^[0-9]{1,2})$|(^[0-9]{1,2})([.]{1,1})([0-9]{0,2}$)/
  cowsRegEx = /^[0-9]{3,4}$/

  handleChange = (e, key)=> {
    e.preventDefault()
    this.setState({alert: false})
    let _state = {...this.state}
    _state.alert = false
    _state[key] = +e.target.value
    this.setState(_state)
  }

  handleValidation = (e, key)=> {
    if (key == 'cows') {
      console.log(typeof this.state[key])
      !this.cowsRegEx.test(this.state[key]) &&
      this.setState({
        alert: true,
        message: 'Кількість корів повинна містити лише цілі числа від трьох до чотирьох знаків , без спец символів , чи букв , введіть поле коректно'
      })
    }
    else {
      !this.moneyRegEx.test(this.state[key]) &&
      this.setState({
        alert: true,
        message: "Поля вводу цін на енергетичні носії чи оплату праці повині містити лише цілі числа або десяткові дроби , без спец символів чи букв , введіть поле коректно "
      })
    }
  }
  handleAddQuantity = (key)=> {

    if (this.state.alert)
      this.setState({message: 'Ваші вхідні данні не вірні , введіть будь ласка коректні дані в полі :' + key})
    else if (this.state[key] == 0)this.setState({
      alert: true,
      message: 'Ви намагаєтесь додати пусте поле, введіть будь-ласка валідні дані, для підказки скористайтесть інформацією'
    })
    else
      this.props.addEntry(key, this.state[key]);
  }
  popoverLeft = (
    <Popover id="popover-positioned-left" title="Підказка для введення поля">
     <div> <strong>Кількість корів</strong> кількість корів повинна бути лише ціле число від трьох до чотирьох символів </div>
     <div> <strong>Ціна на пальне</strong> ціна на пальне повинна бути  ціле число або десятковий дріб (приклад 20.14 чи 20) ціла частина не більше двох знаків</div>
     <div> <strong>Ціна на електроенергію</strong> ціна на пальне повинна бути  ціле число або десятковий дріб (приклад 20.14 чи 20) ціла частина не більше двох знаків </div>
     <div> <strong>Заробітня плата</strong> ціна на пальне повинна бути  ціле число або десятковий дріб (приклад 20.14 чи 20) ціла частина не більше двох знаків</div>
    </Popover>
  );
  handleRemoveQuantity = ()=> {
    this.props.resetAll();
  };


  render() {
    return (
      <div>
        {this.state.alert ?
          <p style={{clear:'both'}} className="text-center"><Alert bsStyle="danger">{this.state.message}</Alert>
          </p> : null}
        <form style={{float:"left",width:"40%"}}>
          <InputGroup.Button>
            <OverlayTrigger trigger="click" placement="bottom" overlay={this.popoverLeft}>
              <Button style={{color:"red",width:'600px'}}>Інформація по введення данних наступних полів</Button>
            </OverlayTrigger>
          </InputGroup.Button>
          <FormGroup style={{width:'608px'}}>
            <InputGroup>
              <InputGroup.Addon style={{width:"300px"}}>Кількість корів </InputGroup.Addon>
              <FormControl onBlur={(e)=>this.handleValidation(e,'cows')} onChange={(e)=>this.handleChange(e,'cows')}
                           type="text"/>
              <InputGroup.Button>
                <Button onClick={this.handleAddQuantity.bind(this,'cows')}>Додати</Button>
              </InputGroup.Button>
              <InputGroup.Button>

              </InputGroup.Button>
            </InputGroup>
          </FormGroup>

          <FormGroup style={{width:'600px'}}>
            <InputGroup>
              <InputGroup.Addon style={{width:"300px"}}>Ціна на пальне ГРН / л</InputGroup.Addon>
              <FormControl onBlur={(e)=>this.handleValidation(e,'fuelPrice')}
                           onChange={(e)=>this.handleChange(e,'fuelPrice')} type="text"/>
              <InputGroup.Button>
                <Button onClick={this.handleAddQuantity.bind(this,'fuelPrice')}>Додати</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>

          <FormGroup style={{width:'600px'}}>
            <InputGroup>
              <InputGroup.Addon style={{width:"300px"}}>Ціна на електроенергію ГРН / кВт</InputGroup.Addon>
              <FormControl onBlur={(e)=>this.handleValidation(e,'energyPrice')}
                           onChange={(e)=>this.handleChange(e,'energyPrice')} type="text"/>
              <InputGroup.Button>
                <Button onClick={this.handleAddQuantity.bind(this,'cows')}>Додати</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>

          <FormGroup style={{width:'600px'}}>
            <InputGroup>
              <InputGroup.Addon style={{width:"300px"}}>Заробітня плата ГРН / год</InputGroup.Addon>
              <FormControl onBlur={(e)=>this.handleValidation(e,'paymentPrice')}
                           onChange={(e)=>this.handleChange(e,'paymentPrice')} type="text"/>
              <InputGroup.Button>
                <Button onClick={this.handleAddQuantity.bind(this,'paymentPrice')}>Додати</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>


          <Link to="/tables">
            <button type='button'>Перейти до таблиць</button>
          </Link>
        </form>

        {(this.cowsRegEx.test(this.state.cows) && this.moneyRegEx.test(this.state.energyPrice) && this.moneyRegEx.test(
          this.state.fuelPrice) && this.moneyRegEx.test(
          this.state.paymentPrice)) && (this.state.cows != 0 && this.state.energyPrice != 0 && this.state.fuelPrice != 0 && this.state.paymentPrice != 0) ?
          <form style={{lineHeight: '2.7',float:"right",width:"60%"}}>
            <br/>
            <p>Кількість корів : {this.state.cows}</p>
            <p>Ціна за пальне : {this.state.fuelPrice} грн/л</p>
            <p>Ціна за електроенергію : {this.state.energyPrice} грн/кВт</p>
            <p>Заробітня плата : {this.state.paymentPrice} грн/год</p>
          </form> : null}
      </div>
    );
  }
}

export default Enties