import React from 'react';
import {connect} from "react-redux";
import ShopAllButtonWithUrl from "../shop-all-button-with-url";
import './styles.scss'

const MenuItemApparel = ({itemName}) => {
  console.log(itemName);
  let classes = itemName === 'apparel' ? "menu-item__apparel apparel-menu menu-item menu-item__active" : "menu-item__apparel apparel-menu menu-item"

  return (
    <div className={classes}>
      <div className="apparel-menu__left">
        <p className="apparel-menu__left_title">
          Shop Apparel
        </p>
        <p className="apparel-menu__left_link">
          <ShopAllButtonWithUrl/>
        </p>
      </div>
      <div className="apparel-menu__right">
        <ul className="apparel-menu__right_list-1">
          <li><a href="#">Off-White</a></li>
          <li><a href="#">Bape</a></li>
          <li><a href="#">Restock Chicago</a></li>
          <li><a href="#">Other Apparel</a></li>
        </ul>
        <ul className="apparel-menu__left_list-2">
          <li><a href="#">T-shirts</a></li>
          <li><a href="#">Sweatshirt</a></li>
          <li><a href="#">Jackets</a></li>
        </ul>
      </div>
    </div>
  );
};

export default connect(state =>({
    itemName: state.active_menu_item.Item
  })
)(MenuItemApparel);