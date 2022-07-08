import asyncHandler from "express-async-handler";
// import { request } from "http";
import FoodMenu from "../models/foodMenuModel.js";

const getFoodMenu = asyncHandler(async (req, res) => {
  const meals = await FoodMenu.find({});
  res.json(meals);
  console.log("successful request");
});

const getMealById = asyncHandler(async (req, res) => {
  const meal = await FoodMenu.findById(req.params.id);
  if (meal) {
    res.json(meal);
  } else {
    res.status(404);
    throw new Error("Meal not found");
  }
});

export { getMealById, getFoodMenu };
