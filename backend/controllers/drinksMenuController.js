import asyncHandler from "express-async-handler";
import DrinksMenu from "../models/drinksMenuModel.js";

const getDrinksMenu = asyncHandler(async (req, res) => {
  const drinks = await DrinksMenu.find({});
  res.json(drinks);
});

const getDrinkById = asyncHandler(async (req, res) => {
  const drink = await DrinksMenu.findById(req.params.id);

  if (drink) {
    res.json(drink);
  } else {
    res.status(404);
    throw new Error("Drink not found");
  }
});

export { getDrinkById, getDrinksMenu };
