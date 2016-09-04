import React, { Component } from 'react'
import {
  InputGroup,
  Button,
  FormGroup,
  FormControl,
  Alert,
  Checkbox
} from 'react-bootstrap'
import { Link } from 'react-router'
import LoadingButton from '../helpers/loadingButton'
import InformationButton from '../helpers/informationButton'
import { EntrieTutorial } from '../tutorials/entrieToturial'
import { addEntry, resetAll } from '../../reducers/entries/actions'
import { BuildingsForFarm } from './buidingsForFarm'
import { BuildingsForShit } from './shitAndBuildingsForShit'
import _ from 'lodash'

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
    season_stall: null,
    buildingsADD: false,
    farm_direction: null
  }


  changeBuildingsStructure = (data) => {
    const buildings = [
      { top: 10, left: 50, name: 'Насосна станція', heads: 0, water_one_head: 0 },
      { top: 80, left: 50, name: 'Водонапірна башта', heads: 0, water_one_head: 0 },
      { top: 80, left: 50, name: 'Кормоцехч ', heads: 1000, water_one_head: 1 }]
    data.cows.forEach(build => {
      buildings.push(build)
    })
    data.cows_before_20days.forEach(build => {
      buildings.push(build)
    })
    data.calves.forEach(build => {
      buildings.push(build)
    })
    let hashBuldings = {}
    buildings.forEach((build, index) => {
      hashBuldings[index] = build
    })
    return hashBuldings
  }


  addBuildings = (data) => {
    this.setState({ buildingsForFarm: this.changeBuildingsStructure(data), buildingsADD: true })
  }
  moneyRegEx = /(^[0-9]{1,2})$|(^[0-9]{1,2})([.]{1,1})([0-9]{0,2}$)/
  cowsRegEx = /^[0-9]{2,4}$/
  handleChange = (e, key) => {
    e.preventDefault()
    this.setState({ alert: false, showFarm: false })
    let _state = {...this.state }
    _state[key] = +e.target.value
    this.setState(_state)
  }


  handleValidation = (key) => {
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

<<<<<<< HEAD
  initData = () => {
    const {dispatch} = this.props
    if (this.state.pregrant_cows === null) {
      this.handleCalculateFarm()
      setTimeout(() => {
      }, 500)
      dispatch(addEntry(_.omit(this.state, ['alert', 'alertSuccess', 'showFarm', 'message', 'buildingsADD'])))
    }
    else {
      dispatch(addEntry(_.omit(this.state, ['alert', 'alertSuccess', 'showFarm', 'message', 'buildingsADD'])))
    }
  }
=======
>>>>>>> fix style and add farm structure

  handleCalculateFarm = () => {
    let _state = {...this.state }
    if (_state.cows !== 0) {
      console.log('212313131312312312', this.state.farm_direction)
      switch (this.state.farm_direction) {
        case '1': {
          console.log('123132131231321313132----------------')
          _state.pregrant_cows = parseInt(_state.cows * 0.1)
          _state.dry_cows = parseInt(_state.cows * 0.1)
          _state.ill_cows = parseInt(_state.cows * 0.1)
          _state.cow_before_20days = parseInt(_state.cows * 0.40);
          _state.showFarm = true
          this.setState(_state)
          return 
        }
        case '2': {
          _state.pregrant_cows = parseInt(_state.cows * 0.1)
          _state.dry_cows = parseInt(_state.cows * 0.1)
          _state.ill_cows = parseInt(_state.cows * 0.1)
          _state.cow_before_20days = parseInt(_state.cows * 0.2);
          _state.calves = parseInt(_state.cows * 0.35)
          _state.showFarm = true
          this.setState(_state)
          return 
        }
        case '3': {
          _state.pregrant_cows = parseInt(_state.cows * 0.1)
          _state.dry_cows = parseInt(_state.cows * 0.1)
          _state.ill_cows = parseInt(_state.cows * 0.1)
          _state.cow_before_20days = parseInt(_state.cows * 0.2);
          _state.calves = parseInt(_state.cows * 0.5)
          _state.showFarm = true
          this.setState(_state)
          return 
        }
      }
    }
  }


  // _state.pregrant_cows = parseInt(_state.cows * 0.1)
  // _state.dry_cows = parseInt(_state.cows * 0.1)
  // _state.ill_cows = parseInt(_state.cows * 0.1)
  // _state.cow_before_20days = parseInt(_state.cows * 0.15);
  // _state.showFarm = true
  // this.setState(_state)


  handleAddQuantity = () => {
    if ((this.cowsRegEx.test(this.state.cows) && this.moneyRegEx.test(this.state.energyPrice) && this.moneyRegEx.test(
      this.state.fuelPrice) && this.moneyRegEx.test(
        this.state.paymentPrice)) && (this.state.cows != 0 && this.state.energyPrice != 0 && this.state.fuelPrice != 0 && this.state.paymentPrice != 0)) {
      const entry = _.omit(this.state, ['alert', 'alertSuccess', 'showFarm', 'message'])
      this.props.dispatch(addEntry({
        ...entry
      }))
    this.setState({ alertSuccess: true })
  }
  else {
  this.setState({
    alert: true,
    message: 'Ви намагаєтесь додати пусте поле, введіть будь-ласка валідні дані, для підказки скористайтесть інформацією'
  })
}
  }

chooseWayMaintenance = type =>
  this.state.type === type ? this.setState({ type: null }) : this.setState({ type })


<<<<<<< HEAD
farmDirection = farm_direction =>
  this.state.farm_direction === farm_direction ? this.setState({ farm_direction: null }) : this.setState({ farm_direction })

handleRemoveQuantity = () => {
  this.props.resetAll();
};
render() {
  const {cows, fuelPrice, energyPrice, paymentPrice, pregrant_cows, dry_cows, ill_cows, cow_before_20days, type, season_stall, buildingsADD, calves} = this.state
  const {litter_norm} = this.props
  console.log(this.state)
  return (
    <div>
      {this.state.alert ?
        <p style={{ clear: 'both' }} className="text-center"><Alert bsStyle="danger">{this.state.message}</Alert>
        </p> : null}
      {this.state.alertSuccess ?
        <p style={{ clear: 'both' }} className="text-center"><Alert bsStyle="success">Ваші дані успішно додані</Alert>
        </p> : null}
      <InformationButton name={'Інформація полів вводу данних'}>
        <EntrieTutorial />
      </InformationButton>
      <div className="entries-data">
        <form className="entries">

          <br />
          <FormGroup >
            <InputGroup>
              <InputGroup.Addon style={{ width: "300px" }}>Стійловий період корів </InputGroup.Addon>
              <FormControl onBlur={(e) => this.handleValidation('season_stall')}
                onChange={(e) => this.handleChange(e, 'season_stall')}
                type="text" />
              <InputGroup.Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>

          <FormGroup >
            <InputGroup>
              <InputGroup.Addon style={{ width: "300px" }}>Кількість корів </InputGroup.Addon>
              <FormControl onBlur={(e) => this.handleValidation('cows')} onChange={(e) => this.handleChange(e, 'cows')}
                type="text" />
              <InputGroup.Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>

          <FormGroup >
            <InputGroup>
              <InputGroup.Addon style={{ width: "300px" }}>Ціна на пальне ГРН / л</InputGroup.Addon>
              <FormControl onBlur={(e) => this.handleValidation('fuelPrice')}
                onChange={(e) => this.handleChange(e, 'fuelPrice')} type="text" />
            </InputGroup>
          </FormGroup>

          <FormGroup >
            <InputGroup>
              <InputGroup.Addon style={{ width: "300px" }}>Ціна на електроенергію ГРН / кВт</InputGroup.Addon>
              <FormControl onBlur={(e) => this.handleValidation('energyPrice')}
                onChange={(e) => this.handleChange(e, 'energyPrice')} type="text" />
            </InputGroup>
          </FormGroup>

          <FormGroup >
            <InputGroup>
              <InputGroup.Addon style={{ width: "300px" }}>Заробітня плата ГРН / год</InputGroup.Addon>
              <FormControl onBlur={(e) => this.handleValidation('paymentPrice')}
                onChange={(e) => this.handleChange(e, 'paymentPrice')} type="text" />
            </InputGroup>
          </FormGroup>

          <FormGroup >
            <InputGroup>
              <InputGroup.Addon style={{ width: "300px" }}>Спосіб утримання</InputGroup.Addon>
              <Checkbox inline onChange={() => this.chooseWayMaintenance('attachable')}
                disabled={this.state.type !== null}>
                Прив'язний
                </Checkbox>
              <Checkbox inline onChange={() => this.chooseWayMaintenance('without_attachable')}
                disabled={this.state.type !== null}>
                Безприв'зний
                </Checkbox>
            </InputGroup>
          </FormGroup>
          <div>
            <h3>Вибір напрямку ферми </h3>
            <Checkbox inline onChange={() => this.farmDirection("1")}
              disabled={this.state.farm_direction !== null}>
              Молочний з утримання телят до 20 днів
                </Checkbox>
            <div>
              <Checkbox inline onChange={() => this.farmDirection("2")}
                disabled={this.state.farm_direction !== null}>
                Молочний з утримання телят до 6 місяців
                </Checkbox>
            </div>
            <div>
              <Checkbox inline onChange={() => this.farmDirection("3")}
                disabled={this.state.farm_direction !== null}>
                Молочний-м'ясний з закінченим оборотом
                </Checkbox>
            </div>
          </div>
          <LoadingButton action={this.handleAddQuantity} />
          <Button onClick={this.handleCalculateFarm} type='button'
            disabled={(cows && fuelPrice && energyPrice && paymentPrice && type) === null}>Розрахувати
              ферму</Button>
          <Link to="/shit">
            <Button onClick={this.initData}
              disabled={this.state.alertSuccess !== true}
              type='button'>Перейти до розрахунків</Button>
          </Link>
        </form>
        {((cows && fuelPrice && energyPrice && paymentPrice && type) !== null) ?
          <div className="output-data flash">
            <h4>Данні які будуть внесені для розрахунку</h4>
            <p>Стійловий період : {season_stall}</p>
            <p>Кількість дійних корів : {cows}</p>
            <p>Ціна за пальне : {fuelPrice}грн/л</p>
            <p>Ціна за електроенергію : {energyPrice}грн/кВт</p>
            <p>Заробітня плата : {paymentPrice}грн/год</p>
          </div> : null}
        {this.state.showFarm ?
          <div className="output-cows flash">
            <h4>Структура ферми</h4>
            <p>Загальна кількість корів : {cows}голів</p>
            <p>Кількість корів родильного відділення : {pregrant_cows}голів</p>
            <p>Кількість сухостійних корів : {dry_cows}голів</p>
            <p>Кількість хворих корів : {ill_cows}голів</p>
            <p>Кількість телят до 20 днів: {cow_before_20days}голів</p>
            <p>Кількість телят: {calves}голів</p>
            <p>Спосіб утримання тварин : {type === 'attachable' ? "прив'зний" : "безприв'язний"}</p>
          </div> : null}
=======
  render() {
    console.log(this.state)
    let {cows, fuelPrice, energyPrice, paymentPrice}=this.props
    return (
      <div>
        {this.state.alert ?
          <p style={{clear:'both'}} className="text-center"><Alert bsStyle="danger">{this.state.message}</Alert>
          </p> : null}
        {this.state.alertSuccess ?
          <p style={{clear:'both'}} className="text-center"><Alert bsStyle="success">Ваші дані успішно додані</Alert>
          </p> : null}
        <InformationButton name={'Інформація полів вводу данних'}>
          {this.popoverLeft}
          </InformationButton>
        <div className="entries-data">
          <form className="entries">

            <br/>
            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width:"300px"}}>Кількість корів </InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation(e,'cows')} onChange={(e)=>this.handleChange(e,'cows')}
                             type="text"/>
                <InputGroup.Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width:"300px"}}>Ціна на пальне ГРН / л</InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation(e,'fuelPrice')}
                             onChange={(e)=>this.handleChange(e,'fuelPrice')} type="text"/>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width:"300px"}}>Ціна на електроенергію ГРН / кВт</InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation(e,'energyPrice')}
                             onChange={(e)=>this.handleChange(e,'energyPrice')} type="text"/>
              </InputGroup>
            </FormGroup>

            <FormGroup >
              <InputGroup>
                <InputGroup.Addon style={{width:"300px"}}>Заробітня плата ГРН / год</InputGroup.Addon>
                <FormControl onBlur={(e)=>this.handleValidation(e,'paymentPrice')}
                             onChange={(e)=>this.handleChange(e,'paymentPrice')} type="text"/>
              </InputGroup>
            </FormGroup>

            <LoadingButton action={this.handleAddQuantity}/>
            <Button onClick={this.hangleCalculateFarm} type='button'>Розрахувати ферму</Button>
            <Link to="/tables">
              <Button disabled={(cows==0&&fuelPrice==0&&paymentPrice==0&&energyPrice==0)} type='button'>Перейти до
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
              <p>Кількість сухостійних корів : {this.state.dry_cows} голів </p>
              <p>Кількість вагітних корів : {this.state.pregrant_cows} голів</p>
              <p>Кількість хворих корів : {this.state.ill_cows} голів</p>
              <p>Корови до 20ти днів: {this.state.cow_before_20days} голів</p>
            </div> : null}
        </div>
>>>>>>> fix style and add farm structure
      </div>
      {this.state.showFarm &&
        <div>
          <BuildingsForFarm
            addBuildings={this.addBuildings}
            cows={cows}
            calves={calves}
            buildingsADD={buildingsADD}
            cow_before_20days={cow_before_20days}
            building_for_calves={this.props.building_for_calves}
            buildings_for_calves_before_20days={this.props.buildings_for_calves_before_20days}
            buildings_for_cows={this.props.buildings_for_cows}
            type={type}
            />
          <br>
          </br>
          <div></div>
          <BuildingsForShit cows={cows}
            dispatch={this.props.dispatch}
            cow_before_20days={cow_before_20days}
            shit_norms={this.props.shit_norms}
            buildings_for_shit={this.props.buildings_for_shit}
            stallPeriod={season_stall}
            litter_norm={litter_norm} />
        </div>}
    </div>
  );
}
}

export default Entries