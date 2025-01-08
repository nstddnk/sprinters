import React from 'react'
import styles from './TaskBoard.module.scss'
import { Card } from './card/Card'
import { Task } from './task.interface'
import { doingOption, doneOption, TaskStatusEnum, toDoOption } from './task.options'
import { EmptyTaskBoardIcon } from '../../icons/empty-task-board.icon'

type TaskBoardProps = {
  tasks: Task[]
  onDeleteTask: (taskId: string) => void
  onEditTask: (taskId: string) => void
}

type FilteredTasks = {
  todos: Task[]
  doing: Task[]
  done: Task[]
}

export const TaskBoard = ({ tasks, onDeleteTask, onEditTask }: TaskBoardProps) => {
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
    <>
      {tasks.length > 0 ? (
        <div className={styles.taskBoard}>
          <div className={styles.taskColumn}>
            <p className={styles.columnTitle}>{toDoOption.label}</p>
            <div className={styles.cardsWrapper}>
              {todos.map((task) => (
                <Card {...task} key={task.id} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
              ))}
            </div>
          </div>
          <div className={styles.taskColumn}>
            <p className={styles.columnTitle}>{doingOption.label}</p>
            <div className={styles.cardsWrapper}>
              {doing.map((task) => (
                <Card {...task} key={task.id} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
              ))}
            </div>
          </div>
          <div className={styles.taskColumn}>
            <p className={styles.columnTitle}>{doneOption.label}</p>
            <div className={styles.cardsWrapper}>
              {done.map((task) => (
                <Card {...task} key={task.id} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.emptyIconWrapper}>
          <EmptyTaskBoardIcon />
          <p className={styles.emptyBoardText}>No tasks, no worries. Want to start planning?</p>
        </div>
      )}
    </>
  )
}
