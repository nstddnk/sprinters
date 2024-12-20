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

const statusOptions = [
  { value: 'Do', label: 'Do' },
  { value: 'Doing', label: 'Doing' },
  { value: 'Done', label: 'Done' },
]

const priorityOptions = [
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
]

export const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
  return isOpen ? (
    <Modal className={styles.modal} show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>New task</Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles.bodyWrapper}>
        <Input label="Title of Project" placeholder="Title of Project" />

        <div className={styles.selectContainers}>
          <Select label="Status" options={statusOptions} value="status" />
          <Select label="Priority" options={priorityOptions} value="priority" />
        </div>

        <Input label="Date" placeholder="Select date" type="date" />
        <Input label="Summary" placeholder="Summary" />
        <Textarea label="Description" placeholder="Description" />
        <Input label="Assignee" placeholder="Assignee" />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>

        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  ) : null
}
