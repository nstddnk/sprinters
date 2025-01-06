import React, { useState } from 'react'
import styles from './Menu.module.scss'
import { TasksIcon } from '../../icons/tasks.icon'
import { MenuItem } from '../common/menu-item/MenuItem'
import { SettingsIcon } from '../../icons/settings.icon'
import { CreateNewTaskButtonIcon } from '../../icons/create-new-task-button.icon'
import classNames from 'classnames'
import { TaskModal } from '../task-modal/TaskModal'
import { Task } from '../tasks-board/task.interface'
import { LogOutButtonIcon } from '../../icons/log-out-button.icon'

type MenuProps = {
  onCreateTask: (task: Task) => void
}

export const Menu = ({ onCreateTask }: MenuProps) => {
  const [activeMenuItemId, setActiveMenuItemId] = useState<string>('1')
  const [isCreateTaskActive, setIsCreateTaskActive] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLogOutActive, setIsLogOutActive] = useState(false)

  const menuItems = [
    {
      Icon: <TasksIcon isActive={'1' === activeMenuItemId} />,
      title: 'Tasks',
      counter: '3',
      id: '1',
    },
    {
      Icon: <SettingsIcon isActive={'2' === activeMenuItemId} />,
      title: 'Settings',
      id: '2',
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

  const handleLogOutClick = () => {
    setIsLogOutActive(true)
    setTimeout(() => setIsLogOutActive(false), 300)
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
      <button
        className={classNames(styles.logOutButton, { [styles.active]: isLogOutActive })}
        onClick={handleLogOutClick}
      >
        <LogOutButtonIcon />
        Log out
      </button>
      <TaskModal isOpen={isModalOpen} onClose={closeModal} onCreateTask={onCreateTask} />
    </div>
  )
}
