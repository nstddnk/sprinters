import React from 'react'
import styles from './Employees.module.scss'
import { employees } from '../../utils/employees'

export const Employees = () => {
  return (
    <div className={styles.driverBlock}>
      <div className={styles.header}>
        <h3 className={styles.title}>Наші водії</h3>
        <button className={styles.viewAll}>Усі водії (7)</button>
      </div>

      <div className={styles.list}>
        {employees.map(({ name, experience, avatar, social }, idx) => (
          <div className={styles.card} key={idx}>
            <img src={avatar} alt={name} className={styles.avatar} />
            <div className={styles.name}>{name}</div>
            <div className={styles.experience}>Досвід роботи: {experience}</div>
            <div className={styles.social}>
              {social.map((Icon, i) => (
                <Icon key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Employees
