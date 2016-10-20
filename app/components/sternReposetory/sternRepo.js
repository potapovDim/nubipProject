import React, {Component} from 'react'
import {
  sternStocks,
  sternStore,
  quantityStores
} from '../../calculations/planFarm'


class SternRepo extends Component {
  state = {}

  componentWillMount() {
    const {entries:{cows, cow_before_20days}, tables:{building_for_stern, stern_norms, stern_norms_feeding}} = this.props
    this.setState({cows, cow_before_20days, building_for_stern, stern_norms, stern_norms_feeding})
  }

  calculateSternFeeding = (typeFeeding) => {
    const sternFeeding = {}
    const {cow_before_20days, stern_norms_feeding} =this.state
    typeFeeding === 'інтенсивна' ? stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = cow_before_20days * parseFloat(value.intensive)
    }) : stern_norms_feeding.map(value => {
      sternFeeding[value.view_feed] = cow_before_20days * parseFloat(value.many_components)
    })

  }

  calculateSternNeedCows = (getMilkPerYear) => {
    const sternCows = {}
    const {cows, stern_norms} = this.state
    switch (getMilkPerYear) {
      case '2000':
        stern_norms.map(value => {
          sternCows[value.view_feed] = parseFloat(value.get_milk_year2000) * cows
        })
        return sternCows
      case '3000':
        stern_norms.map(value => {
          sternCows[value.view_feed] = parseFloat(value.get_milk_year3000) * cows
        })
        return sternCows
      case '4000':
        stern_norms.map(value => {
          sternCows[value.view_feed] = parseFloat(value.get_milk_year3000) * cows
        })
        return sternCows
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}