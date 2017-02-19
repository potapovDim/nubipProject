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
      <Modal.Title id="contained-modal-title">Інформація кафедри тваринництва</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div>
         <img style={{
           float: "left"
         }} src="http://nubip.edu.ua/sites/default/files/imagecache/120x160/Khmel.jpg" alt="logo"/>
          Завідувач кафедри (в.о.):
          <div>
          <h4>Хмельовський Василь Степанович</h4>
          </div>
          <div>
          кандидат технічних наук, доцент
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          Кафедра "Механізації тваринництва" була створена в 1960р. Першим завідувачем кафедри був обраний доцент І.Т. Осьмак (1960-1963 рр.). У наступні роки кафедрою завідували доценти П.І.Кондратюк (1963-1964 рр.), В.М. Синявський (1964-1966 рр.), А.А. Яворський (1966-1976 рр.), професор М.З. Савченко (1976-1977 рр.), доцент Д.С. Чубов (1977-1992 рр.), професор І.І. Ревенко (1992-2006 рр.), доцент О.О. Заболотько. (2006-2010 рр.), професор Г.А.Голуб  (2010-2016).     З вересня 2016 року кафедру очолює доцент Хмельовський Василь Степанович.

        Основними напрямками НДР кафедри є:
        <ul>
        <li>    
        удосконалення існуючих та розробка нових засобів механізації виробництва продукції тваринництва;
        </li>
        <li>
        обґрунтування наукових принципів, технологічних та технічних рішень ресурсозбереження при виробництві продукції тваринництва;
        </li>
        <li>
        розорбка прогресивних технологій переробки відходів тваринництва.
        </li>
        </ul>
      </div>

    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.hide}>Приховати</Button>
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

