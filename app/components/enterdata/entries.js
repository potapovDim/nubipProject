import React, {Component} from 'react'
import {InputGroup, Button, FormGroup, FormControl, Alert, OverlayTrigger, Popover, ProgressBar} from 'react-bootstrap'
import {Link} from 'react-router'
import LoadingButton from '../helpers/loadingButton'
import InformationButton from '../helpers/informationButton'
import {connect} from 'react-redux'

export class Entries extends Component {
  state = {
    alert: false,
    alertSuccess: false,
    showFarm: false,
    message: ''
  }

  moneyRegEx = /(^[0-9]{1,2})$|(^[0-9]{1,2})([.]{1,1})([0-9]{0,2}$)/
  cowsRegEx = /^[0-9]{3,4}$/

  handleChange = (e, key)=> {
    e.preventDefault()
    this.setState({alert: false})
    console.log(this.state.showFarm)
    let _state = {...this.state}
    _state.alert = false
    _state.showFarm = false
    _state[key] = +e.target.value
    this.setState(_state)
  }

  handleValidation = (e, key)=> {
    if (key == 'cows') {
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

  message = {
    name: 'Інформація по введенню полів ',
    header: 'Поля вводу кількості корів та оплат',
    message: `Кількість корів повинна містити чила від 3 до 4 знаків (лише цілі числа)
             `
  }
  initData = () => {
    const {dispatch} = this.props
    if (this.state.pregrant_cows === null) {
      this.handleCalculateFarm()
      const quantity = {
        cows: this.state.cows,
        fuelPrice: this.state.fuelPrice,
        energyPrice: this.state.energyPrice,
        paymentPrice: this.state.paymentPrice,
        pregrant_cows: this.state.pregrant_cows,
        dry_cows: this.state.dry_cows,
        ill_cows: this.state.ill_cows,
        cow_before_20days: this.state.cow_before_20days
      }
      dispatch(addEntry(quantity))
    } else {
      const quantity = {
        cows: this.state.cows,
        fuelPrice: this.state.fuelPrice,
        energyPrice: this.state.energyPrice,
        paymentPrice: this.state.paymentPrice,
        pregrant_cows: this.state.pregrant_cows,
        dry_cows: this.state.dry_cows,
        ill_cows: this.state.ill_cows,
        cow_before_20days: this.state.cow_before_20days
      }
      dispatch(addEntry(quantity))
    }
  }

  handleCalculateFarm = ()=> {
    let _state = {...this.state}
    if (_state.cows === 0) {
      this.setState({
        alert: true,
        message: 'Ви не заповнили основні поля , для вводу скористайтесь підказкою (Інформація полів вводу данних)',
        showFarm: false
      })
    } else {
      _state.pregrant_cows = parseInt(_state.cows * 0.1)
      _state.dry_cows = parseInt(_state.cows * 0.1)
      _state.ill_cows = parseInt(_state.cows * 0.1)
      _state.cow_before_20days = parseInt(_state.cows * 0.9);
      _state.showFarm = true
      this.setState(_state)
    }
  }

  handleAddQuantity = ()=> {
    if ((this.cowsRegEx.test(this.state.cows) && this.moneyRegEx.test(this.state.energyPrice) && this.moneyRegEx.test(
        this.state.fuelPrice) && this.moneyRegEx.test(
        this.state.paymentPrice)) && (this.state.cows != 0 && this.state.energyPrice != 0 && this.state.fuelPrice != 0 && this.state.paymentPrice != 0)) {
      this.props.addEntry({
        cows: this.state.cows,
        fuelPrice: this.state.fuelPrice,
        energyPrice: this.state.energyPrice,
        paymentPrice: this.state.paymentPrice
      })
      this.setState({alertSuccess: true})
    }
    else
      this.setState({
        alert: true,
        message: 'Ви намагаєтесь додати пусте поле, введіть будь-ласка валідні дані, для підказки скористайтесть інформацією'
      })
  }
  popoverLeft = (
    <Popover id="popover-positioned-left" title="Підказка для введення поля">
      <div><strong>Кількість корів</strong> кількість корів повинна бути лише ціле число від трьох до чотирьох символів
      </div>
      <div><strong>Ціна на пальне</strong> ціна на пальне повинна бути ціле число або десятковий дріб (приклад 20.14 чи
        20) ціла частина не більше двох знаків
      </div>
      <div><strong>Ціна на електроенергію</strong> ціна на пальне повинна бути ціле число або десятковий дріб (приклад
        20.14 чи 20) ціла частина не більше двох знаків
      </div>
      <div><strong>Заробітня плата</strong> ціна на пальне повинна бути ціле число або десятковий дріб (приклад 20.14 чи
        20) ціла частина не більше двох знаків
      </div>
    </Popover>
  );

  handleRemoveQuantity = ()=> {
    this.props.resetAll();
  };

  componentWillMount() {
    this.setState({
      alertSuccess: false,
      showFarm: false,
      cows: this.props.cows,
      fuelPrice: this.props.fuelPrice,
      energyPrice: this.props.energyPrice,
      paymentPrice: this.props.paymentPrice,
      pregrant_cows: this.props.pregrant_cows,
      dry_cows: this.props.dry_cows,
      ill_cows: this.props.ill_cows,
      cow_before_20days: this.props.cow_before_20days

    })
  }

  render() {
    let {cows, fuelPrice, energyPrice, paymentPrice}=this.props
    return (
      <div>
        {this.state.alert ?
          <p style={{clear: 'both'}} className="text-center"><Alert bsStyle="danger">{this.state.message}</Alert>
          </p> : null}
        {this.state.alertSuccess ?
          <p style={{clear: 'both'}} className="text-center"><Alert bsStyle="success">Ваші дані успішно додані</Alert>
          </p> : null}
        <InformationButton name={'Інформація полів вводу данних'}>
          {this.popoverLeft}
        </InformationButton>
        <div className="entries-data">
          <form className="entries">

            <br/>
            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Кількість корів </InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation(e, 'cows')} onChange={(e)=>this.handleChange(e, 'cows')}
                             type="text"/>
                <InputGroup.Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Ціна на пальне ГРН / л</InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation(e, 'fuelPrice')}
                             onChange={(e)=>this.handleChange(e, 'fuelPrice')} type="text"/>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Ціна на електроенергію ГРН / кВт</InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation(e, 'energyPrice')}
                             onChange={(e)=>this.handleChange(e, 'energyPrice')} type="text"/>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Заробітня плата ГРН / год</InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation(e, 'paymentPrice')}
                             onChange={(e)=>this.handleChange(e, 'paymentPrice')} type="text"/>
              </InputGroup>
            </FormGroup>

