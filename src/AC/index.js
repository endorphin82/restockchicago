import {ACTIVE_MENU_ITEM, TOGGLE_BURGER_MENU, TOGGLE_IS_MOBILE,} from "./ActionTypes";

export const ToggleBurger = () => ({
  type: TOGGLE_BURGER_MENU
})

export const ToggleIsMobile = (payload) => ({
  type: TOGGLE_IS_MOBILE,
  payload
})

export const ActiveMenuItem = (payload) => ({
  type: ACTIVE_MENU_ITEM,
  payload
})
