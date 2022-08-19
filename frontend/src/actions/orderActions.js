import {
  ORDER_CREATION_REQUEST,
  ORDER_CREATION_SUCCESS,
  ORDER_CREATION_FAIL,
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
  ORDER_REMOVE_REQUEST,
  ORDER_REMOVE_SUCCESS,
  ORDER_REMOVE_FAIL,

  // ORDER_DETAILS_REQUEST,
  // ORDER_DETAILS_SUCCESS,
  // ORDER_DETAILS_FAIL,
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

export const addToOrder = (itemId, qty) => async (dispatch, getState) => {
  const { orderData } = await axios.get(`/api/foodmenu/${itemId}`);
  dispatch({
    type: ORDER_ADD_REQUEST,
    payload: {
      itemId: orderData._id,
      itemName: orderData.dishName,
      itemImage: orderData.image,
      itemDescription: orderData.description,
      itemPrice: orderData.price,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromOrder = (itemId) => (dispatch, getState) => {
  dispatch({
    type: ORDER_REMOVE_REQUEST,
    payload: itemId,
  });

  localStorage.setItem(
    "orderItems",
    JSON.stringify(getState().order.orderItems)
  );
};
