export type Tag = {
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  text: string
}

export type Comment = {
  text: string
  userName: string
}

type TaskStatus = 'TODO' | 'DOING' | 'DONE'

export type Task = {
  id: number
  status: TaskStatus
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
