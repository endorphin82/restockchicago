import React from 'react';
import ShopAllButtonWithUrl from "../shop-all-button-with-url";
import './styles.scss'


const MenuItemNike = () => {
  return (
    <div className="menu-item__nike nike-menu">
      <div className="nike-menu__left">
        <p className="nike-menu__left_title">
          Shop Nike
        </p>
        <p className="nike-menu__left_link">
          <ShopAllButtonWithUrl/>
        </p>
      </div>
      <div className="nike-menu__right">
        <ul className="nike-menu__right_list">
          <li><a href="#">nike basketball</a></li>
          <li><a href="#">nike running</a></li>
          <li><a href="#">nike lifestyle</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItemNike;