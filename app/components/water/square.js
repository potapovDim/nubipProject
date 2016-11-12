//import React, {Component, PropTypes} from 'react';
//import Square from './Square';
//import {DropTarget} from 'react-dnd';
//
//const squareTarget = {
//  drop(props) {
//    console.log('drop')
//  }
//};
//
//function collect(connect, monitor) {
//  return {
//    connectDropTarget: connect.dropTarget(),
//    isOver: monitor.isOver()
//  };
//}
//
//@DropTarget({}, squareTarget, collect)
//export default class BoardSquare extends Component {
//  static propTypes = {
//    x: PropTypes.number.isRequired,
//    y: PropTypes.number.isRequired,
//    isOver: PropTypes.bool.isRequired
//  };
//
//  render() {
//    const {x, y, connectDropTarget, isOver} = this.props;
//    const black = (x + y) % 2 === 1;
//
//    return connectDropTarget(
//      <div style={{
//        position: 'relative',
//        width: '100%',
//        height: '100%'
//      }}>
//        <Square black={black}>
//          {this.props.children}
//        </Square>
//        {isOver &&
//        <div style={{
//            position: 'absolute',
//            top: 0,
//            left: 0,
//            height: '100%',
//            width: '100%',
//            zIndex: 1,
//            opacity: 0.5,
//            backgroundColor: 'yellow',
//          }}/>
//        }
//      </div>
//    );
//  }
//}