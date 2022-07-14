import {
  FOODMENU_LIST_REQUEST,
  FOODMENU_LIST_SUCCESS,
  FOODMENU_LIST_FAIL,
  FOODMENU_DETAILS_REQUEST,
  FOODMENU_DETAILS_SUCCESS,
  FOODMENU_DETAILS_FAIL,
} from "../constants/foodMenuConstants";

// getting foodMenu
export const foodMenuReducer = (state = { foodMenu: [] }, action) => {
  switch (action.type) {
    case FOODMENU_LIST_REQUEST:
      return { loading: true, foodMenu: [] };
    case FOODMENU_LIST_SUCCESS:
      return { loading: false, foodMenu: action.payload };
    case FOODMENU_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// single food item
export const foodMenuDetailsReducer = (state = { foodItem: [] }, action) => {
  switch (action.type) {
    case FOODMENU_DETAILS_REQUEST:
      return { loading: true, ...state };
    case FOODMENU_DETAILS_SUCCESS:
      return { loading: false, foodItem: action.payload };
    case FOODMENU_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
