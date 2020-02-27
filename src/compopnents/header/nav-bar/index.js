import React from 'react';
import search from '../img/ei-search.svg';

import './styles.scss'

const NavBar = () => {
  return (
    <div className="header__navbar navbar">
      <ul className="navbar__menu-list">
        <li className="navbar__jordan"><a href="#"/></li>
        <li className="navbar__nike"><a href="#"/></li>
        <li className="navbar__adidas"><a href="#"/></li>
        <li><a href="#">supreme</a></li>
        <li><a href="#">apparel</a></li>
        <li><a href="#">accessories</a></li>
        <li><a href="#">new arrivals</a></li>
        <li><a href="#">gift cards</a></li>
        <li><a href="#">shop all</a></li>
      </ul>
      <div className="navbar__menu-search">
        <a href="#"><img src={search} alt=""/></a>
      </div>
    </div>
  );
};

export default NavBar;