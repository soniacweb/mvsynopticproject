import express from "express";
import {
  getAllTables,
  getDrinksMenu,
} from "../controllers/drinksMenuController.js";

const router = express.Router();

// get all drinks
router.route("/tables").get(getAllTables);

// get single drink
router.route("/tables/:id").get(getTableById);

export default router;
