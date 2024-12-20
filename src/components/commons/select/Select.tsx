import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './Select.module.scss'

type SelectOption = {
  label: string
  value: string
}

type SelectProps = {
  label: string
  value: string
  options: SelectOption[]
}

export const Select = ({ label, value, options }: SelectProps) => (
  <div className={styles.wrapper}>
    <FloatingLabel label={label} className="mb-3">
      <Form.Select value={value}>
        {options.map((option: SelectOption) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </FloatingLabel>
  </div>
)
