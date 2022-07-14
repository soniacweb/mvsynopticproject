import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";
import FoodFilterContent from "./FoodCard/FoodFilterContent";
//redux
import { useDispatch, useSelector } from "react-redux";
import { listFoodMenu } from "../actions/foodMenuActions";
import { Stack } from "@mui/material";

import Button from "@mui/material/Button";

const FoodMenu = () => {
  const dispatch = useDispatch();
  const foodMenuList = useSelector((state) => state.foodMenu);
  const { loading, error, foodMenu } = foodMenuList;
  const [text, setText] = useState("");
  //   console.log("test", foodMenu);

  useEffect(() => {
    dispatch(listFoodMenu());
  }, [dispatch]);

  const handleClick = (e) => {
    console.log("E", e.target.innerText);
    setText(e.target.innerText);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button onClick={handleClick} value="Main">
          Main
        </Button>
        <Button onClick={handleClick} value="Starter">
          Starter
        </Button>
        <Button onClick={handleClick} value="Side">
          Sides
        </Button>
      </Stack>
      <FoodCard>
        {/* {
          loading ? (
            <Loader />
          ) : error ? (
            <Message children={"Woops, something went wrong!"} />
          ) : (
            text === "SIDES" && <FoodFilterContent data={foodMenu} type="Sides" />
          ) : (
            text === "STARTER" && <FoodFilterContent data={foodMenu} type="Starter" /> 
          ) 
          : ( 
            text === "MAIN" && <FoodFilterContent data={foodMenu} type="Main" /> )
        } */}

        {text === "SIDES" && <FoodFilterContent data={foodMenu} type="Sides" />}
        {text === "STARTER" && (
          <FoodFilterContent data={foodMenu} type="Starter" />
        )}
        {text === "MAIN" && <FoodFilterContent data={foodMenu} type="Main" />}
      </FoodCard>
    </>
  );
};

export default FoodMenu;
