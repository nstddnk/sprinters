import styles from './RIghtSidebar.module.scss'
import React from 'react'
import { servedCountries } from '../../utils/served-countries'
import { Arrow } from '../../icons/Arrow'

export const RightSidebar = () => {
  return (
    <div className={styles.rightSidebar}>
      <div className={styles.countryBlock}>
        <h3 className={styles.title}>Обслуговуємо країни</h3>
        <ul className={styles.list}>
          {servedCountries.map(({ name, icon: Icon }, index) => (
            <li key={index} className={styles.listItem}>
              <Icon />
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <button className={styles.showAll}>Усі країни</button>
        <Arrow />
        <div className={styles.divider} />
      </div>

      <div className={styles.calendarBlock}>
        <h3 className={styles.title}>Календар поїздок</h3>
        <button className={styles.buyButton}>
          <span>＋</span> Купити квиток
        </button>
      </div>
    </div>
  )
}
