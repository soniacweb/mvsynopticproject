import React, { useEffect, useState } from "react";
import {
  DrinksContainer,
  ExpandMore,
  DrinksCard,
} from "./DrinksCard/DrinksCard.styles";

//redux
import { useDispatch, useSelector } from "react-redux";
import { listDrinksMenu } from "../actions/drinksMenuActions";

import {
  Button,
  Stack,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Grid,
  Collapse,
} from "@mui/material";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { red } from "@mui/material/colors";

import Loader from "../components/Loader.js";

const DrinksMenu = () => {
  const dispatch = useDispatch();
  const drinksMenuList = useSelector((state) => state.drinksMenu);
  const { loading, error, drinksMenu } = drinksMenuList;
  const [drinksList, setDrinksList] = useState([]);
  const [expanded, setExpanded] = useState(false);
  // console.log("drinks", drinksMenu);

  useEffect(() => {
    dispatch(listDrinksMenu());
  }, [dispatch]);

  useEffect(() => {
    setDrinksList(drinksMenu);
  }, [drinksMenu]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (e) => {
    // console.log("E", e.target.innerText);
    let type = e.target.innerText;
    setDrinksList(
      drinksMenu.filter(
        (drink) => drink.type.toLowerCase() === type.toLowerCase()
      )
    );
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Stack direction="row" spacing={2}>
        <Button onClick={handleClick} value="Alcoholic">
          Alcoholic
        </Button>

        <Button onClick={handleClick} value="Side">
          Juices
        </Button>
        <Button onClick={handleClick} value="Side">
          Hot Drinks
        </Button>
        <Button onClick={handleClick} value="Bubble Tea">
          Bubble Tea
        </Button>
      </Stack>
      <h1>Drinks</h1>
      <DrinksContainer>
        {drinksList.map((filteredDrink) => {
          return (
            <Grid item xs={8}>
              <DrinksCard sx={{ maxWidth: 345 }}>
                <CardHeader
                  action={
                    <IconButton aria-label="allergens">
                      <MedicationLiquidIcon />
                    </IconButton>
                  }
                  title={filteredDrink.drinkName}
                  subheader={`Contains ${filteredDrink.allergens}`}
                />
                <CardMedia
                  component="img"
                  // height="194"
                  image={filteredDrink.image}
                  alt={filteredDrink.drinkName}
                />

                <CardActions disableSpacing>
                  <IconButton aria-label="Add to Table Order">
                    <TableRestaurantIcon />
                  </IconButton>

                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      {filteredDrink.description}
                    </Typography>
                  </CardContent>
                </Collapse>
              </DrinksCard>
            </Grid>
          );
        })}
      </DrinksContainer>
    </>
  );
};

export default DrinksMenu;
