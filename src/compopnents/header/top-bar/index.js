import React from 'react';
import {connect} from "react-redux";
import logo from '../img/header.svg'
import logoMobile from '../img/header-small.svg'
import {ToggleBurger} from "../../../AC";

import './styles.scss'

const TopBar = ({isOpenBurger, ToggleBurger, isMobile}) => {
  const handleClick = () => {
    ToggleBurger()
  };
  return (
    <div className="header__top-bar top-bar">
      <a href="#" className="top-bar__logo">
        <img src={isMobile ? logoMobile : logo} alt="logo"/>
      {isMobile &&  <div onClick={handleClick}
          className={isOpenBurger ? "header__top-bar_burger active" : "header__top-bar_burger"}>
          <span></span>
        </div>
      }
      </a>
      <div className="top-bar__right">

        <div className="top-bar__auth">
          <div />
          <a href="#">Login | SignUp</a>
        </div>
        <div className="top-bar__cart">
          <a href="#">Cart</a>
        </div>
      </div>
    </div>
  );
};

export default connect(state => ({
  isOpenBurger: state.burger.isOpen,
  isMobile: state.toggle_mobile.isMobile
}),{ToggleBurger})(TopBar);