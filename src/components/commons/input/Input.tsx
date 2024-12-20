import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './Input.module.scss'

type InputProps = {
  label: string
  type?: string
  placeholder?: string
}

export const Input = ({ type = 'text', label, placeholder }: InputProps) => (
  <div className={styles.wrapper}>
    <FloatingLabel label={label} className="mb-3">
      <Form.Control type={type} placeholder={placeholder} />
    </FloatingLabel>
  </div>
)
