import React from 'react'
import { useField } from 'formik'
import { FileUploader as ReactDragDropFileUploader } from 'react-drag-drop-files'

type FileUploaderProps = {
  label: string
  name: string
  types: string[]
}

export const FileUploader = ({ label, name, types }: FileUploaderProps) => {
  const [field] = useField(name)
  return (
    <div>
      <label>{label}</label>
      <ReactDragDropFileUploader {...field} name={name} types={types} file={field.value} />
    </div>
  )
}
