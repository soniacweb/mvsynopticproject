import {
  ORDER_CREATION_REQUEST,
  ORDER_CREATION_SUCCESS,
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
  ORDER_REMOVE_SUCCESS,
} from "../constants/orderConstants";
import axios from "axios";

export const createOrderAfterTableSelection =
  (userID, tableId) => async (dispatch, getState) => {
    console.log("table id", tableId);
    try {
      console.log("hello from create order after table action!");

      // destructure from getstate to access user details
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:8080/api/order",
        { user: userID, table: tableId },
        config
      );

      console.log("dataaaaaaaa", data);

      dispatch({
        type: ORDER_CREATION_REQUEST,
      });
      dispatch({
        type: ORDER_CREATION_SUCCESS,
        payload: {
          order: data._id,
          user: userID,
          table: tableId,
          orderItems: [],
        },
      });

      localStorage.setItem(
        "userOrder",
        JSON.stringify({
          order: data._id,
          user: userID,
          table: tableId,
          orderItems: [],
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

export const addToOrder =
  (orderId, itemObject, qty) => async (dispatch, getState) => {
    console.log("hello from addtocart, orderId:", orderId);
    try {
      dispatch({
        type: ORDER_ADD_REQUEST,
      });

      // destructure from getstate to access user details
      const {
        order,
        userLogin: { userInfo },
      } = getState();

      console.log("orrrrder", order);

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      // if the order id exists, push to that orderitem array matching order id

      const { data } = await axios.put(
        "http://localhost:8080/api/order",
        { orderId, itemObject, qty },
        config
      );
      dispatch({
        type: ORDER_ADD_SUCCESS,
        payload: itemObject,
      });
      localStorage.setItem(
        "userOrder",
        JSON.stringify({
          ...order.userOrder,
          orderItems: [...order.userOrder.orderItems, itemObject],
        })
      );
    } catch (error) {
      dispatch({
        type: ORDER_ADD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const removeFromOrder = (itemId) => (dispatch, getState) => {
  dispatch({
    type: ORDER_REMOVE_SUCCESS,
    payload: itemId,
  });

  localStorage.setItem("order", JSON.stringify(getState().order.userOrder));
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
