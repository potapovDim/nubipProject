import React, {Component, PropTypes} from 'react';
import update from 'react/lib/update';
import ItemTypes from './ItemTypes';
import DraggableBox from './DraggableBox';
import snapToGrid from './snapToGrid';
import {DropTarget} from 'react-dnd';
import _ from 'lodash'
import uuid from 'node-uuid'

import {buildNewBuildingsPositions} from './calculateBuildings'
import {findBuildPosition} from './findBuildPosition'
import {calculateTubes, calculateTubesWithLength} from './calculateTubes'
const styles = {
  width: 10000,
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


  state = {
    boxes: {
      'насос': {top: 10, left: 50, title: 'Насосна станція'},
      'башта': {top: 80, left: 50, title: 'Водонапірна башта', parentId: 'насос', waterNeedingForThisBuild: 0.0001}
    }
  }

  componentWillMount() {
    const {buildings} = this.props
    const buffer = [this.state.boxes['насос'],this.state.boxes['башта'], ...buildings.calves, ...buildings.cows, ...buildings.cows_before_20days].map(build=> {
        build.id = uuid()
        return build
    })
    this.allBuildings = {}
    this.connectionMap = {}
    _.forEach(buffer,(build, index) => {
      this.allBuildings[build.id] = build
      this.connectionMap[build.id] = buffer.length -1 === index ? [] : [buffer[index + 1].id]
    })
    console.log(this.calcTubes(Object.keys(this.allBuildings)[0]))
    const boxes = {...this.state.boxes}
    const newBoxes = buildNewBuildingsPositions(boxes, buildings)
    this.setState({boxes: newBoxes})
  }
  calcTubes = (id) => {
    // const heads = _.reduce(ids,(result,id) => {
    //     result += allBuildings[id]
    // },0)
    debugger
    let heads = this.allBuildings[id].heads
    _.forEach(this.connectionMap[id], _id => {
      heads += this.calcTubes(_id)
    })
    
    return heads
  }
  moveBox(id, left, top) {
    this.setState(update(this.state, {
      boxes: {
        [id]: {
          $merge: {
            left: left,
            top: top
          }
        }
      }
    }));
  }

  addBox = (parentId, top, left, newBoxTitle) => {
    const id = uuid.v1()
    const _state = this.state
    _state.boxes[id] = {top: top + 5, left: left + 5, title: newBoxTitle, parentId}
    this.setState(_state)
  }

  removeBox = (id) => {
    const boxes = this.state.boxes
    const newBox = _.omit(boxes, [id])
    this.setState({boxes: newBox})
  }

  calculateRoadToFatherComponent = (id, parentId, top, left) => {

    const RoadToPatent = {}
    const boxes = this.state.boxes
    if (boxes[parentId]) {
      const {top:fatherTop, left:fatherLeft} = boxes[parentId]
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
      boxes[id].roadToParent = RoadToPatent
      this.setState({boxes: boxes})
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
        calculateRoad={this.calculateRoadToFatherComponent}/>
    );
  }


  render() {
    const {connectDropTarget, addFullBuilds} = this.props
    const {boxes} = this.state;
    const tubes = calculateTubes(findBuildPosition(boxes))
    const tt = calculateTubesWithLength(tubes, boxes)



    return (<div>{connectDropTarget(
      <div style={styles}>
        {Object
          .keys(boxes)
          .map(key => this.renderBox(boxes[key], key))
        }
      </div>)}
      <button onClick={()=>addFullBuilds(tt)}>Прийняти будівлі</button>
    </div>)
  }
}