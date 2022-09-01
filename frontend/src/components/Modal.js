import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  TextField,
  Modal,
  Button,
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToOrder } from "../actions/orderActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  // get newly created empty orderItem from store (state) and get the ID

  const order = useSelector((state) => state.orderItems);
  const { loading, error, orderItems } = order;

  if (orderItems) {
    console.log("order from modal", order);
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // qty handling
  const incQty = () => {
    setQty(Number(qty + 1));
  };

  const decQty = () => {
    setQty(Number(qty - 1));
  };

  console.log(
    "what im passing in",
    "order ID:",
    orderItems._id,
    "item object:",
    item,
    "qty:",
    qty
  );

  return (
    <ImageListItem key={item.dishName}>
      <img
        src={item.image}
        srcSet={item.image}
        alt={item.dishName}
        loading="lazy"
      />

      <ImageListItemBar
        title={item.dishName}
        subtitle={
          toString(item.price).length <= 2
            ? `£${item.price}.00`
            : toString(item.price).length <= 4
            ? `£${item.price}0`
            : `£${item.price}`
        }
        actionIcon={
          <>
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.dishName}`}
            >
              {/* <Link to={`/mainmenu/${item._id}`}> */}
              <InfoIcon onClick={handleOpen} />
              {/* </Link> */}
            </IconButton>
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.dishName}`}
            ></IconButton>
          </>
        }
      />

      {/* modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>{item.dishName}</Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            May contain:
            {item.allergens.map((allergy, i, arr) =>
              arr.length - 1 === i ? `${allergy}` : `${allergy}, `
            )}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {item.description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Quick, before they run out! ${item.inStock - qty} in stock!`}
          </Typography>
          <Button onClick={incQty}>
            <AddIcon />
          </Button>
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={qty}
          />
          <Button onClick={decQty}>
            <RemoveIcon />
          </Button>

          <Button
            onClick={() => {
              console.log("add to order from click event");
              dispatch(addToOrder(order._id, item, qty));
              handleClose();
            }}
            // onClick={() => dispatch(addToOrder(item, qty))}
          >
            Add to order
          </Button>
        </Box>
      </Modal>
    </ImageListItem>
  );
};

export default ModalItem;
