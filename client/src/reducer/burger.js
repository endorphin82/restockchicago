import {TOGGLE_BURGER_MENU} from "../AC/ActionTypes";

const initialState = {
  isOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BURGER_MENU:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}