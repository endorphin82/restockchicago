import {TOGGLE_IS_MOBILE} from "../AC/ActionTypes";

const initialState = {
  isMobile: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_MOBILE:
      return {
        ...state,
        isMobile: action.payload
      }
    default:
      return state
  }
}