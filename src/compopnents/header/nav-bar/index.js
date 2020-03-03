import React from 'react';
import {connect} from "react-redux";
import {ActiveMenuItem} from "../../../AC";
import MenuItemJordan from "./menu-items/menu-item-jordan";
import MenuItemNike from "./menu-items/menu-item-nike";
import MenuItemAdidas from "./menu-items/menu-item-adidas";
import MenuItemSupreme from "./menu-items/menu-item-supreme";
import MenuItemApparel from "./menu-items/menu-item-apparel";
import MenuItemAccessories from "./menu-items/menu-item-accessories";

import './styles.scss'

const NavBar = ({ActiveMenuItem, itemName}) => {
  const handleClick = (item) => {
    ActiveMenuItem(item)
  };
  return (
    <div className="header__navbar navbar">
      <ul className="navbar__menu-list">
        <li className={itemName === 'jordan' ? "active navbar__jordan" : "navbar__jordan"}>
          <a href="#" onClick={() => handleClick( "jordan")}/>
          <MenuItemJordan/>
        </li>
        <li className={itemName === 'nike' ? "active navbar__nike" : "navbar__nike"}>
          <a href="#" onClick={() => handleClick( "nike")}/>
          <MenuItemNike/>
        </li>
        <li className={itemName === 'adidas' ? "active navbar__adidas" : "navbar__adidas"}>
          <a href="#" onClick={() => handleClick( "adidas")}/>
          <MenuItemAdidas/>
        </li>
        <li className={itemName === "supreme" ? "active" : ""}>
          <a href="#" onClick={() => handleClick( "supreme")}>supreme</a>
          <MenuItemSupreme/>
        </li>
        <li className={itemName === "apparel" ? "active" : ""}>
          <a href="#" onClick={() => handleClick( "apparel")}>apparel</a>
          <MenuItemApparel/>
        </li>
        <li className={itemName === "accessories" ? "active" : ""}>
          <a href="#" onClick={() => handleClick( "accessories")}>accessories</a>
          <MenuItemAccessories/>
        </li>
        <li><a href="#">new arrivals</a></li>
        <li><a href="#">gift cards</a></li>
        <li><a href="#">shop all</a></li>
      </ul>
      <div className="navbar__menu-search">
        <form>
          <input type="text" name="search" autoComplete="off"/>
        </form>
      </div>
    </div>
  );
};

export default connect(state => ({
    itemName: state.active_menu_item.Item
  }),
  {ActiveMenuItem}
)(NavBar);