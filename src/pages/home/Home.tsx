import React, { useState } from 'react'
import styles from './Home.module.scss'
import { Menu } from '../../components/menu/Menu'
import { TaskBoard } from '../../components/tasks-board/TaskBoard'
import { Task } from '../../components/tasks-board/task.interface'

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([
    // {
    //   id: 1,
    //   status: 'TODO',
    //   title: 'My to-do list’s to-do list.',
    //   createdAt: '12th Jan',
    //   createdBy: 'Mark',
    //   description: 'Just one step closer to pretending you have it all together.',
    //   imgUrl: 'https://tech-admin.deliveryhero.net/wp-content/uploads/2021/04/Gofer-.png',
    //   link: 'https://docs.google.com/',
    //   fileUrl: 'main.psd',
    //   tags: [
    //     {
    //       type: 'warning',
    //       text: 'Oops',
    //     },
    //     {
    //       type: 'primary',
    //       text: 'WillDoItTomorrowForSure',
    //     },
    //     {
    //       type: 'success',
    //       text: 'ImpossiblyPossible',
    //     },
    //     {
    //       type: 'secondary',
    //       text: 'AlmostDoneButNotQuite',
    //     },
    //   ],
    //   comments: [
    //     {
    //       userName: 'Mark',
    //       text: 'wow',
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   status: 'DONE',
    //   title: 'Professional procrastination tracker.',
    //   createdAt: '16th Jan',
    //   createdBy: 'Emilia',
    //   description: 'Step 1: Add task. Step 2: Panic.',
    //   imgUrl: 'https://tech-admin.deliveryhero.net/wp-content/uploads/2021/04/Gofer-.png',
    //   link: 'https://docs.google.com/',
    //   fileUrl: 'wow.psd',
    //   tags: [
    //     {
    //       type: 'primary',
    //       text: 'CoffeeFirst',
    //     },
    //     {
    //       type: 'secondary',
    //       text: 'StressButMakeItProductive',
    //     },
    //     {
    //       type: 'danger',
    //       text: 'ForeverPending',
    //     },
    //   ],
    //   comments: [
    //     {
    //       userName: 'Mark',
    //       text: 'wow',
    //     },
    //     {
    //       userName: 'Mark',
    //       text: 'wow',
    //     },
    //     {
    //       userName: 'Mark',
    //       text: 'wow',
    //     },
    //     {
    //       userName: 'Mark',
    //       text: 'wow',
    //     },
    //   ],
    // },
  ])

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.leftPanel}>
        <Menu onCreateTask={(task: Task) => setTasks([...tasks, task])} />
      </div>
      <div className={styles.rightPanel}>
        <TaskBoard tasks={tasks} />
      </div>
    </div>
  )
}
