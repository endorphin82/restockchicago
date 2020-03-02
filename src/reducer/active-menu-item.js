import {ACTIVE_MENU_ITEM} from "../AC/ActionTypes";

const initialState = {
  Item: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_MENU_ITEM:
      return {
        ...state,
        Item: action.payload === state.Item ? null : action.payload
      }
    default:
      return state
  }
}