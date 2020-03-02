import React from 'react';
import ShopAllButtonWithUrl from "../shop-all-button-with-url";
import './styles.scss'

const MenuItemJordan = () => {
  return (
    <div className="menu-item__jordan jordan-menu menu-item">
      <div className="jordan-menu__left">
        <p className="jordan-menu__left_title">
          Shop Jordan
        </p>
        <p className="jordan-menu__left_link">
          <ShopAllButtonWithUrl/>
        </p>
      </div>
      <div className="jordan-menu__right">
        <ul className="jordan-menu__right_list-1">
          <li><a href="#">Air Jordan 1</a></li>
          <li><a href="#">Air Jordan 2</a></li>
          <li><a href="#">Air Jordan 3</a></li>
          <li><a href="#">Air Jordan 4</a></li>
          <li><a href="#">Air Jordan 5</a></li>
          <li><a href="#">Air Jordan 6</a></li>
        </ul>
        <ul className="jordan-menu__right_list-2">
          <li><a href="#">Air Jordan 7</a></li>
          <li><a href="#">Air Jordan 8</a></li>
          <li><a href="#">Air Jordan 9</a></li>
          <li><a href="#">Air Jordan 10</a></li>
          <li><a href="#">Air Jordan 11</a></li>
          <li><a href="#">Air Jordan 12</a></li>
        </ul>
        <ul className="jordan-menu__right_list-3">
          <li><a href="#">Air Jordan 13</a></li>
          <li><a href="#">Air Jordan 14</a></li>
          <li><a href="#">Air Jordan 15</a></li>
          <li><a href="#">Other Jordan</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItemJordan;