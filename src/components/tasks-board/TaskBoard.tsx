import React from 'react'
import styles from './TaskBoard.module.scss'
import { Task } from './task.interface'
import { doingOption, doneOption, toDoOption } from './task.options'
import { EmptyTaskBoardIcon } from '../../icons/empty-task-board.icon'
import { Column } from './column/Column'

type TaskBoardProps = {
  tasks: Task[]
  onDeleteTask: (taskId: string) => void
  onEditTask: (taskId: string) => void
  onUpdateTask: (task: Task) => void
}

export const TaskBoard = ({ tasks, onDeleteTask, onEditTask, onUpdateTask }: TaskBoardProps) => {
  return (
    <>
      {tasks.length > 0 ? (
        <div className={styles.taskBoard}>
          <Column
            type={toDoOption}
            tasks={tasks}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
            onUpdateTask={onUpdateTask}
          />
          <Column
            type={doingOption}
            tasks={tasks}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
            onUpdateTask={onUpdateTask}
          />
          <Column
            type={doneOption}
            tasks={tasks}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
            onUpdateTask={onUpdateTask}
          />
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
