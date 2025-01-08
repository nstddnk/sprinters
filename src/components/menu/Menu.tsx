import React, { useState } from 'react'
import styles from './Menu.module.scss'
import { TasksIcon } from '../../icons/tasks.icon'
import { MenuItem } from '../common/menu-item/MenuItem'
import { SettingsIcon } from '../../icons/settings.icon'
import { CreateNewTaskButtonIcon } from '../../icons/create-new-task-button.icon'
import { LogOutButtonIcon } from '../../icons/log-out-button.icon'

type MenuProps = {
  onOpenModal: () => void
  taskCounter: number
}

export const Menu = ({ onOpenModal, taskCounter }: MenuProps) => {
  const [activeMenuItemId, setActiveMenuItemId] = useState<string>('1')

  const menuItems = [
    {
      Icon: <TasksIcon isActive={'1' === activeMenuItemId} />,
      title: 'Tasks',
      counter: taskCounter,
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
  }

  return (
    <div className={styles.menuWrapper}>
      <button className={styles.createTaskButton} onClick={onOpenModal}>
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
      <button className={styles.logOutButton}>
        <LogOutButtonIcon />
        Log out
      </button>
    </div>
  )
}
