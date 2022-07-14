import React, { useEffect, useState } from "react";
import DrinksFilterContent from "./FoodCard/FoodFilterContent";
import { DrinksContainer } from "./DrinksCard/DrinksCard.styles";
//redux
import { useDispatch, useSelector } from "react-redux";
import { listDrinksMenu } from "../actions/drinksMenuActions";
import { Button, Stack } from "@mui/material";

const FoodMenu = () => {
  const dispatch = useDispatch();
  const drinksMenuList = useSelector((state) => state.drinksMenu);
  const { loading, error, drinksMenu } = drinksMenuList;
  const [text, setText] = useState("");
  console.log("drinks", drinksMenu);

  useEffect(() => {
    dispatch(listDrinksMenu());
  }, [dispatch]);

  const handleClick = (e) => {
    // console.log("E", e.target.innerText);
    setText(e.target.innerText);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button onClick={handleClick} value="Alcoholic">
          Alcoholic
        </Button>
        <Button onClick={handleClick} value="Starter">
          Non-Alcoholic
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
      <DrinksContainer>
        {text === "ALCOHOL" && (
          <DrinksFilterContent data={drinksMenu} type="Alcoholic" />
        )}
        {text === "NON-ALCOHOLIC" && (
          <DrinksFilterContent data={drinksMenu} type="Non-Alcoholic" />
        )}
        {text === "JUICES" && (
          <DrinksFilterContent data={drinksMenu} type="Juices" />
        )}
        {text === "HOT DRINKS" && (
          <DrinksFilterContent data={drinksMenu} type="Hot Drinks" />
        )}
        {text === "BUBBLE TEA" && (
          <DrinksFilterContent data={drinksMenu} type="Bubble Tea" />
        )}
      </DrinksContainer>
    </>
  );
};

export default FoodMenu;
