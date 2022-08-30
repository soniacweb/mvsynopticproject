import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
import { addToOrder, removeFromOrder } from "../actions/orderActions";
import { Box } from "@mui/system";

const YourOrder = ({ match, location }) => {
  const itemId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order); // using useselector hook to get items from the state
  const { orderItems } = order;

  console.log(order);

  useEffect(() => {
    if (itemId) {
      dispatch(addToOrder(itemId, qty));
    }
  }, [dispatch, itemId, qty]);

  const removeFromYourOrderHandler = (id) => {
    dispatch(removeFromOrder(id));
  };

  // const checkoutHandler = () => {
  //   history.push("/login?redirect=payment");
  // };

  console.log(orderItems);
  return (
    <Box>
      <h1>Order</h1>
      {orderItems.length === 0 ? (
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
            // <Grid item xs={8}>
            //   <DrinksCard sx={{ maxWidth: 345 }}>
            //     <CardHeader
            //       action={
            //         <IconButton aria-label="allergens">
            //           <MedicationLiquidIcon />
            //         </IconButton>
            //       }
            //       title={item.drinkName}
            //       subheader={`Contains ${item.allergens}`}
            //     />
            //     <CardMedia
            //       component="img"
            //       // height="194"
            //       image={item.image}
            //       alt="Paella dish"
            //     />

            //     <CardActions disableSpacing>
            //       <IconButton aria-label="Add to Table Order">
            //         <TableRestaurantIcon />
            //       </IconButton>

            //       <ExpandMore
            //         expand={expanded}
            //         onClick={handleExpandClick}
            //         aria-expanded={expanded}
            //         aria-label="show more"
            //       >
            //         <ExpandMoreIcon />
            //       </ExpandMore>
            //     </CardActions>
            //     <Collapse in={expanded} timeout="auto" unmountOnExit>
            //       <CardContent>
            //         <Typography paragraph>{item.description}</Typography>
            //       </CardContent>
            //     </Collapse>
            //   </DrinksCard>
            // </Grid>
          );
        })
      )}
    </Box>
  );
};

export default YourOrder;
