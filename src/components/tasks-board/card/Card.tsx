import React from 'react'
import './Card.css'
import { ElipseIcon } from '../../../icons/ellipse.icon'
import { LinkIcon } from '../../../icons/link.icon'
import { PaperClipIcon } from '../../../icons/paper-clip.icon'
import { CommentIcon } from '../../../icons/comment.icon'

export const Card = () => {
  return (
    <div className="card-block">
      <div className="card">
        <p className="card-title">Make a Kanban App</p>
        <div className="card-meta">
          <time className="time" dateTime="2024-01-12">
            12th Jan
          </time>
          <ElipseIcon />
          <span className="created-by">Created by Prahlad</span>
        </div>
        <p className="description">
          Please use trello and designs in Dribbble as reference. And carry on...
        </p>
        <div className="image-placeholder">
          <p>Your image will appear here</p>
        </div>
        <div className="link-section">
          <LinkIcon />
          <a className="ellipsis-text" href="https://docs.google.com">
            docs.google.com
          </a>
          <PaperClipIcon />
          <a className="file-link">main.psd</a>
        </div>
        <div className="tag-section">
          <span className="tag-design">
            <p className="tag-text-design">Design</p>
          </span>
          <span className="tag-development">
            <p className="tag-text-development">Development</p>
          </span>
        </div>
      </div>
      <div className="card-comments">
        <CommentIcon />
        <p className="amount-comments">3</p>
      </div>
    </div>
  )
}
