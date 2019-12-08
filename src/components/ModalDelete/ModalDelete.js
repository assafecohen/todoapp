import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


const ModalDelete = (props) => {
  const {modalStatus, handleHideModal, removeItem} = props
  return (
    <Modal show={modalStatus} onHide={handleHideModal} >
      <Modal.Header closeButton>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete this task?.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleHideModal}>
          Close
    </Button>
        <Button variant="outline-danger" onClick={removeItem}>
         Delete
    </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDelete;
