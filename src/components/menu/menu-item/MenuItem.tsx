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
          <span className={cn(styles.buttonText, { [styles.buttonTextActive]: isActive })}>
            {title}
          </span>
        </div>
        <div
          className={cn(styles.buttonCounter, {
            [styles.buttonCounterActive]: isActive,
          })}
        >
          <div className={cn(styles.counterText, { [styles.counterTextActive]: isActive })}>
            {counter}
          </div>
        </div>
      </div>
    </div>
  )
}
