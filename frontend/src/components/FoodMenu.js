import React, { useEffect, useState } from "react";
// import FoodCard from "./FoodCard/FoodCard";
import FoodFilterContent from "./FoodCard/FoodFilterContent";
//redux
import { useDispatch, useSelector } from "react-redux";
import { listFoodMenu } from "../actions/foodMenuActions";
import { Stack, Grid } from "@mui/material";

import { CatButtonStyled } from "./ReusableTheme.styled";
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
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        m={10}
      >
        {/* <Grid item> */}
        <CatButtonStyled onClick={handleClick} value="Main">
          Main
        </CatButtonStyled>
        {/* </Grid> */}
        {/* <Grid item> */}
        <CatButtonStyled onClick={handleClick} value="Starter">
          Starter
        </CatButtonStyled>
        {/* </Grid> */}
        {/* <Grid item> */}
        <CatButtonStyled onClick={handleClick} value="Side">
          Sides
        </CatButtonStyled>
        {/* </Grid>

        <Grid item xs={6}> */}
        <CatButtonStyled onClick={handleDietry} value="Side">
          Vegan
        </CatButtonStyled>
        {/* </Grid>

        <Grid item> */}
        <CatButtonStyled onClick={handleDietry} value="Side">
          Halal
        </CatButtonStyled>
        {/* </Grid> */}
      </Stack>

      <FoodFilterContent data={foodList} />
    </>
  );
};

export default FoodMenu;
