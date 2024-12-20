import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './Textarea.module.scss'

type TextareaProps = {
  label: string
  placeholder?: string
}

export const Textarea = ({ label, placeholder }: TextareaProps) => (
  <div className={styles.wrapper}>
    <FloatingLabel label={label} className="mb-3">
      <Form.Control as="textarea" placeholder={placeholder} style={{ height: '100px' }} />
    </FloatingLabel>
  </div>
)
