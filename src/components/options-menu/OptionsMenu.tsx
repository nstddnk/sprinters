import React, { useState } from 'react'
import { ThreeDotsIcon } from '../../icons/three-dots.icon'
import styles from './OptionsMenu.module.scss'
import { MenuItem } from '../menu/menu-item/MenuItem'
import { TasksIcon } from '../../icons/tasks.icon'
import { NotificationIcon } from '../../icons/notification.icon'
import { AnalyticsIcon } from '../../icons/analytics.icon'
import { EditIcon } from '../../icons/edit.icon'
import { DeleteIcon } from '../../icons/delete.icon'

export const OptionsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const menuItems = [
    {
      Icon: <EditIcon />,
      title: 'Edit',
      id: '1',
    },
    {
      Icon: <DeleteIcon />,
      title: 'Delete',
      id: '2',
    },
  ]

  return (
    <div className={styles.optionsMenuWrapper}>
      <button className={styles.optionsMenuButton} type="button" onClick={toggleMenu}>
        <ThreeDotsIcon />
      </button>
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          {menuItems.map(({ id, Icon, ...item }) => (
            <MenuItem
              key={id}
              {...item}
              isActive={false}
              onClick={() => {
                console.log('hello')
              }}
            >
              {Icon}
            </MenuItem>
          ))}
        </div>
      )}
    </div>
  )
}
