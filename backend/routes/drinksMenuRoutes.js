import express from "express";
import {
  getDrinkById,
  getDrinksMenu,
} from "../controllers/drinksMenuController.js";

const router = express.Router();

// get all drinks
router.route("/drinksmenu").get(getDrinksMenu);

// get single drink
router.route("/drinksmenu/:id").get(getDrinkById);

export default router;
