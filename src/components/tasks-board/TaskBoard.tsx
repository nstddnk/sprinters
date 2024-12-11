import React from 'react'
import './TaskBoard.css'
import { Card } from './card/Card'

export const TaskBoard = () => {
  return (
    <div className="task-board">
      <div className="to-do-block">
        <p className="to-do-text">TO DO</p>
        <div className="cards-wrapper">
          <Card />
        </div>
      </div>
      <div className="doing-block">
        <p className="doing-text">DOING</p>
      </div>
      <div className="done-block">
        <p className="done-text">DONE</p>
      </div>
    </div>
  )
}
