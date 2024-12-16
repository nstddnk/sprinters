import React, { useState } from 'react'
import styles from './Menu.module.scss'
import { TasksIcon } from '../../icons/tasks.icon'
import { MenuItem } from './menu-item/MenuItem'
import { NotificationIcon } from '../../icons/notification.icon'
import { AnalyticsIcon } from '../../icons/analytics.icon'
import { CreateNewTaskButtonIcon } from '../../icons/create-new-task-button.icon'

export const Menu = () => {
  const [activeMenuItemId, setActiveMenuItemId] = useState<string>('1')

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
  }

  const handleCreateNewTask = () => {
    console.log('Create New Task clicked')
  }

  return (
    <div className={styles.menuWrapper}>
      <button className={styles.createTaskButton} onClick={handleCreateNewTask}>
        <CreateNewTaskButtonIcon />
        Create New Task
      </button>
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
    </div>
  )
}
