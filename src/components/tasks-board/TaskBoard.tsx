import React from 'react'
import styles from './TaskBoard.module.scss'
import { Card } from './card/Card'

export const TaskBoard = () => {
  return (
    <div className={styles.taskBoard}>
      <div className={styles.toDoBlock}>
        <p className={styles.toDoText}>TO DO</p>
        <div className={styles.cardsWrapper}>
          <Card />
          <Card />
        </div>
      </div>
      <div className={styles.doingBlock}>
        <p className={styles.doingText}>DOING</p>
        <div className={styles.cardsWrapper}>
          <Card />
        </div>
      </div>
      <div className={styles.doneBlock}>
        <p className={styles.doneText}>DONE</p>
        <div className={styles.cardsWrapper}>
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
