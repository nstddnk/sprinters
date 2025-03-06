import React, { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import { TasksIcon } from '../../icons/tasks.icon'
import { MenuItem } from '../common/menu-item/MenuItem'
import { SettingsIcon } from '../../icons/settings.icon'
import { CreateNewTaskButtonIcon } from '../../icons/create-new-task-button.icon'
import { LogOutButtonIcon } from '../../icons/log-out-button.icon'
import { useNavigate } from 'react-router'
import { TaskModal } from '../task-modal/TaskModal'
import { useSelector } from 'react-redux'
import { getTaskEditingId, getTaskListIds } from '../../store/slices/tasksSlice'

export const Menu = () => {
  const editingId = useSelector(getTaskEditingId)
  const taskListIds = useSelector(getTaskListIds)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeMenuItemId, setActiveMenuItemId] = useState<string>('1')
  const navigate = useNavigate()

  useEffect(() => {
    if (editingId) {
      setIsModalOpen(true)
    }
  }, [editingId])

  const menuItems = [
    {
      Icon: <TasksIcon isActive={'1' === activeMenuItemId} />,
      title: 'Tasks',
      counter: taskListIds.length,
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

  const handleLogOut = () => {
    navigate('/login')
  }

  return (
    <>
      <div className={styles.menuWrapper}>
        <button className={styles.createTaskButton} onClick={() => setIsModalOpen(true)}>
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
            isClickable={true}
          >
            {Icon}
          </MenuItem>
        ))}
        <button onClick={handleLogOut} className={styles.logOutButton}>
          <LogOutButtonIcon />
          Log out
        </button>
      </div>
      {isModalOpen && <TaskModal onClose={() => setIsModalOpen(false)} editingId={editingId} />}
    </>
  )
}
