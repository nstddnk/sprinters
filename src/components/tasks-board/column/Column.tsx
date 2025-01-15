import React from 'react'
import styles from './Column.module.scss'

import { useDrop } from 'react-dnd'
import { Task, TaskStatusType } from '../task.interface'
import { Card } from '../card/Card'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../../store/slices/tasksSlice'

type ColumnProps = {
  tasks: Task[]
  type: TaskStatusType
}
export const Column = ({ tasks, type }: ColumnProps) => {
  const dispatch = useDispatch()
  const currentTasks = tasks.filter((task: Task) => task.status === type.value)

  const [, drop] = useDrop({
    accept: ['random'],
    drop: (item: Task) => {
      const updatedItem = tasks.find((task) => task.id === item.id)

      if (updatedItem) {
        dispatch(updateTask({ ...updatedItem, status: type.value }))
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  return (
    <div className={styles.taskColumn} ref={drop}>
      <p className={styles.columnTitle}>{type.label}</p>
      <div className={styles.cardsWrapper}>
        {currentTasks.map((task) => (
          <Card {...task} key={task.id} />
        ))}
      </div>
    </div>
  )
}
