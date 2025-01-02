import React from 'react'
import styles from './Card.module.scss'
import { LinkIcon } from '../../../icons/link.icon'
import { Badge } from 'react-bootstrap'
import { Task } from '../task.interface'
import Dropdown from 'react-bootstrap/Dropdown'

export const Card = ({ title, createdBy, createdAt, description, tags, link, imgUrl }: Task) => {
  return (
    <div className={styles.cardBlock}>
      <div className={styles.card}>
        {/*<Dropdown align="end">*/}
        {/*  <Dropdown.Toggle variant="light" id="dropdown-basic" className={styles.menuButton}>*/}
        {/*    &#x2026; /!* Горизонтальные три точки *!/*/}
        {/*  </Dropdown.Toggle>*/}

        {/*  <Dropdown.Menu>*/}
        {/*    <Dropdown.Item onClick={() => alert('Редактировать')}>Редактировать</Dropdown.Item>*/}
        {/*    <Dropdown.Item onClick={() => alert('Удалить')}>Удалить</Dropdown.Item>*/}
        {/*  </Dropdown.Menu>*/}
        {/*</Dropdown>*/}

        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardMeta}>
          <span className={styles.time}>{createdAt}</span>
          <span>&#8226;</span>
          <span className={styles.createdBy}>Created by {createdBy}</span>
        </div>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description} </p>
        </div>
        {imgUrl && (
          <div className={styles.imagePlaceholder}>
            <img src={imgUrl} alt="Loaded" className={styles.loadedImage} />
          </div>
        )}
        <div className={styles.linksSection}>
          <div className={styles.linkWrapper}>
            <LinkIcon />
            <a className={styles.ellipsisText} target="_blank" href={link} rel="noreferrer">
              {link}
            </a>
          </div>
        </div>
        <div className={styles.tagSection}>
          {tags?.map(({ text, type }, index) => (
            <Badge bg={type} key={index}>
              {text}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
