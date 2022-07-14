import {
  DRINKSMENU_LIST_REQUEST,
  DRINKSMENU_LIST_SUCCESS,
  DRINKSMENU_LIST_FAIL,
  DRINKSMENU_DETAILS_REQUEST,
  DRINKSMENU_DETAILS_SUCCESS,
  DRINKSMENU_DETAILS_FAIL,
} from "../constants/drinksMenuConstants";

// getting drinksMenu
export const drinksMenuReducer = (state = { drinksMenu: [] }, action) => {
  switch (action.type) {
    case DRINKSMENU_LIST_REQUEST:
      return { loading: true, drinksMenu: [] };
    case DRINKSMENU_LIST_SUCCESS:
      return { loading: false, drinksMenu: action.payload };
    case DRINKSMENU_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// single food item
export const drinksMenuDetailsReducer = (state = { foodItem: [] }, action) => {
  switch (action.type) {
    case DRINKSMENU_DETAILS_REQUEST:
      return { loading: true, ...state };
    case DRINKSMENU_DETAILS_SUCCESS:
      return { loading: false, foodItem: action.payload };
    case DRINKSMENU_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
