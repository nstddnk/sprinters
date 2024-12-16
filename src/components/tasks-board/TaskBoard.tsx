import React from 'react'
import styles from './TaskBoard.module.scss'
import { Card } from './card/Card'
import { Task } from '../../pages/home/home.interface'

type TaskBoardProps = {
  tasks: Task[]
}

type FilteredTasks = {
  todos: Task[]
  doing: Task[]
  done: Task[]
}

export const TaskBoard = ({ tasks }: TaskBoardProps) => {
  const { todos, doing, done } = tasks.reduce(
    (acc: FilteredTasks, task) => {
      if (task.status === 'TODO') {
        return { ...acc, todos: [...acc.todos, task] }
      }
      if (task.status === 'DOING') {
        return { ...acc, doing: [...acc.doing, task] }
      }
      if (task.status === 'DONE') {
        return { ...acc, done: [...acc.done, task] }
      }
      return acc
    },
    { todos: [], doing: [], done: [] }, // Начальные значения для каждого массива
  )
  return (
    <div className={styles.taskBoard}>
      <div className={styles.taskColumn}>
        <p className={styles.columnTitle}>TO DO</p>
        <div className={styles.cardsWrapper}>
          {todos.map((task) => (
            <Card {...task} key={task.id} />
          ))}
        </div>
      </div>
      <div className={styles.taskColumn}>
        <p className={styles.columnTitle}>DOING</p>
        <div className={styles.cardsWrapper}>
          {doing.map((task) => (
            <Card {...task} key={task.id} />
          ))}
        </div>
      </div>
      <div className={styles.taskColumn}>
        <p className={styles.columnTitle}>DONE</p>
        <div className={styles.cardsWrapper}>
          {done.map((task) => (
            <Card {...task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
