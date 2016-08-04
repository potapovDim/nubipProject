import React,{Component} from 'react'
import {Button,Modal,} from 'react-bootstrap'

class Trigger extends Component{
  state ={
     show: false 
  }

  render() {
    let close = () => this.setState({ show: false});

    return (
      <a >
        <Button
          bsStyle="primary"
          onClick={() => this.setState({ show: true})}
          style={{color:'#00fd'}}
        >
         Show tutorial for page
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This page is for add your equipment to tables and after from this equipment
            will choosing optimized equipment for your enterprise
            <br></br>
            You have a buttons for management all  tables
            <br></br>
            <a style={{color:'blue'}}>Show</a> green button for show all tables
            <br></br>
            <a style={{color:'blue'}}>Show>ddl>Hide all tables</a> drop down list button for hide all tables
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </a>
    );
  }
}

export default Trigger
