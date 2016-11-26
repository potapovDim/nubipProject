import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import ItemTypes from './ItemTypes';
import DraggableBox from './DraggableBox';
import snapToGrid from './snapToGrid';
import { DropTarget } from 'react-dnd';
import _ from 'lodash'
import uuid from 'node-uuid'

import { buildNewBuildingsPositions, buildConnectionMap } from './calculateBuildings'
import { findBuildPosition } from './findBuildPosition'
const styles = {
  width: '100%',
  height: 800,
  border: '1px solid black',
  position: 'relative'
};

const boxTarget = {
  drop(props, monitor, component) {
    const delta = monitor.getDifferenceFromInitialOffset();
    const item = monitor.getItem();

    let left = Math.round(item.left + delta.x);
    let top = Math.round(item.top + delta.y);
    if (props.snapToGrid) {
      [left, top] = snapToGrid(left, top);
    }
    component.moveBox(item.id, left, top);
  }
};

@DropTarget(ItemTypes.BOX, boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Container extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    snapToGrid: PropTypes.bool.isRequired
  }

  state = {}

  componentWillMount() {
    const {buildings} = this.props
    const connectionMap = buildConnectionMap(buildings)

    const calcWaterNeed = (id) => {
      let result = (buildings[id].heads * buildings[id].water_one_head) / 1000
      connectionMap[id].forEach(childId => {
        result += calcWaterNeed(childId)
      })
      return result
    }

    const parentIdAssert = id => {
      let parentId;
      _.forEach(connectionMap, (key, value) => {
        if (key.includes(parseInt(id))) {
          parentId = value
        }
      })
      return parentId
    }

    Object.keys(buildings).forEach((key, index) => {
      if (index === Object.keys(buildings).length) {
        return
      }
      buildings[key].vaterNeed = calcWaterNeed(key)
      buildings[key].waterNeedingForThisBuild = buildings[key].heads*buildings[key].water_one_head
    })
    Object.keys(buildings).forEach((key, index) => {
      buildings[key].tube = this.calculateTube(2 * Math.sqrt(((buildings[key].vaterNeed * 2.86) / 86400000) / Math.PI))
      buildings[key].parentId = parentIdAssert(key)
    })
    this.setState({ buildings })
  }

  calculateTube = (val) => {
    console.log(val)
    if (val <= 0.04) {
      return 0.04
    }
    else if (0.04 <= val && val <= 0.05) {
      return 0.05
    }
    else if (0.05 <= val && val <= 0.08) {
      return 0.08
    }
    else if (0.08 <= val) {
      return 0.1
    }
  }
  moveBox(id, left, top) {
    this.setState(update(this.state, {
      buildings: {
        [id]: {
          $merge: {
            left: left,
            top: top
          }
        }
      }
    }));
  }

  parentId(id) {
    const {connectionMap} = this.state
    let parentId;
    _.forEach(connectionMap, (key, value) => {
      if (value.includes(id)) {
        parentId = key
      }
    })
    return parentId
  }

  addBox = (parentId, top, left, newBoxTitle) => {
    const id = uuid.v1()
    const _state = this.state
    _state.boxes[id] = { top: top + 5, left: left + 5, title: newBoxTitle, parentId }
    this.setState(_state)
  }

  removeBox = (id) => {
    const boxes = this.state.boxes
    const newBox = _.omit(boxes, [id])
    this.setState({ boxes: newBox })
  }

  calculateRoadToFatherComponent = (id) => {
    const RoadToPatent={}
    const {buildings} = this.state
    if (buildings[id].parentId) {
      const {top: fatherTop, left: fatherLeft} = buildings[buildings[id].parentId]
      const {top,left} = buildings[id]
      if (fatherTop >= top && fatherLeft >= left) {
        RoadToPatent.leftToFather = (fatherLeft - left) / 10
        RoadToPatent.topToFather = (fatherTop - top) / 10
        RoadToPatent.words = 'вниз вправо'
      }
      else if (fatherTop >= top && fatherLeft <= left) {
        RoadToPatent.leftToFather = (left - fatherLeft) / 10
        RoadToPatent.topToFather = (fatherTop - top) / 10
        RoadToPatent.words = 'вниз вліво'
      }
      else if (fatherTop <= top && fatherLeft >= left) {
        RoadToPatent.leftToFather = (fatherLeft - left) / 10
        RoadToPatent.topToFather = (top - fatherTop) / 10
        RoadToPatent.words = 'вверх вправо'
      }
      else if (fatherTop <= top && fatherLeft <= left) {
        RoadToPatent.leftToFather = (left - fatherLeft) / 10
        RoadToPatent.topToFather = (top - fatherTop) / 10
        RoadToPatent.words = 'вверх вліво'
      }
      buildings[id].roadToParent = RoadToPatent
      buildings[id].tubeLength  = RoadToPatent.leftToFather + RoadToPatent.topToFather
      this.setState({ buildings })
    }
    else return
  }

  renderBox(item, key) {
    return (
      <DraggableBox
        {...item}
        key={key}
        id={key}
        removeBox={this.removeBox}
        addBloc={this.addBox}
        calculateRoad={this.calculateRoadToFatherComponent} />
    );
  }

  calculateWaterNeed = () => {
    const {buildings, connectionMap} = this.state;
    const calcWaterNeed = (id) => {
      let result = buildings[id].heads * buildings[id].water_one_head
      connectionMap[id].forEach(childId => {
        result += calcWaterNeed(childId)
      })
      return result
    }
    Object.keys(buildings).forEach((key, index) => {
      if (index === Object.keys(buildings).length) {
        return
      }
      buildings[key].vaterNeed = calcWaterNeed(key)
    })
    this.setState({ buildings })
    return buildings
  }
  calculateTube = (val) => {
    if (val <= 0.04) {
      return 0.04
    }
    else if (0.04 <= val && val <= 0.05) {
      return 0.05
    }
    else if (0.05 <= val && val <= 0.08) {
      return 0.08
    }
    else if (0.08 <= val) {
      return 0.1
    }
  }

  render() {
    const {connectDropTarget, addFullBuilds} = this.props
    const {buildings} = this.state;
    return (<div>{connectDropTarget(
      <div style={styles}>
        {Object
          .keys(buildings)
          .map(key => this.renderBox(buildings[key], key))
        }
      </div>)}
      <button onClick={()=>addFullBuilds(buildings)}>Прийняти будівлі</button>
    </div>)
  }
}