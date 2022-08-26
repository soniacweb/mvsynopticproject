import {
  ORDER_CREATION_REQUEST,
  ORDER_CREATION_SUCCESS,
  ORDER_ADD_SUCCESS,
  ORDER_REMOVE_SUCCESS,
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
    type: ORDER_ADD_SUCCESS,
    payload: {
      itemId: orderData._id,
      itemName: orderData.dishName,
      itemImage: orderData.image,
      itemDescription: orderData.description,
      itemPrice: orderData.price,
      qty,
    },
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
