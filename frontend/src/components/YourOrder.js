import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
import { addToOrder, removeFromOrder } from "../actions/orderActions";
import { Box } from "@mui/system";

const YourOrder = ({ match, location, history }) => {
  const itemId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order); // using useselector hook to get items from the state
  const { orderItems } = order;

  // useEffect(() => {
  //   if (itemId) {
  //     dispatch(addToOrder(itemId, qty));
  //   }
  // }, [dispatch, itemId, qty]);

  // const removeFromYourOrderHandler = (id) => {
  //   dispatch(removeFromOrder(id));
  // };

  // const checkoutHandler = () => {
  //   history.push("/login?redirect=payment");
  // };

  console.log(orderItems);
  return (
    <Box>
      <h1>Order</h1>
      {/* {orderItems.length === 0 ? (
    <Message>
      Your order is empty <Link to='/'>Go Back</Link>
    </Message>
  
  ) : (
      {orderItems.map((item) => console.log(item)}
  )} */}
    </Box>
  );
};

export default YourOrder;
