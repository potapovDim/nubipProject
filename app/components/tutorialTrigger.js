import React,{Component} from 'react'
import {Button,Modal,} from 'react-bootstrap'

class Trigger extends Component{
  state ={
     show: false 
  }

  render() {
    let close = () => this.setState({ show: false});

    return (
      <a  style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Launch contained modal
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
