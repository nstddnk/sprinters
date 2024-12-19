import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

type InputProps = {
  label: string
  type?: string
  value: string
  placeholder?: string
}

export const Input = ({ type = 'text', label, value, placeholder }: InputProps) => (
  <div>
    <FloatingLabel label={label} className="mb-3">
      <Form.Control type={type} value={value} placeholder={placeholder} />
    </FloatingLabel>
  </div>
)
