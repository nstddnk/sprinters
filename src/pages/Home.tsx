import React from 'react'
import './Home.css'
import { Menu } from '../components/menu/Menu'
import { TaskBoard } from '../components/tasks-board/TaskBoard'

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="left-panel">
        <Menu />
      </div>
      <div className="content-wrapper">
        <TaskBoard />
      </div>
    </div>
  )
}
