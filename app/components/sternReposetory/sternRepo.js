import React, {Component} from 'react'
import {
  sternStocks,
  sternStore,
  quantityStores
} from '../../calculations/planFarm'
class SternRepo extends Component {
  state = {}

  componentWillMount() {
    const {entries:{cows, cow_before_20days}, tables:{building_for_stern}} = this.props
    this.setState({cows, cow_before_20days, building_for_stern})
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}