import React from 'react'
import styles from './Card.module.scss'
import { LinkIcon } from '../../../icons/link.icon'
import { PaperClipIcon } from '../../../icons/paper-clip.icon'
import { CommentIcon } from '../../../icons/comment.icon'

export const Card = () => {
  return (
    <div className={styles.cardBlock}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Make a Kanban App</h3>
        <div className={styles.cardMeta}>
          <span className={styles.time}>12th Jan</span>
          <span>&#8226;</span>
          <span className={styles.createdBy}>Created by Prahlad</span>
        </div>
        <p className={styles.description}>
          Please use trello and designs in Dribbble as reference. And carry on...
        </p>
        <div className={styles.imagePlaceholder}>
          <img
            src="https://tech-admin.deliveryhero.net/wp-content/uploads/2021/04/Gofer-.png"
            alt="Loaded"
            className={styles.loadedImage}
          />
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkWrapper}>
            <LinkIcon />
            <a
              className={styles.ellipsisText}
              target="_blank"
              href="https://docs.google.com"
              rel="noreferrer"
            >
              docs.google.com
            </a>
          </div>
          <div className={styles.linkWrapper}>
            <PaperClipIcon />
            <a className={styles.ellipsisText}>main.psd</a>
          </div>
        </div>
        <div className={styles.tagSection}>
          <div className={styles.tagDesign}>
            <p className={styles.tagTextDesign}>Design</p>
          </div>
          <div className={styles.tagDevelopment}>
            <p className={styles.tagTextDevelopment}>Development</p>
          </div>
        </div>
      </div>
      <div className={styles.cardComments}>
        <CommentIcon />
        <p className={styles.amountComments}>3</p>
      </div>
    </div>
  )
}
