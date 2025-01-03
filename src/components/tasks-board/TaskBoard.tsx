import React from 'react'
import styles from './TaskBoard.module.scss'
import { Card } from './card/Card'
import { Task } from './task.interface'
import { doingOption, doneOption, TaskStatusEnum, toDoOption } from './task.options'

type TaskBoardProps = {
  tasks: Task[]
  onDeleteTask: (taskId: string) => void
}

type FilteredTasks = {
  todos: Task[]
  doing: Task[]
  done: Task[]
}

export const TaskBoard = ({ tasks, onDeleteTask }: TaskBoardProps) => {
  const { todos, doing, done } = tasks.reduce(
    (acc: FilteredTasks, task) => {
      if (task.status === TaskStatusEnum.TODO) {
        return { ...acc, todos: [...acc.todos, task] }
      }
      if (task.status === TaskStatusEnum.DOING) {
        return { ...acc, doing: [...acc.doing, task] }
      }
      if (task.status === TaskStatusEnum.DONE) {
        return { ...acc, done: [...acc.done, task] }
      }
      return acc
    },
    { todos: [], doing: [], done: [] },
  )

  return (
    <div className={styles.taskBoard}>
      <div className={styles.taskColumn}>
        <p className={styles.columnTitle}>{toDoOption.label}</p>
        <div className={styles.cardsWrapper}>
          {todos.map((task) => (
            <Card {...task} key={task.id} onDeleteTask={onDeleteTask} />
          ))}
        </div>
      </div>
      <div className={styles.taskColumn}>
        <p className={styles.columnTitle}>{doingOption.label}</p>
        <div className={styles.cardsWrapper}>
          {doing.map((task) => (
            <Card {...task} key={task.id} onDeleteTask={onDeleteTask} />
          ))}
        </div>
      </div>
      <div className={styles.taskColumn}>
        <p className={styles.columnTitle}>{doneOption.label}</p>
        <div className={styles.cardsWrapper}>
          {done.map((task) => (
            <Card {...task} key={task.id} onDeleteTask={onDeleteTask} />
          ))}
        </div>
      </div>
    </div>
  )
}
