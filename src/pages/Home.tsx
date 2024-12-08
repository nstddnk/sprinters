import React from 'react';
import './Home.css';
import { Menu } from '../components/menu/Menu';

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="left-panel">
        <Menu/>
      </div>
      <div className="task-board"></div>
    </div>
  );
};
