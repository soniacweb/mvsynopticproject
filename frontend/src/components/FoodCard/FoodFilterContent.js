import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  ImageList,
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
import { addToOrder } from "../../actions/orderActions";

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

const FilterComp = ({ data }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);
  const [selected, setSelected] = useState(false);
  // const [expanded, setExpanded] = useState(false);

  // const handleExpand = () => {
  //   console.log("handle expand");
  //   setExpanded(!expanded);
  // };

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // qty handling
  const incQty = () => {
    setQty(Number(qty + 1));
    console.log(qty);
  };

  const decQty = () => {
    if (qty <= 0) {
      setQty(0);
    } else {
      setQty(Number(qty - 1));
    }
    console.log(qty);
  };

  const handleSelected = (item, qty) => {
    setSelected({ ...selected, item });
    console.log("selected", selected);
    dispatch(addToOrder(selected, qty));
  };

  return (
    <Box>
      <h1>Main Menu</h1>
      <ImageList
        variant="masonry"
        cols={4}
        gap={10}
        sx={{ width: 1600, height: "100%", overflowY: "scroll" }}
      >
        {data &&
          data.map((item, i) => {
            console.log("item", item);
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
                      >
                        <AddIcon
                          onClick={() => dispatch(addToOrder(item, qty))}
                        />
                      </IconButton>
                    </>
                  }
                />
                {/* <ExpandMore
                expand={expanded}
                onClick={handleExpand}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{item.allergens}</Typography>
                  <Typography paragraph>{item.description}</Typography>
                </CardContent>
              </Collapse> */}

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      May contain:{" "}
                      {item.allergens.map((allergy, i, arr) =>
                        arr.length - 1 === i ? `${allergy}` : `${allergy}, `
                      )}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Description: {item.description}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {`Quick, before they run out! ${
                        item.inStock - qty
                      } in stock!`}
                    </Typography>

                    <Button colorScheme="purple" onClick={incQty}>
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
                      // value={item.inStock}
                      value={qty}
                    />
                    <Button colorScheme="purple" onClick={decQty}>
                      <RemoveIcon />
                    </Button>
                    <Button onClick={() => handleSelected(item, qty)}>
                      Add to order
                    </Button>
                  </Box>
                </Modal>
              </ImageListItem>
            );
          })}
      </ImageList>
    </Box>
  );
};

export default FilterComp;
