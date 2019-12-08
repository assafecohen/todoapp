import React, {useState} from 'react'
import Button from 'react-bootstrap/button'
import Modal from 'react-bootstrap/modal'


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
        <Button variant="secondary" onClick={handleHideModal}>
          NO
    </Button>
        <Button variant="primary" onClick={removeItem}>
          YES
    </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDelete;
