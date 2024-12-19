import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import styles from './TaskModal.module.scss'

type TaskModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
  if (!isOpen) return null

  return (
    <Modal show={isOpen} onClick={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}
