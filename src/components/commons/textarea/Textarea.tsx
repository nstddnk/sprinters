import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

type TextareaProps = {
  label: string
  value: string
  placeholder?: string
}

export const Textarea = ({ label, value, placeholder }: TextareaProps) => (
  <div>
    <FloatingLabel label={label} className="mb-3">
      <Form.Control
        as="textarea"
        value={value}
        placeholder={placeholder}
        style={{ height: '100px' }}
      />
    </FloatingLabel>
  </div>
)
