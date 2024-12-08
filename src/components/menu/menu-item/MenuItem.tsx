import React from 'react';
import './MenuItem.css';
import cn from 'classnames';

export type MenuItemProps = {
  title: string;
  counter: string;
  Icon: React.JSX.Element;
  isActive: boolean;
  onClick: () => void;
}

export const MenuItem = ({ title, counter, Icon, isActive, onClick }: MenuItemProps) => {
  return (
    <div className={cn('menu-item-wrapper', { 'menu-item-active': isActive })} onClick={onClick}>
      <div className="content-button">
        <div className="left-content-button">
          {Icon}
          <p className="main-tasks-text">{title}</p>
        </div>
        <div className="button-counter">
          <p className="counter-text">{counter}</p>
        </div>
      </div>
    </div>
  );
};
