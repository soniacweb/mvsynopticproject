import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";
import FoodFilterContent from "./FoodCard/FoodFilterContent";
//redux
import { useDispatch, useSelector } from "react-redux";
import { listFoodMenu } from "../actions/foodMenuActions";
import { Stack } from "@mui/material";

import Button from "@mui/material/Button";
import Loader from "../components/Loader.js";

const FoodMenu = () => {
  const dispatch = useDispatch();
  const foodMenuList = useSelector((state) => state.foodMenu);
  const { loading, error, foodMenu } = foodMenuList;
  const [foodList, setFoodList] = useState([]);

  //   console.log("test", foodMenu);

  useEffect(() => {
    dispatch(listFoodMenu());
  }, [dispatch]);

  useEffect(() => {
    setFoodList(foodMenu);
  }, [foodMenu]);

  const handleClick = (e) => {
    console.log("E", e.target.innerText);
    let type = e.target.innerText;
    setFoodList(
      foodMenu.filter((food) => food.type.toLowerCase() === type.toLowerCase())
    );
  };
  const handleDietry = (e) => {
    console.log("E", e.target.innerText);
    let dietryRequirements = e.target.innerText;
    setFoodList(
      foodMenu.filter(
        (food) =>
          food.dietryRequirements.toLowerCase() ===
          dietryRequirements.toLowerCase()
      )
    );
  };

  return loading ? (
    <Loader />
  ) : (
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
        <Button onClick={handleDietry} value="Side">
          Vegan
        </Button>
        <Button onClick={handleDietry} value="Side">
          Halal
        </Button>
      </Stack>
      <FoodCard>{<FoodFilterContent data={foodList} />}</FoodCard>
    </>
  );
};

export default FoodMenu;
