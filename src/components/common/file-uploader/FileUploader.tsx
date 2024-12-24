import React from 'react'
import { useField } from 'formik'
import { FileUploader as ReactDragDropFileUploader } from 'react-drag-drop-files'

type FileUploaderProps = {
  name: string
  types: string[]
}

export const FileUploader = ({ name, types }: FileUploaderProps) => {
  const [field] = useField(name)
  return (
    <div>
      <ReactDragDropFileUploader {...field} name={name} types={types} file={field.value} />
    </div>
  )
}
