import React, { useState } from "react";
import { useSelector } from "react-redux";

// import { addToOrder, removeFromOrder } from "../actions/orderActions";
import { Box, Grid, Paper, Typography, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const YourOrder = ({ itemId, location }) => {
  const orderList = useSelector((state) => state.order);
  const [price, setPrice] = useState();
  console.log("orderlist", orderList);

  const {
    userOrder: { orderItems },
  } = orderList;

  console.log(orderItems);

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
    <>
      {orderItems.map((item) => (
        <Paper
          sx={{
            p: 2,
            margin: "20px auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt={item.disName} src={item.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.disName}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.type}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Price: £{item.price}0
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Paper
        sx={{
          p: 2,
          margin: "20px auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}></Grid>
            <Grid item>
              <Typography
                component="div"
                style={{ margin: "50px auto", fontSize: "20px" }}
                variant="title"
              >
                Total: £
                {orderItems.reduce(function (accumulator, currentValue) {
                  return Number(accumulator) + Number(currentValue.price);
                }, 0)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default YourOrder;
