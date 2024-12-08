import React from 'react';
import './Menu.css';
import { TasksIcon } from '../icons/tasks.icon';

export const Menu = () => {
  return (
    <div className="menu-wrapper">
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
  );
};
