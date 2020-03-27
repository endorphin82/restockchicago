import {combineReducers} from "redux";
import burger from "./burger";
import active_menu_item from './active-menu-item'
import toggle_mobile from './toggle-mobile'

export default combineReducers({
  toggle_mobile,
  burger,
  active_menu_item,
});