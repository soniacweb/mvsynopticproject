import {
  ORDER_CREATION_REQUEST,
  ORDER_CREATION_SUCCESS,
  ORDER_ADD_SUCCESS,
  ORDER_REMOVE_SUCCESS,
} from "../constants/orderConstants";

export const orderCreationReducer = (state = { orderItems: [] }, action) => {
  switch (action.type) {
    case ORDER_CREATION_REQUEST:
      return { loading: false, order: action.payload };
    case ORDER_CREATION_SUCCESS:
      return { loading: false, error: action.payload };

    case ORDER_ADD_SUCCESS:
      const item = action.payload;
      const existItem = state.orderItems.find(
        (x) => x.product === item.product
      );
      if (existItem) {
        return {
          ...state,
          orderItems: state.orderItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          orderItems: [...state.orderItems, item],
        };
      }
    case ORDER_REMOVE_SUCCESS:
      return {
        ...state,
        orderItems: state.orderItems.filter(
          (x) => x.product !== action.payload
        ),
      };

    default:
      return state;
  }
};
