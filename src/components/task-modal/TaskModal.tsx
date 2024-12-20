import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import styles from './TaskModal.module.scss'
import { Input } from '../commons/input/Input'
import { Select } from '../commons/select/Select'
import { Textarea } from '../commons/textarea/Textarea'
import { Formik, Form } from 'formik'

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

type FormValues = {
  title: string
  status: string
  priority: string
  date: string
  summary: string
  description: string
  assignee: string
}

export const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
  const initialValues = {
    title: '',
    status: '',
    priority: '',
    date: '',
    summary: '',
    description: '',
    assignee: '',
  }

  const handleSubmit = (values: FormValues) => {
    console.log('Submitted values:', values)
    onClose()
  }

  return isOpen ? (
    <Modal className={styles.modal} show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new task</Modal.Title>
      </Modal.Header>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Modal.Body className={styles.bodyWrapper}>
            <Input name="title" label="Title of Project" placeholder="Title of Project" />

            <div className={styles.selectContainers}>
              <Select name="status" label="Status" options={statusOptions} />
              <Select name="priority" label="Priority" options={priorityOptions} />
            </div>

            <Input name="date" label="Date" placeholder="Select date" type="date" />
            <Input name="summary" label="Summary" placeholder="Summary" />
            <Textarea name="description" label="Description" placeholder="Description" />
            <Input name="assignee" label="Assignee" placeholder="Assignee" />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>

            <Button variant="primary" type="submit">
              Create
            </Button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  ) : null
}
