import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export const MainTutorial = (props)=> (
  <Modal
    show={props.show}
    onHide={close}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h1>THIS IS MAIN TUTORIAL</h1>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.hide}>Close</Button>
    </Modal.Footer>
  </Modal>
)
export const TablesTutorial = (props)=> (
  <Modal
    show={props.show}
    onHide={close}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h1>THIS IS TABLES TUTORIAL</h1>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.hide}>Close</Button>
    </Modal.Footer>
  </Modal>
)
export const EntriesTutorial = (props)=> (
  <Modal
    show={props.show}
    onHide={close}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h1>THIS IS ENTRIES TUTORIAL</h1>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.hide}>Close</Button>
    </Modal.Footer>
  </Modal>
)

