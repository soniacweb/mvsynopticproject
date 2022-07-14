import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  foodMenuReducer,
  foodMenuDetailsReducer,
} from "./reducers/foodMenuReducers";
import {
  drinksMenuReducer,
  drinksMenuDetailsReducer,
} from "./reducers/drinksMenuReducers";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  foodMenu: foodMenuReducer,
  mealDetail: foodMenuDetailsReducer,
  drinksMenu: drinksMenuReducer,
  drinkDetail: drinksMenuDetailsReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
// const faveItemsFromStorage = localStorage.getItem("faveItems")
//   ? JSON.parse(localStorage.getItem("faveItems"))
//   : [];

const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = {
  //   cart: { cartItems: cartItemsFromStorage },
  //   fave: { faveItems: faveItemsFromStorage },
  userLogin: { userInfo: userFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
