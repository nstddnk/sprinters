import React from 'react'
import styles from './Column.module.scss'

import { useDrop } from 'react-dnd'
import { Task, TaskStatusType } from '../task.interface'
import { Card } from '../card/Card'

type ColumnProps = {
  tasks: Task[]
  onDeleteTask: (taskId: string) => void
  onEditTask: (taskId: string) => void
  onUpdateTask: (task: Task) => void
  type: TaskStatusType
}
export const Column = ({ tasks, type, onDeleteTask, onEditTask, onUpdateTask }: ColumnProps) => {
  const currentTasks = tasks.filter((task: Task) => task.status === type.value)

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ['random'],
    drop: (item: Task) => {
      const updatedItem = tasks.find((task) => task.id === item.id)

      if (updatedItem) {
        onUpdateTask({ ...updatedItem, status: type.value })
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  // const isActive = isOver && canDrop
  // let backgroundColor = '#222'
  // if (isActive) {
  //   backgroundColor = 'darkgreen'
  // } else if (canDrop) {
  //   backgroundColor = 'darkkhaki'
  // }

  return (
    <div className={styles.taskColumn} ref={drop}>
      <p className={styles.columnTitle}>{type.label}</p>
      <div className={styles.cardsWrapper}>
        {currentTasks.map((task) => (
          <Card {...task} key={task.id} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
        ))}
      </div>
    </div>
  )
}
