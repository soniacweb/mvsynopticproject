import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import { CardImage } from "./DrinksCard.styles";

const DrinksFilterContent = ({ data, type }) => {
  return (
    <>
      <Typography>{type}</Typography>
      {data
        .filter((drink) => drink.type === type)
        .map((filteredDrink) => {
          console.log("lol", filteredDrink);
          return (
            <Card key={filteredDrink.drinkName}>
              <CardImage
                component="img"
                // height="140"
                // width="100"
                image={filteredDrink.image}
                alt={filteredDrink.drinkName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {filteredDrink.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {filteredDrink.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
    </>
  );
};

export default DrinksFilterContent;
