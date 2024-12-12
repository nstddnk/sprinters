import React from 'react'
import styles from './Card.module.scss'
import { ElipseIcon } from '../../../icons/ellipse.icon'
import { LinkIcon } from '../../../icons/link.icon'
import { PaperClipIcon } from '../../../icons/paper-clip.icon'
import { CommentIcon } from '../../../icons/comment.icon'

export const Card = () => {
  return (
    <div className={styles.cardBlock}>
      <div className={styles.card}>
        <p className={styles.cardTitle}>Make a Kanban App</p>
        <div className={styles.cardMeta}>
          <time className={styles.time} dateTime="2024-01-12">
            12th Jan
          </time>
          <ElipseIcon />
          <span className={styles.createdBy}>Created by Prahlad</span>
        </div>
        <p className={styles.description}>
          Please use trello and designs in Dribbble as reference. And carry on...
        </p>
        <div className={styles.imagePlaceholder}>
          <p>Your image will appear here</p>
        </div>
        <div className={styles.linkSection}>
          <LinkIcon />
          <a className={styles.ellipsisText} href="https://docs.google.com">
            docs.google.com
          </a>
          <PaperClipIcon />
          <a className={styles.fileLink}>main.psd</a>
        </div>
        <div className={styles.tagSection}>
          <span className={styles.tagDesign}>
            <p className={styles.tagTextDesign}>Design</p>
          </span>
          <span className={styles.tagDevelopment}>
            <p className={styles.tagTextDevelopment}>Development</p>
          </span>
        </div>
      </div>
      <div className={styles.cardComments}>
        <CommentIcon />
        <p className={styles.amountComments}>3</p>
      </div>
    </div>
  )
}
