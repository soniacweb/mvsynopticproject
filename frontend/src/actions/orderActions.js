import {
  ORDER_CREATION_REQUEST,
  ORDER_CREATION_SUCCESS,
  ORDER_ADD_SUCCESS,
  ORDER_REMOVE_SUCCESS,
  ORDER_ITEM_QUANTITY_ADD_SUCCESS,
  ORDER_ITEM_QUANTITY_REMOVE_SUCCESS,
} from "../constants/orderConstants";
import axios from "axios";

export const createOrderAfterTableSelection =
  (userID, tableNum) => async (dispatch) => {
    dispatch({
      type: ORDER_CREATION_REQUEST,
    });
    dispatch({
      type: ORDER_CREATION_SUCCESS,
      payload: { user: userID, table: tableNum, orderItems: [] },
    });
  };

export const addToOrder = (item, qty) => async (dispatch, getState) => {
  // const { data } = await axios.get(
  //   `http://localhost:8080/api/orderItems/${itemId}`
  // );
  console.log("hello from addToOrder");
  dispatch({
    type: ORDER_ADD_SUCCESS,
    payload: {
      meal: item._id,
      drink: item._id,
      name: item.dishName,
      image: item.image,
      price: item.price,
      qty,
    },

    // payload: item,

    // payload: {
    //   meal: "219084293085",
    //   drink: "eiouweoitueiu",
    //   name: "hello",
    //   image: "hello2",
    //   price: 10.0,
    //   qty: 1,
    // },
  });

  localStorage.setItem(
    "orderItems",
    JSON.stringify(getState().order.orderItems)
  );
};

export const removeFromOrder = (itemId) => (dispatch, getState) => {
  dispatch({
    type: ORDER_REMOVE_SUCCESS,
    payload: itemId,
  });

  localStorage.setItem(
    "orderItems",
    JSON.stringify(getState().order.orderItems)
  );
};

// export const incQty = (itemId) => (dispatch, getState) => {
//   const item = state.find((item) => item._id === action.payload);
//   item.quantity++;
//   dispatch({
//     type: ORDER_ITEM_QUANTITY_ADD_SUCCESS,
//     payload: itemId,
//   });
//   localStorage.setItem(
//     "orderItems",
//     JSON.stringify(getState().order.orderItems)
//   );
// };

// export const decQty = (state, action) => {
//   const item = state.find((item) => item._id === action.payload);

//   dispatch({
//     type: ORDER_ITEM_QUANTITY_REMOVE_SUCCESS,
//     payload: itemId,
//   });

//   if (item.quantity === 1) {
//     const index = state.findIndex((item) => item._id === action.payload);
//     state.splice(index, 1);
//   } else {
//     item.quantity--;
//   }
// };
