import React from 'react'
import styles from './App.module.scss'

import { Home } from './pages/Home'

export const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Home />
    </div>
  )
}
