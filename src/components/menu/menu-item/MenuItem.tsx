import React from 'react'
import styles from './MenuItem.module.scss'
import cn from 'classnames'

export type MenuItemProps = {
  title: string
  counter: string
  children: React.JSX.Element
  isActive: boolean
  onClick: () => void
}

export const MenuItem = ({ title, counter, children, isActive, onClick }: MenuItemProps) => {
  return (
    <div
      className={cn(styles.menuItemWrapper, { [styles.menuItemActive]: isActive })}
      onClick={onClick}
    >
      <div className={styles.contentButton}>
        <div className={styles.leftContentButton}>
          {children}
          <p className={cn(styles.buttonText, { [styles.buttonTextActive]: isActive })}>{title}</p>
        </div>
        <div
          className={cn(styles.buttonCounter, {
            [styles.buttonCounterActive]: isActive,
          })}
        >
          <p className={cn(styles.counterText, { [styles.counterTextActive]: isActive })}>
            {counter}
          </p>
        </div>
      </div>
    </div>
  )
}
