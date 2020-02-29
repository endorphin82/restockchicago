import React from 'react';
import TopBar from './top-bar';
import NavBar from "./nav-bar";
import './styles.scss'
import ShopAllButtonWithUrl from "./nav-bar/menu-items/shop-all-button-with-url";

const Header = () => {
  return (
    <section className="header">
      <TopBar/>
      <NavBar/>
    </section>
  );
};

export default Header;