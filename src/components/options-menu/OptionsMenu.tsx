import React, { useEffect, useRef, useState } from 'react'
import { ThreeDotsIcon } from '../../icons/three-dots.icon'
import styles from './OptionsMenu.module.scss'
import { MenuItem } from '../common/menu-item/MenuItem'
import { EditIcon } from '../../icons/edit.icon'
import { DeleteIcon } from '../../icons/delete.icon'
import cn from 'classnames'

export const OptionsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        event.target instanceof Node &&
        !modalRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

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
    <div className={cn(styles.wrapper, { [styles.isActiveMenu]: isMenuOpen })} ref={modalRef}>
      <button className={styles.dotsButton} type="button" onClick={toggleMenu}>
        <ThreeDotsIcon />
      </button>
      <div className={cn(styles.menuItems, { [styles.show]: isMenuOpen })}>
        {isMenuOpen &&
          menuItems.map(({ id, Icon, ...item }, index) => (
            <React.Fragment key={id}>
              <MenuItem
                size="small"
                {...item}
                isActive={false}
                onClick={() => {
                  console.log(item.title)
                }}
              >
                {Icon}
              </MenuItem>
              {index !== menuItems.length - 1 && <div className="border-top" />}
            </React.Fragment>
          ))}
      </div>
    </div>
  )
}
