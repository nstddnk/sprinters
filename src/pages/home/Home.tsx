import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { Menu } from '../../components/menu/Menu'
import { TaskBoard } from '../../components/tasks-board/TaskBoard'
import { Task } from '../../components/tasks-board/task.interface'
import { IssueTypeEnum, TaskStatusEnum } from '../../components/tasks-board/task.options'
import { TaskModal } from '../../components/task-modal/TaskModal'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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

  const [currentEditingId, setCurrentEditingId] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const currentEditingTask = tasks.find((task) => task.id === currentEditingId)

  const handleUpdateTask = (updatedTask: Task) => {
    const filteredTasks = tasks.filter((task) => task.id !== updatedTask.id)
    setTasks([...filteredTasks, updatedTask])
  }

  const handleDeleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(filteredTasks)
  }

  useEffect(() => {
    if (currentEditingId) {
      setIsModalOpen(true)
    }
  }, [currentEditingId])

  useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(false)
      setCurrentEditingId(null)
    }
  }, [isModalOpen])

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.leftPanel}>
        <Menu taskCounter={tasks.length} onOpenModal={() => setIsModalOpen(true)} />
      </div>
      <div className={styles.rightPanel}>
        <DndProvider backend={HTML5Backend}>
          <TaskBoard
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
            tasks={tasks}
            onEditTask={setCurrentEditingId}
          />
        </DndProvider>
      </div>
      {isModalOpen && (
        <TaskModal
          onClose={() => setIsModalOpen(false)}
          onCreateTask={(task: Task) => setTasks([...tasks, task])}
          task={currentEditingTask}
          onUpdateTask={handleUpdateTask}
        />
      )}
    </div>
  )
}
