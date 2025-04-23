import React from 'react'
import styles from './Services.module.scss'
import { FanIcon } from '../../icons/FanIcon'
import { WifiIcon } from '../../icons/WifiIcon'
import { TvIcon } from '../../icons/TvIcon'
import { ToiletIcon } from '../../icons/ToiletIcon'
import { PetIcon } from '../../icons/PetIcon'
import { SeatIcon } from '../../icons/SeatIcon'

export const Services = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Сервіс</h3>
      <p className={styles.subtitle}>Найкращі умови для вашого комфорту</p>

      <div className={styles.block}>
        <div className={styles.item}>
          <FanIcon />
          <span>Кондиціонер</span>
        </div>
        <div className={styles.item}>
          <WifiIcon />
          <span>Wi-Fi</span>
        </div>
        <div className={styles.item}>
          <TvIcon />
          <span>TV</span>
        </div>
        <div className={styles.item}>
          <ToiletIcon />
          <span>Туалет</span>
        </div>
        <div className={styles.item}>
          <SeatIcon />
          <span>Зручні сидіння</span>
        </div>
        <div className={styles.item}>
          <PetIcon />
          <span>Перевозимо тварин</span>
        </div>
      </div>
    </div>
  )
}
