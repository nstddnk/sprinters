import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

type SelectProps = {
  label: string
  value: string
}

export const Select = ({ label, value }: SelectProps) => (
  <div>
    <FloatingLabel label={label} className="mb-3">
      <Form.Select value={value}>
        <option value="" disabled>
          Select {label}
        </option>
      </Form.Select>
    </FloatingLabel>
  </div>
)
