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

import { tableReducer } from "./reducers/tableReducers";
import { orderCreationReducer } from "./reducers/ordersReducers";

const reducer = combineReducers({
  foodMenu: foodMenuReducer,
  mealDetail: foodMenuDetailsReducer,
  drinksMenu: drinksMenuReducer,
  drinkDetail: drinksMenuDetailsReducer,
  orderItems: orderCreationReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  tables: tableReducer,
});

const orderItemsFromStorage = localStorage.getItem("orderItems")
  ? JSON.parse(localStorage.getItem("orderItems"))
  : [];

const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = {
  orderItems: { orderItems: orderItemsFromStorage },
  userLogin: { userInfo: userFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
