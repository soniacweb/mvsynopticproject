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

export const orderCreationReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATION_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_CREATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
