import React from 'react';
import logo from '../img/header.svg'
import './styles.scss'

const TopBar = () => {
  return (
    <div className="header__top-bar top-bar">
      <a href="#" className="top-bar__logo">
        <img src={logo} alt="logo"/>
      </a>
      <div className="top-bar__right">
        <div className="top-bar__auth">
          <a href="#">Login | SignUpa</a>
        </div>
        <div className="top-bar__cart">
          <a href="#">Cart</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;