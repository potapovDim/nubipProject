import React, {Component} from 'react'
import {InputGroup, Button, FormGroup, FormControl, Alert, OverlayTrigger, Popover, ProgressBar} from 'react-bootstrap'
import {Link} from 'react-router'
import LoadingButton from '../helpers/loadingButton'
import InformationButton from '../helpers/informationButton'
import {connect} from 'react-redux'
import _ from 'lodash'
import {EntrieTutorial} from '../tutorials/entrieToturial'

export class Entries extends Component {
  state = {
    alert: false,
    alertSuccess: false,
    showFarm: false,
    message: ''
  }

  moneyRegEx = /(^[0-9]{1,2})$|(^[0-9]{1,2})([.]{1,1})([0-9]{0,2}$)/
  cowsRegEx = /^[0-9]{2,4}$/

  handleChange = (e, key)=> {
    e.preventDefault()
    this.setState({alert: false, showFarm: false})
    let _state = {...this.state}
    _state[key] = +e.target.value
    this.setState(_state)
  }

  handleValidation = (key)=> {
    key == 'cows' || key == 'season_stall' ?
    !this.cowsRegEx.test(this.state[key]) &&
    this.setState({
      alert: true,
      message: 'Кількість корів повинна містити лише цілі числа від трьох до чотирьох знаків , без спец символів , чи букв , введіть поле коректно'
    }) : !this.moneyRegEx.test(this.state[key]) &&
    this.setState({
      alert: true,
      message: "Поля вводу цін на енергетичні носії чи оплату праці повині містити лише цілі числа або десяткові дроби , без спец символів чи букв , введіть поле коректно "
    })
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
    }
    else {
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
    console.log('00--00-00-0-')
    let _state = {...this.state}
    if (_state.cows === 0) {
      this.setState({
        alert: true,
        message: 'Ви не заповнили основні поля , для вводу скористайтесь підказкою (Інформація полів вводу данних)',
        showFarm: false
      })
    }
    else {
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
      const entry = _.omit(this.state, ['alert', 'alertSuccess', 'showFarm', 'message'])
      this.props.addEntry({
        ...entry
      })
      this.setState({alertSuccess: true})
    }
    else
      this.setState({
        alert: true,
        message: 'Ви намагаєтесь додати пусте поле, введіть будь-ласка валідні дані, для підказки скористайтесть інформацією'
      })
  }

  handleRemoveQuantity = ()=> {
    this.props.resetAll();
  };

  render() {
    let {cows, fuelPrice, energyPrice, paymentPrice} = this.props
    return (
      <div>
        {this.state.alert ?
          <p style={{clear: 'both'}} className="text-center"><Alert bsStyle="danger">{this.state.message}</Alert>
          </p> : null}
        {this.state.alertSuccess ?
          <p style={{clear: 'both'}} className="text-center"><Alert bsStyle="success">Ваші дані успішно додані</Alert>
          </p> : null}
        <InformationButton name={'Інформація полів вводу данних'}>
          <EntrieTutorial/>
        </InformationButton>
        <div className="entries-data">
          <form className="entries">

            <br/>
            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Стійловий період корів </InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation('season_stall')}
                             onChange={(e)=>this.handleChange(e, 'season_stall')}
                             type="text"/>
                <InputGroup.Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Кількість корів </InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation('cows')} onChange={(e)=>this.handleChange(e, 'cows')}
                             type="text"/>
                <InputGroup.Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Ціна на пальне ГРН / л</InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation('fuelPrice')}
                             onChange={(e)=>this.handleChange(e, 'fuelPrice')} type="text"/>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Ціна на електроенергію ГРН / кВт</InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation('energyPrice')}
                             onChange={(e)=>this.handleChange(e, 'energyPrice')} type="text"/>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Заробітня плата ГРН / год</InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation('paymentPrice')}
                             onChange={(e)=>this.handleChange(e, 'paymentPrice')} type="text"/>
              </InputGroup>
            </FormGroup>

            <LoadingButton action={this.handleAddQuantity}/>
            <Button onClick={this.handleCalculateFarm} type='button'>Розрахувати ферму</Button>
            <Link to="/stern">
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
              <p>Стійловий період : {this.state.season_stall}</p>
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