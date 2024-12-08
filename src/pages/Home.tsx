import React from 'react';
import './Home.css';
import { TasksIcon } from '../icons/tasks.icon';

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="left-panel">
        <div className="tasks-button">
          <div className="content-button">
            <div className="left-content-button">
              <TasksIcon/>
              <p className="main-tasks-text">Tasks</p>
            </div>
            <div className="button-counter">
              <p className="counter-text">4</p>
            </div>
          </div>
        </div>
      </div>
      <div className="task-board"></div>
    </div>
  );
};
