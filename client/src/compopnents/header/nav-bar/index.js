import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { connect } from "react-redux"
import { ActiveMenuItem } from "../../../AC"
import MenuItemJordan from "./menu-items/menu-item-jordan"
import MenuItemNike from "./menu-items/menu-item-nike"
import MenuItemAdidas from "./menu-items/menu-item-adidas"
import MenuItemSupreme from "./menu-items/menu-item-supreme"
import MenuItemApparel from "./menu-items/menu-item-apparel"
import MenuItemAccessories from "./menu-items/menu-item-accessories"
import SearchBox from "../search-box"

import "./styles.scss"
import { categoriesAllQuery } from "./query"

//TODO:
//  http://html-plus.in.ua/obrabotka-sobytiy-onmouseover-i-onmouseout/
// лучше менять класс, через который будет меняться позиционирование картинок
// с абсолюта на рилейтив и обратно, чтобы при старте страницы обе картинки уже
// были прогружены

const NavBar = ({ ActiveMenuItem, itemName, isOpenBurger, isMobile }) => {
  const { loading, error, data } = useQuery(categoriesAllQuery)

  if (loading) return <p>Loading ...</p>;
  const { categoriesAll } = data

  console.log(categoriesAll)

  const handleClick = (item) => {
    ActiveMenuItem(item)
  }
  return (
    <div className={isOpenBurger ? "header__navbar navbar active" : "header__navbar navbar"}>
      <ul className="navbar__menu-list">
        <li className={itemName === "jordan" ? "active navbar__jordan navbar__icon" : "navbar__jordan navbar__icon"}>
          <a href="#" onClick={() => handleClick("jordan")}><img src={categoriesAll[0].icons[0]} alt=""/></a>
          <MenuItemJordan/>
        </li>
        <li className={itemName === "nike" ? "active navbar__nike navbar__icon" : "navbar__nike navbar__icon"}>
          <a href="#" onClick={() => handleClick("nike")}/>
          <MenuItemNike/>
        </li>
        <li className={itemName === "adidas" ? "active navbar__adidas navbar__icon" : "navbar__adidas navbar__icon"}>
          <a href="#" onClick={() => handleClick("adidas")}/>
          <MenuItemAdidas/>
        </li>
        <li className={itemName === "supreme" ? "active" : ""}>
          <a href="#" onClick={() => handleClick("supreme")}>{categoriesAll[3].name}</a>
          <MenuItemSupreme/>
        </li>
        <li className={itemName === "apparel" ? "active" : ""}>
          <a href="#" onClick={() => handleClick("apparel")}>{categoriesAll[4].name}</a>
          <MenuItemApparel/>
        </li>
        <li className={itemName === "accessories" ? "active" : ""}>
          <a href="#" onClick={() => handleClick("accessories")}>{categoriesAll[5].name}</a>
          <MenuItemAccessories/>
        </li>
        <li><a href="#">{categoriesAll[6].name}</a></li>
        <li><a href="#">{categoriesAll[7].name}</a></li>
        <li><a href="#">{categoriesAll[8].name}</a></li>
      </ul>
      {!isMobile && <SearchBox/>}
    </div>
  )
}

export default connect(state => ({
    isOpenBurger: state.burger.isOpen,
    itemName: state.active_menu_item.Item,
    isMobile: state.toggle_mobile.isMobile
  }),
  { ActiveMenuItem }
)(NavBar)