import styles from './Header.module.scss'
import { LogoIcon } from '../../icons/LogoIcon'
import { navItems } from '../../utils/nav-items'
import { Button } from 'react-bootstrap'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.logoNavigation}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>

        <div className={styles.navItems}>
          {navItems.map((item) => (
            <div
              key={item.href}
              className={`${styles.navItem} ${currentPath === item.href ? styles.active : ''}`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.auth}>
        <Button className={`${styles.createProfile} text-decoration-none`} variant="link" size="sm">
          Створити профіль
        </Button>

        <div className={styles.divider} />

        <Button className={`${styles.login} ${styles.active}`} size="sm" active>
          Увійти
        </Button>
      </div>
    </nav>
  )
}
