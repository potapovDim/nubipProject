import React, {Component} from 'react';
import Container from './Container';
import CustomDragLayer from './CustomDragLayer';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class DropBuilds extends Component {
  state = {
    snapToGridAfterDrop: false,
    snapToGridWhileDragging: false
  };
  buildings = {
    cows: [{name: 'Корівник', heads: 200}, {name: 'Корівник', heads: 100}],
    calves: [{name: 'Приміщення для молодняку', heads: 300}],
    cows_before_20days: [{name: 'Родильне відділення з профілакторієм', heads: 160},
      {name: 'Родильне відділення з профілакторієм', heads: 160}]
  }

  render() {
    const builds = this.props.buildingsForFarm || this.buildings
    const {snapToGridAfterDrop, snapToGridWhileDragging} = this.state;
    return (
      <div>
        <Container snapToGrid={snapToGridAfterDrop} buildings={builds} addFullBuilds={this.props.addFullBuilds}/>
        <CustomDragLayer snapToGrid={snapToGridWhileDragging}/>
        <p>
          <label>
            <input type='checkbox'
                   checked={snapToGridWhileDragging}
                   onChange={this.handleSnapToGridWhileDraggingChange}/>
            <small>Дозволити переміщення тільки по сітці</small>
          </label>
          <br />
          <label>
            <input type='checkbox'
                   checked={snapToGridAfterDrop}
                   onChange={this.handleSnapToGridAfterDropChange}/>
            <small>Вирівняти по сітці після закінчення переміщення</small>
          </label>
        </p>
      </div>
    );
  }

  handleSnapToGridAfterDropChange = () => {
    this.setState({
      snapToGridAfterDrop: !this.state.snapToGridAfterDrop
    });
  }

  handleSnapToGridWhileDraggingChange = () => {
    this.setState({
      snapToGridWhileDragging: !this.state.snapToGridWhileDragging
    });
  }
}