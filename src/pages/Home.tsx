import React from 'react'
import styles from './Home.module.scss'
import { Menu } from '../components/menu/Menu'
import { TaskBoard } from '../components/tasks-board/TaskBoard'

export const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.leftPanel}>
        <Menu />
      </div>
      <TaskBoard />
    </div>
  )
}
