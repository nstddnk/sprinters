import { TaskStatusEnum } from './task.options'

export type TaskStatusType = {
  value: TaskStatusEnum
  label: 'TO DO' | 'DOING' | 'DONE'
}

export type Tag = {
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  text: string
}

export type Comment = {
  text: string
  userName: string
}

export type Task = {
  id: number
  status: TaskStatusEnum
  title: string
  createdAt: string
  createdBy: string
  description: string
  imgUrl: string
  link: string
  fileUrl: string
  tags: Tag[]
  comments: Comment[]
}
