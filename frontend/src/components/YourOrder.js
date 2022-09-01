import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import { addToOrder, removeFromOrder } from "../actions/orderActions";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const YourOrder = ({ itemId, location }) => {
  // const itemId = match.params.id;
  // const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  // const dispatch = useDispatch();
  const orderList = useSelector((state) => {
    console.log("state", state);
    return state.orderItems;
  }); // using useselector hook to get items from the state
  console.log("orderlisttt", orderList);

  // const { orderItems } = order;

  // console.log(orderItems);

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      <h1>Order</h1>
      <Grid container spacing={2} m="0 auto">
        <Grid item xs={9} md={4} lg={10}>
          <Item>xs=9 md=8</Item>
        </Grid>
        <Grid item xs={9} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={9} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={9} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
      {/* {orderItems.length === 0 ? (
        <Message>
          Your order is empty <Link to="/">Go Back</Link>
        </Message>
      ) : (
        orderItems.map((item) => {
          return (
            <>
              <p>{item.dishName}</p>
              <p>{item.price}</p>
            </>
          );
        })
      )} */}
    </Box>
  );
};

export default YourOrder;