            <LoadingButton action={this.handleAddQuantity}/>
            <Button onClick={this.hanDleCalculateFarm} type='button'>Розрахувати ферму</Button>
            <Link to="/tables">
              <Button onClick={this.initData}
                      disabled={(cows == 0 && fuelPrice == 0 && paymentPrice == 0 && energyPrice == 0)}
                      type='button'>Перейти
                до
                таблиць</Button>
            </Link>
          </form>
          {(this.cowsRegEx.test(this.state.cows) && this.moneyRegEx.test(
            this.state.energyPrice) && this.moneyRegEx.test(
            this.state.fuelPrice) && this.moneyRegEx.test(
            this.state.paymentPrice)) && (this.state.cows != 0 && this.state.energyPrice != 0 && this.state.fuelPrice != 0
          && this.state.paymentPrice != 0) ?
            <div className="output-data flash">
              <h4>Данні які будуть внесені для розрахунку</h4>
              <p>Кількість корів : {this.state.cows}</p>
              <p>Ціна за пальне : {this.state.fuelPrice} грн/л</p>
              <p>Ціна за електроенергію : {this.state.energyPrice} грн/кВт</p>
              <p>Заробітня плата : {this.state.paymentPrice} грн/год</p>
            </div> : null}
          {this.state.showFarm ?
            <div className="output-cows flash">
              <h4>Структура ферми</h4>
              <p>Кількість корів : {this.state.cows} голів</p>
              <p>Кількість корів родильного відділення : {this.state.pregrant_cows} голів</p>
              <p>Кількість сухостійних корів : {this.state.dry_cows} голів</p>
              <p>Кількість хворих корів : {this.state.ill_cows} голів</p>
              <p>Кількість телят : {this.state.cow_before_20days} голів</p>
            </div> : null}
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {...state.entries}
})(Entries)