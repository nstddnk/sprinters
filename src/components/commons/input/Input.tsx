import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './Input.module.scss'
import { useField } from 'formik'

type InputProps = {
  label: string
  type?: string
  placeholder: string
  name: string
}

export const Input = ({ name, type = 'text', label, placeholder }: InputProps) => {
  const [field] = useField(name)

  return (
    <div className={styles.wrapper}>
      <FloatingLabel label={label} className="mb-3">
        <Form.Control {...field} type={type} placeholder={placeholder} />
      </FloatingLabel>
    </div>
  )
}
