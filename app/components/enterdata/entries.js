import React, {Component} from 'react'
import {
  InputGroup,
  Button,
  FormGroup,
  FormControl,
  Alert,
  OverlayTrigger,
  Popover,
  ProgressBar,
  Checkbox
} from 'react-bootstrap'
import {Link} from 'react-router'
import LoadingButton from '../helpers/loadingButton'
import InformationButton from '../helpers/informationButton'
import _ from 'lodash'
import {EntrieTutorial} from '../tutorials/entrieToturial'
import {addEntry, resetAll} from '../../reducers/entries/actions'
import {BuildingsForFarm} from './buidingsForFarm'

class Entries extends Component {
  state = {
    alert: false,
    alertSuccess: false,
    showFarm: false,
    message: '',
    type: null,
    cows: null,
    fuelPrice: null,
    energyPrice: null,
    paymentPrice: null,
    pregrant_cows: null,
    dry_cows: null,
    ill_cows: null,
    cow_before_20days: null,
    season_stall: null
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
      setTimeout(()=> {
      }, 500)
      const quantity = {
        cows: this.state.cows,
        fuelPrice: this.state.fuelPrice,
        energyPrice: this.state.energyPrice,
        paymentPrice: this.state.paymentPrice,
        pregrant_cows: this.state.pregrant_cows,
        dry_cows: this.state.dry_cows,
        ill_cows: this.state.ill_cows,
        cow_before_20days: this.state.cow_before_20days,
        type: this.state.type,
        season_stall: this.state.season_stall
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
        cow_before_20days: this.state.cow_before_20days,
        type: this.state.type,
        season_stall: this.state.season_stall
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
      this.props.dispatch(addEntry({
        ...entry
      }))
      this.setState({alertSuccess: true})
    }
    else
      this.setState({
        alert: true,
        message: 'Ви намагаєтесь додати пусте поле, введіть будь-ласка валідні дані, для підказки скористайтесть інформацією'
      })
  }

  chooseWayMaintenance = type => {
    this.state.type === type ? this.setState({type: null}) : this.setState({type})
  }

  handleRemoveQuantity = ()=> {
    this.props.resetAll();
  };

  render() {
    const {cows, fuelPrice, energyPrice, paymentPrice, pregrant_cows, dry_cows, ill_cows, cow_before_20days, type, season_stall} = this.state
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

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width: "300px"}}>Спосіб утримання</InputGroup.Addon>
                <Checkbox inline onChange={()=>this.chooseWayMaintenance('attachable')}
                          disabled={this.state.type!==null}>
                  Прив'язний
                </Checkbox>
                <Checkbox inline onChange={()=>this.chooseWayMaintenance('without_attachable')}
                          disabled={this.state.type!==null}>
                  Безприв'зний
                </Checkbox>
              </InputGroup>
            </FormGroup>
            <LoadingButton action={this.handleAddQuantity}/>
            <Button onClick={this.handleCalculateFarm} type='button'
                    disabled={(cows && fuelPrice && energyPrice && paymentPrice&&type)===null}>Розрахувати
              ферму</Button>
            <Link to="/stern">
              <Button onClick={this.initData}
                      disabled={this.state.alertSuccess !== true}
                      type='button'>Перейти
                до
                таблиць</Button>
            </Link>
          </form>
          {((cows && fuelPrice && energyPrice && paymentPrice && type) !== null) ?
            <div className="output-data flash">
              <h4>Данні які будуть внесені для розрахунку</h4>
              <p>Стійловий період : {season_stall}</p>
              <p>Кількість корів : {cows}</p>
              <p>Ціна за пальне : {fuelPrice} грн/л</p>
              <p>Ціна за електроенергію : {energyPrice} грн/кВт</p>
              <p>Заробітня плата : {paymentPrice} грн/год</p>
            </div> : null}
          {this.state.showFarm ?
            <div className="output-cows flash">
              <h4>Структура ферми</h4>
              <p>Кількість корів : {cows} голів</p>
              <p>Кількість корів родильного відділення : {pregrant_cows} голів</p>
              <p>Кількість сухостійних корів : {dry_cows} голів</p>
              <p>Кількість хворих корів : {ill_cows} голів</p>
              <p>Кількість телят : {cow_before_20days} голів</p>
              <p>Спосіб утримання тварин : {type === 'attachable' ? "прив'зний" : "безприв'язний" }</p>
            </div> : null}
        </div>
        {this.state.showFarm &&
        <BuildingsForFarm
          cows={cows}
          cow_before_20days={cow_before_20days}
          building_for_calves={this.props.building_for_calves}
          buildings_for_calves_before_20days={this.props.buildings_for_calves_before_20days}
          buildings_for_cows={this.props.buildings_for_cows}
          type={type}
        />}
      </div>
    );
  }
}

export default Entries