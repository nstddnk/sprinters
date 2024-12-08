import React, { useState } from 'react'
import './Menu.css'
import { TasksIcon } from '../../icons/tasks.icon'
import { MenuItem, MenuItemProps } from './menu-item/MenuItem'
import { NotificationIcon } from '../../icons/notification.icon'
import { AnalyticsIcon } from '../../icons/analytics.icon'

export const Menu = () => {
  const [activeMenuItemId, setActiveMenuItemId] = useState<string>('3')

  const menuItems = [
    {
      Icon: <TasksIcon />,
      title: 'Tasks',
      counter: '11',
      id: '1',
    },
    {
      Icon: <NotificationIcon />,
      title: 'Notifications',
      counter: '17',
      id: '2',
    },
    {
      Icon: <AnalyticsIcon />,
      title: 'Analytics',
      counter: '5',
      id: '3',
    },
  ]

  return (
    <div className="menu-wrapper">
      {menuItems.map(({ id, ...item }) => (
        <MenuItem
          {...item}
          key={id}
          isActive={id === activeMenuItemId}
          onClick={() => {
            setActiveMenuItemId(id)
          }}
        />
      ))}
    </div>
  )
}
