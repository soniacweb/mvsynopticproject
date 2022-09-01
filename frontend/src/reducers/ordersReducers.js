import {
  ORDER_CREATION_REQUEST,
  ORDER_CREATION_SUCCESS,
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
  ORDER_REMOVE_SUCCESS,
} from "../constants/orderConstants";

export const orderCreationReducer = (state = { orderItems: [{}] }, action) => {
  switch (action.type) {
    case ORDER_CREATION_REQUEST:
      return { loading: false, orderItems: action.payload };
    case ORDER_CREATION_SUCCESS:
      return { loading: false, orderItems: action.payload };
    // case ORDER_ADD_REQUEST:
    //   return { loading: true };
    case ORDER_ADD_SUCCESS:
      const itemToAdd = action.payload;
      console.log("state.orderitems", state.orderItems);
      console.log("itemtoadd", itemToAdd);
      const existItem = state.orderItems.find(
        (itemObject) => itemObject.meal === itemToAdd.meal
      );
      console.log("existItem", existItem);
      if (existItem) {
        return {
          ...state,
          orderItems: state.orderItems.map((itemObject) =>
            itemObject.meal === existItem.meal ? itemToAdd : itemObject
          ),
        };
      } else {
        return {
          ...state,
          orderItems: [...state.orderItems, itemToAdd],
        };
      }

    case ORDER_ADD_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_REMOVE_SUCCESS:
      return {
        ...state,
        orderItems: state.orderItems.filter((x) => x.meal !== action.payload),
      };
    default:
      return state;
  }
};
