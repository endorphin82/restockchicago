import React from 'react';
import {connect} from "react-redux";
import ShopAllButtonWithUrl from "../shop-all-button-with-url";

import './styles.scss'

const MenuItemSupreme = ({itemName}) => {
  let classes = itemName === 'supreme' ? "menu-item__supreme supreme-menu menu-item menu-item__active" : "menu-item__supreme supreme-menu menu-item"

  return (
    <div className={classes}>
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

export default connect(state =>({
    itemName: state.active_menu_item.Item
  })
)(MenuItemSupreme);