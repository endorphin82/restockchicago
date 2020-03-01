import React from 'react';
import './styles.scss'
import ShopAllButtonWithUrl from "../shop-all-button-with-url";

const MenuItemAccessories = () => {
  return (
    <div className="menu-item__accessories accessories-menu">
      <div className="accessories-menu__left">
        <p className="accessories-menu__left_title">
          Shop Accessories
        </p>
        <p className="accessories-menu__left_link">
          <ShopAllButtonWithUrl/>
        </p>
      </div>
      <div className="accessories-menu__right">
        <ul className="accessories-menu__right_list-1">
          <li><a href="#">Shoe Care</a></li>
          <li><a href="#">Keychains</a></li>
          <li><a href="#">AirPods Cases</a></li>
          <li><a href="#">Bags</a></li>
          <li><a href="#">Collectibles</a></li>
        </ul>
        <ul className="accessories-menu__right_list-2">
          <li><a href="#">Slippers</a></li>
          <li><a href="#">Sneaker Chargers</a></li>
          <li><a href="#">Shoe Building Blocks</a></li>
          <li><a href="#">Coloring Books</a></li>
          <li><a href="#">Other</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItemAccessories;