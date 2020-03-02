import React from 'react';

import './styles.scss'
import ShopAllButtonWithUrl from "../shop-all-button-with-url";

const MenuItemSupreme = () => {
  return (
    <div className="menu-item__supreme supreme-menu menu-item">
      <div className="supreme-menu__left">
        <p className="supreme-menu__left_title">
          Shop SUPREME
        </p>
        <p className="supreme-menu__left_link">
          <ShopAllButtonWithUrl/>
        </p>
      </div>
      <div className="supreme-menu__right">
        <ul className="supreme-menu__right_list-1">
          <li><a href="#">Shirts</a></li>
          <li><a href="#">Sweatshirts</a></li>
          <li><a href="#">Outterwear</a></li>
          <li><a href="#">Bags</a></li>
        </ul>
        <ul className="supreme-menu__right_list-2">
          <li><a href="#">Hats</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">LV & Supreme</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItemSupreme;