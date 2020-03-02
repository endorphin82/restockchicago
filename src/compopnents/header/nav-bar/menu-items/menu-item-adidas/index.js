import React from 'react';
import {connect} from "react-redux";
import yeezy from './img/yeezy.png'
import boost from './img/boost.png'
import nmd from './img/nmd.png'
import superstar from './img/superstar.png'
import ShopAllButtonWithUrl from "../shop-all-button-with-url";

import './styles.scss'

const MenuItemAdidas = ({itemName}) => {
  let classes = itemName === 'adidas' ? "menu-item__adidas adidas-menu menu-item menu-item__active" : "menu-item__adidas adidas-menu menu-item"

  return (
    <div className={classes}>
      <div className="adidas-menu__left">
        <p className="adidas-menu__left_title">
          Shop Adidas
        </p>
        <p className="adidas-menu__left_link">
          <ShopAllButtonWithUrl/>
        </p>
      </div>
      <div className="adidas-menu__right">
        <ul className="adidas-menu__right_list-1">
          <li><a href="#"><img src={yeezy} alt="yeezy" className="adidas-menu__right_yeezy"/></a></li>
          <li><a href="#"><img src={boost} alt="boost" className="adidas-menu__right_boost"/></a></li>
          <li><a href="#"><img src={nmd} alt="nmd" className="adidas-menu__right_nmd"/></a></li>
          <li><a href="#"><img src={superstar} alt="superstar" className="adidas-menu__right_superstar"/></a></li>
        </ul>
        <ul className="adidas-menu__left_list-2">
          <li><a href="#">Tubular</a></li>
          <li><a href="#">EQT</a></li>
          <li><a href="#">ZX Flux</a></li>
          <li><a href="#">Other Adidas</a></li>
        </ul>
      </div>
    </div>
  );
};

export default connect(state =>({
    itemName: state.active_menu_item.Item
  })
)(MenuItemAdidas);