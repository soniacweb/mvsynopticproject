import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { listDrinksMenu } from "../actions/drinksMenuActions";
import { MenuContainer, CatButtonStyled } from "./ReusableTheme.styled";
import { Box, ImageList, Stack } from "@mui/material";

import Loader from "../components/Loader.js";
import ModalItem from "./Modal";

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
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        m={10}
      >
        <CatButtonStyled onClick={handleClick} value="Alcoholic">
          Alcoholic
        </CatButtonStyled>

        <CatButtonStyled onClick={handleClick} value="Side">
          Juices
        </CatButtonStyled>
        <CatButtonStyled onClick={handleClick} value="Side">
          Hot Drinks
        </CatButtonStyled>
        <CatButtonStyled onClick={handleClick} value="Bubble Tea">
          Bubble Tea
        </CatButtonStyled>
      </Stack>
      <h1>Drinks</h1>
      <MenuContainer>
        <Box>
          <ImageList
            variant="woven"
            // cols={{ xs: 1, sm: 1, md: 2, lg: 3 }}
            gap={7}
            cols={3}
          >
            {drinksList &&
              drinksList.map((item, i) => {
                return (
                  <ModalItem
                    key={item.name ? item.dishName : item.dinksName}
                    item={item}
                  />
                );
              })}
          </ImageList>
        </Box>
      </MenuContainer>
    </>
  );
};

export default DrinksMenu;
