import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Skeleton from "react-loading-skeleton"
import { connect } from "react-redux"
import { ActiveMenuItem } from "../../../AC"
import MenuItemJordan from "./menu-items/menu-item-jordan"
import MenuItemNike from "./menu-items/menu-item-nike"
import MenuItemAdidas from "./menu-items/menu-item-adidas"
import MenuItemSupreme from "./menu-items/menu-item-supreme"
import MenuItemApparel from "./menu-items/menu-item-apparel"
import MenuItemAccessories from "./menu-items/menu-item-accessories"
import SearchBox from "../search-box"
import { mapOrder } from "../../../utils"
import "./styles.scss"
import { categoriesByListNamesQuery } from "./query"

//TODO:
//  http://html-plus.in.ua/obrabotka-sobytiy-onmouseover-i-onmouseout/
// лучше менять класс, через который будет меняться позиционирование картинок
// с абсолюта на рилейтив и обратно, чтобы при старте страницы обе картинки уже
// были прогружены
const categoriesList = [
  "jordan",
  "nike",
  "adidas",
  "supreme",
  "apparel",
  "accessories",
  "new arrivals",
  "gift cards",
  "shop all",
]
const NavBar = ({ ActiveMenuItem, itemName, isOpenBurger, isMobile }) => {
  const { loading, error, data } = useQuery(categoriesByListNamesQuery, {
    variables: { names: categoriesList },
  })

  if (loading) return <Skeleton height={50} />
  const { categoriesByListNames } = data

  console.log(categoriesByListNames)

  // const orderedCategoriesByListNames = categoriesList.map((cat, ind) => {
  //   return (cat == categoriesByListNames.map[ind])
  // } )
  // const orderedCategoriesByListNames = categoriesList.map((cat, ind) => categoriesByListNames (c => )[cat[ind]])
  const orderedCategoriesByListNames = mapOrder(
    categoriesByListNames,
    categoriesList,
    "name"
  )
  // const orderedCategoriesByListNames = categoriesByListNames.sort(categoriesList, (a, b) => {
  //   if (a.name > categoriesList[] )
  // })
  console.log("orderedCategoriesByListNames", orderedCategoriesByListNames)

  const handleClick = (item) => {
    ActiveMenuItem(item)
  }

  return (
    <div
      className={
        isOpenBurger ? "header__navbar navbar active" : "header__navbar navbar"
      }
    >
      <ul className="navbar__menu-list">
        <li
          className={
            itemName === "jordan"
              ? "active navbar__jordan navbar__icon"
              : "navbar__jordan navbar__icon"
          }
        >
          <a href="#" onClick={() => handleClick("jordan")}>
            <img src={categoriesByListNames[0].icons[0]} />
            <img className="img2" src={categoriesByListNames[0].icons[1]} />
          </a>
          <MenuItemJordan />
        </li>
        <li
          className={
            itemName === "nike"
              ? "active navbar__nike navbar__icon"
              : "navbar__nike navbar__icon"
          }
        >
          <a href="#" onClick={() => handleClick("nike")}>
            <img src={categoriesByListNames[1].icons[0]} />
            <img className="img2" src={categoriesByListNames[1].icons[1]} />
          </a>
          <MenuItemNike />
        </li>
        <li
          className={
            itemName === "adidas"
              ? "active navbar__adidas navbar__icon"
              : "navbar__adidas navbar__icon"
          }
        >
          <a href="#" onClick={() => handleClick("adidas")}>
            <img src={categoriesByListNames[2].icons[0]} />
            <img className="img2" src={categoriesByListNames[2].icons[1]} />
          </a>
          <MenuItemAdidas />
        </li>
        <li className={itemName === "supreme" ? "active" : ""}>
          <a href="#" onClick={() => handleClick("supreme")}>
            {categoriesByListNames[3].name}
          </a>
          <MenuItemSupreme />
        </li>
        <li className={itemName === "apparel" ? "active" : ""}>
          <a href="#" onClick={() => handleClick("apparel")}>
            {categoriesByListNames[4].name}
          </a>
          <MenuItemApparel />
        </li>
        <li className={itemName === "accessories" ? "active" : ""}>
          <a href="#" onClick={() => handleClick("accessories")}>
            {categoriesByListNames[5].name}
          </a>
          <MenuItemAccessories />
        </li>
        <li>
          <a href="#">{categoriesByListNames[6].name}</a>
        </li>
        <li>
          <a href="#">{categoriesByListNames[7].name}</a>
        </li>
        <li>
          <a href="#">{categoriesByListNames[8].name}</a>
        </li>
      </ul>
      {!isMobile && <SearchBox />}
    </div>
  )
}

export default connect(
  (state) => ({
    isOpenBurger: state.burger.isOpen,
    itemName: state.active_menu_item.Item,
    isMobile: state.toggle_mobile.isMobile,
  }),
  { ActiveMenuItem }
)(NavBar)
