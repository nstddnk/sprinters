import React from 'react'
import { servedCountries } from '../../utils/served-countries'
import { Arrow } from '../../icons/Arrow'
import { DayPicker } from 'react-day-picker'
import classNames from 'react-day-picker/style.module.css'
import styles from './RightSidebar.module.scss'
import { Button } from 'react-bootstrap'

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

      <div>
        <h3 className={styles.title}>Календар поїздок</h3>

        <div className={styles.calendarWrapper}>
          <Button className={styles.buyButton}>
            <span className={styles.icon}>＋</span>
            <span>Купити квиток</span>
          </Button>

          <DayPicker animate mode="multiple" className={styles.daypicker} classNames={classNames} />
        </div>
      </div>
    </div>
  )
}
