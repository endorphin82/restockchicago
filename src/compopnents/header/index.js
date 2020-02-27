import React from 'react';
import TopBar from './top-bar';
import NavBar from "./nav-bar";
import './styles.scss'

const Header = () => {
  return (
    <section className="header">
      <TopBar/>
      <NavBar/>
    </section>
  );
};

export default Header;