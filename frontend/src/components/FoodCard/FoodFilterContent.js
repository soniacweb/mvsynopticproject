import React, { useState } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  Collapse,
  CardContent,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addToOrder } from "../../actions/orderActions";

import { ExpandMore } from "./FoodCard.styles";
// masonry
const FilterComp = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    console.log("handle expand");
    setExpanded(!expanded);
  };

  return (
    <Box>
      <h1>Drinks</h1>
      <ImageList
        variant="masonry"
        cols={4}
        gap={10}
        sx={{ width: 1600, height: "100%", overflowY: "scroll" }}
      >
        {data &&
          data.map((item) => (
            <ImageListItem key={item.dishName}>
              <img
                src={item.image}
                srcSet={item.image}
                alt={item.dishName}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.dishName}
                subtitle={`£${item.price}.00`}
                actionIcon={
                  <>
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.dishName}`}
                    >
                      <InfoIcon />
                    </IconButton>
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.dishName}`}
                      onClick={() => addToOrder(item.id, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </>
                }
              />
              <ExpandMore
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
              </Collapse>
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
};

export default FilterComp;
