import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from './TaskModal.module.scss'
import { Input } from '../common/input/Input'
import { Select } from '../common/select/Select'
import { Textarea } from '../common/textarea/Textarea'
import { Form, Formik } from 'formik'
import { Tag, Task } from '../tasks-board/task.interface'
import { priorityOptions, statusOptions, TaskStatusEnum } from '../tasks-board/task.options'

type TaskModalProps = {
  isOpen: boolean
  onClose: () => void
  onCreateTask: (task: Task) => void
}

export type FormValues = {
  title: string
  status: string
  priority: string
  date: string
  summary: string
  description: string
  assignee: string
  imgUrl: string
  link: string
  fileUrl: string
  tags: Tag[]
}

export const TaskModal = ({ isOpen, onCreateTask, onClose }: TaskModalProps) => {
  const initialValues = {
    title: '',
    status: TaskStatusEnum.DONE,
    priority: '',
    date: '',
    summary: '',
    description: '',
    assignee: '',
    imgUrl: '',
    link: '',
    fileUrl: '',
    tags: [],
  }

  const handleSubmit = (values: FormValues) => {
    onCreateTask(values as unknown as Task)
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

            <Input name="imgUrl" label="Image URL" placeholder="Paste image URL" />
            <Input name="link" label="External Link" placeholder="Paste external link" />
            <Input name="fileUrl" label="File URL" placeholder="Paste file URL" />
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
