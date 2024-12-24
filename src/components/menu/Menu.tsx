import React, { useState } from 'react'
import styles from './Menu.module.scss'
import { TasksIcon } from '../../icons/tasks.icon'
import { MenuItem } from './menu-item/MenuItem'
import { NotificationIcon } from '../../icons/notification.icon'
import { AnalyticsIcon } from '../../icons/analytics.icon'
import { CreateNewTaskButtonIcon } from '../../icons/create-new-task-button.icon'
import classNames from 'classnames'
import { TaskModal } from '../task-modal/TaskModal'
import { Task } from '../tasks-board/task.interface'

type MenuProps = {
  onCreateTask: (task: Task) => void
}

export const Menu = ({ onCreateTask }: MenuProps) => {
  const [activeMenuItemId, setActiveMenuItemId] = useState<string | null>(null)
  const [isCreateTaskActive, setIsCreateTaskActive] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const menuItems = [
    {
      Icon: <TasksIcon isActive={'1' === activeMenuItemId} />,
      title: 'Tasks',
      counter: '11',
      id: '1',
    },
    {
      Icon: <NotificationIcon isActive={'2' === activeMenuItemId} />,
      title: 'Notifications',
      counter: '17',
      id: '2',
    },
    {
      Icon: <AnalyticsIcon isActive={'3' === activeMenuItemId} />,
      title: 'Analytics',
      counter: '5',
      id: '3',
    },
  ]

  const handleMenuItemClick = (id: string) => () => {
    setActiveMenuItemId(id)
    setIsCreateTaskActive(false)
  }

  const handleCreateNewTask = () => {
    setIsCreateTaskActive(true)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsCreateTaskActive(false)
  }

  return (
    <div className={styles.menuWrapper}>
      <button
        className={classNames(styles.createTaskButton, { [styles.active]: isCreateTaskActive })}
        onClick={handleCreateNewTask}
      >
        <CreateNewTaskButtonIcon />
        Create new task
      </button>
      <div className="border-top my-3" />
      {menuItems.map(({ id, Icon, ...item }) => (
        <MenuItem
          {...item}
          key={id}
          isActive={id === activeMenuItemId}
          onClick={handleMenuItemClick(id)}
        >
          {Icon}
        </MenuItem>
      ))}
      <TaskModal isOpen={isModalOpen} onClose={closeModal} onCreateTask={onCreateTask} />
    </div>
  )
}
