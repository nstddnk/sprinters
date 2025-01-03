import React, { useState } from 'react'
import styles from './Home.module.scss'
import { Menu } from '../../components/menu/Menu'
import { TaskBoard } from '../../components/tasks-board/TaskBoard'
import { Task } from '../../components/tasks-board/task.interface'
import { IssueTypeEnum, TaskStatusEnum } from '../../components/tasks-board/task.options'

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      status: TaskStatusEnum.TODO,
      title: 'My to-do list’s to-do list.',
      createdAt: '12th Jan',
      createdBy: 'Mark',
      description: 'Just one step closer to pretending you have it all together.',
      imgUrl: 'https://tech-admin.deliveryhero.net/wp-content/uploads/2021/04/Gofer-.png',
      link: 'https://docs.google.com/',
      issueType: IssueTypeEnum.Bug,
      tags: [
        {
          type: 'danger',
          text: 'Oops',
        },
        {
          type: 'info',
          text: 'WillDoItTomorrowForSure',
        },
        {
          type: 'success',
          text: 'ImpossiblyPossible',
        },
        {
          type: 'dark',
          text: 'AlmostDoneButNotQuite',
        },
      ],
    },
  ])

  const handleDeleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(filteredTasks)
  }
  console.log(tasks)

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.leftPanel}>
        <Menu onCreateTask={(task: Task) => setTasks([...tasks, task])} />
      </div>
      <div className={styles.rightPanel}>
        <TaskBoard onDeleteTask={handleDeleteTask} tasks={tasks} />
      </div>
    </div>
  )
}
