import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import styles from './TaskModal.module.scss'
import { Input } from '../commons/input/Input'
import { Select } from '../commons/select/Select'
import { Textarea } from '../commons/textarea/Textarea'

type TaskModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
  if (!isOpen) return null

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.modalTitleInput}>New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input label="Title of Project" value="" placeholder="Title of Project" />
        <div className={styles.selectContainers}>
          <Select label="Status" value="status" />
          <Select label="Priority" value="priority" />
        </div>
        <Input label="Date" value="" placeholder="Select date" type="date" />
        <Input label="Summary" value="" placeholder="Summary" />
        <Textarea label="Description" value="" placeholder="Description" />
        <Input label="Assignee" value="" placeholder="Assignee" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}
