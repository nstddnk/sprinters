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
        <h4 className={styles.feedbackAction}>Клієнтам</h4>
        <ul className={styles.section}>
          <li>
            <a href="#">Головна</a>
          </li>
          <li>
            <a href="#">Про нас</a>
          </li>
          <li>
            <a href="#">Ціни</a>
          </li>
          <li>
            <a href="#">Маршрути</a>
          </li>
          <li>
            <a href="#">Політика приватності</a>
          </li>
        </ul>
      </div>

      <div className={styles.drivers}>
        <h4 className={styles.feedbackAction}>Перевізникам</h4>
        <ul className={styles.section}>
          <li>
            <a href="#">Help Docs</a>
          </li>
          <li>
            <a href="#">Особистий кабінет</a>
          </li>
          <li>
            <a href="#">Оновлення</a>
          </li>
          <li>
            <a href="#">Контакти</a>
          </li>
        </ul>
      </div>
      <div className={styles.connection}>
        <h4 className={styles.feedbackAction}>Зворотній зв’язок</h4>
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
        <p>2024 @ Sprinters. All rights reserved.</p>
        <div>
          <img src={smimages} alt="image" />
        </div>
      </div>
    </footer>
  )
}
