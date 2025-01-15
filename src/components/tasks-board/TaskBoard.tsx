import React from 'react'
import styles from './TaskBoard.module.scss'
import { Task } from './task.interface'
import { doingOption, doneOption, toDoOption } from './task.options'
import { EmptyTaskBoardIcon } from '../../icons/empty-task-board.icon'
import { Column } from './column/Column'
import { useSelector } from 'react-redux'
import { getTasksById } from '../../store/slices/tasksSlice'

export const TaskBoard = () => {
  const tasksById = useSelector(getTasksById)

  const tasks = Object.values(tasksById)

  return (
    <>
      {tasks.length > 0 ? (
        <div className={styles.taskBoard}>
          <Column type={toDoOption} tasks={tasks} />
          <Column type={doingOption} tasks={tasks} />
          <Column type={doneOption} tasks={tasks} />
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
