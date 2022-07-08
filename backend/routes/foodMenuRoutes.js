import express from "express";
import { getFoodMenu, getMealById } from "../controllers/foodMenuController.js";

const router = express.Router();

// get all products
router.route("/mainmenu").get(getFoodMenu);

// get single product
router.route("/mainmenu/:id").get(getMealById);

export default router;
