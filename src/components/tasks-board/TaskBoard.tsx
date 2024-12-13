import React from 'react'
import styles from './TaskBoard.module.scss'
import { Card } from './card/Card'

export const TaskBoard = () => {
  return (
    <div className={styles.taskBoard}>
      <div className={styles.taskColumn}>
        <p className={styles.columnTitle}>TO DO</p>
        <div className={styles.cardsWrapper}>
          <Card />
          <Card />
        </div>
      </div>
      <div className={styles.taskColumn}>
        <p className={styles.columnTitle}>DOING</p>
        <div className={styles.cardsWrapper}>
          <Card />
        </div>
      </div>
      <div className={styles.taskColumn}>
        <p className={styles.columnTitle}>DONE</p>
        <div className={styles.cardsWrapper}>
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
