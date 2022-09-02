import {
  ORDER_CREATION_REQUEST,
  ORDER_CREATION_SUCCESS,
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
  ORDER_REMOVE_SUCCESS,
} from "../constants/orderConstants";

export const orderCreationReducer = (state = { order: [{}] }, action) => {
  switch (action.type) {
    case ORDER_CREATION_REQUEST:
      return { loading: false, userOrder: action.payload };
    case ORDER_CREATION_SUCCESS:
      console.log("action payload", action.payload);
      console.log("stateeee", state);
      return { loading: false, userOrder: action.payload };
    case ORDER_ADD_REQUEST:
      console.log("action payload", action.payload);
      console.log("stateeee", state.userOrder);
      return { loading: true, userOrder: state.userOrder };
    case ORDER_ADD_SUCCESS:
      // const itemToAdd = action.payload;
      // console.log("state.orderitems", state.order.userOrder.orderItems);
      // console.log("itemtoaddddd", itemToAdd._id);
      // console.log("statttteeee", state);

      // const itemExists = state.order.userOrder.orderItems.find(
      //   (itemObject) => itemObject.meal === itemToAdd.meal
      // );

      // console.log("existItem", itemExists);

      // let addingToOrderObject = { ...state, orderId: itemToAdd._id };

      // if (itemExists) {
      //   addingToOrderObject.order = state.order.userOrder.orderItems.map(
      //     (itemObject) =>
      //       itemObject.meal === itemExists.meal ? itemToAdd : itemObject
      //   );
      // }
      // console.log("adding to order object", addingToOrderObject);

      return {
        loading: false,
        userOrder: {
          ...state.userOrder,
          orderItems: [...state.userOrder.orderItems, action.payload],
        },
      };
    // orderId: itemToAdd._id,

    case ORDER_ADD_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_REMOVE_SUCCESS:
      return {
        ...state,
        order: state.order.userOrder.orderItems.filter(
          (x) => x.meal !== action.payload
        ),
      };
    default:
      return state;
  }
};
