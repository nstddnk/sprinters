import { TaskStatusType } from './task.interface'

export enum TaskStatusEnum {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export const toDoOption: TaskStatusType = { value: TaskStatusEnum.TODO, label: 'TO DO' }
export const doingOption: TaskStatusType = { value: TaskStatusEnum.DOING, label: 'DOING' }
export const doneOption: TaskStatusType = { value: TaskStatusEnum.DONE, label: 'DONE' }

export const statusOptions: TaskStatusType[] = [toDoOption, doingOption, doneOption]

export const priorityOptions = [
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
]
