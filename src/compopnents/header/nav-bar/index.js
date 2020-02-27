import React from 'react';
import jordan from '../img/jumpman.svg';
import nike from '../img/nike_sport.svg';
import adidas from '../img/adidas.svg';
import search from '../img/ei-search.svg';

import './styles.scss'

const NavBar = () => {
  return (
    <div className="header__navbar navbar">
      <ul className="navbar__menu-list">
        <li><a href="#"><img src={jordan} alt="jordan"/></a></li>
        <li><a href="#"><img src={nike} alt="nike"/></a></li>
        <li><a href="#"><img src={adidas} alt="adidas"/></a></li>
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