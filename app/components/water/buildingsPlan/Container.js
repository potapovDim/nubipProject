import React, {Component, PropTypes} from 'react';
import update from 'react/lib/update';
import ItemTypes from './ItemTypes';
import DraggableBox from './DraggableBox';
import snapToGrid from './snapToGrid';
import {DropTarget} from 'react-dnd';
import _ from 'lodash'
import uuid from 'node-uuid'

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
    console.log(item)
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
      'a': {top: 20, left: 80, title: 'Насосна станція'},
      'b': {top: 20, left: 80, title: 'Водонапірна башта', parentId: 'a'}
    }
  }

  componentWillMount() {
    
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
    console.log(newBoxTitle)
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
    let leftToFather
    let topToFather
    const boxes = this.state.boxes
    if (boxes[parentId]) {
      const {top:fatherTop, left:fatherLeft} = boxes[parentId]
      if (fatherTop > top && fatherLeft > left) {
        leftToFather = fatherLeft - left
        topToFather = fatherTop - top
      }
      else if (fatherTop > top && fatherLeft < left) {
        leftToFather = left - fatherLeft
        topToFather = fatherTop - top
      }
      else if (fatherTop < top && fatherLeft > left) {
        leftToFather = fatherLeft - left
        topToFather = top - fatherTop
      }
      else if (fatherTop < top && fatherLeft < left) {
        leftToFather = left - fatherLeft
        topToFather = top - fatherTop
      }
      boxes[id].roadToParent = {leftToFather, topToFather}
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
    const {connectDropTarget} = this.props;
    const {boxes} = this.state;

    return connectDropTarget(
      <div style={styles}>
        {Object
          .keys(boxes)
          .map(key => this.renderBox(boxes[key], key))
        }
      </div>
    );
  }
}