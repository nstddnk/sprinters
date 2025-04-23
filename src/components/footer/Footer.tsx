import React from 'react'
import styles from './Footer.module.scss'
import { MailFooter } from '../../icons/MailFooter'
import { PhoneFooter } from '../../icons/PhoneFooter'
import { OtherLogo } from '../../icons/OtherLogo'
import smimages from '../../global/images/photo3.png'
import { Button, Form, InputGroup } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.brand}>
        <OtherLogo />
        <p>
          Платформа пошуку перевізників <br /> та бронювання поїздок
        </p>
      </div>

      <div className={styles.clients}>
        <h4 className={styles.titleH}>Клієнтам</h4>
        <ul className={styles.section}>
          <li>
            <a href="/">Головна</a>
          </li>
          <li>
            <a href="/about">Про нас</a>
          </li>
          <li>
            <a href="/prices">Ціни</a>
          </li>
          <li>
            <a href="/routes">Маршрути</a>
          </li>
          <li>
            <a href="/privacy">Політика приватності</a>
          </li>
        </ul>
      </div>

      <div className={styles.drivers}>
        <h4 className={styles.titleH}>Перевізникам</h4>
        <ul className={styles.section}>
          <li>
            <a href="/docs">Help Docs</a>
          </li>
          <li>
            <a href="/cabinet">Особистий кабінет</a>
          </li>
          <li>
            <a href="/updates">Оновлення</a>
          </li>
          <li>
            <a href="/contact">Контакти</a>
          </li>
        </ul>
      </div>
      <div className={styles.connection}>
        <h4 className={styles.titleH}>Зворотній зв’язок</h4>
        <p className={styles.feedbackDescription}>
          Маєш пропозиції щодо покращення <br /> сервісу – пиши нам!
        </p>
        <form className={styles.form}>
          <InputGroup size="lg">
            <Form.Control
              placeholder="Email Address"
              aria-label="Username"
              className={styles.input}
            />
          </InputGroup>
          <Button type="submit" className={styles.button}>
            Надіслати
          </Button>
        </form>
        <div className={styles.contacts}>
          <p className={styles.contactItem}>
            <PhoneFooter />
            <span>+38 (073) 555 55 55</span>
          </p>
          <p className={styles.contactItem}>
            <MailFooter />
            <span>gmail@gmail.com</span>
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.bottomInfo}>2024 @ Sprinters. All rights reserved.</p>
        <div className={styles.socials}>
          <img src={smimages} alt="image" />
        </div>
      </div>
    </footer>
  )
}
