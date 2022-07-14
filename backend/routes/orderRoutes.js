import express from "express";
import {
  makeOrder,
  addItemToOrder,
  deleteItemInOrder,
  // getOrder,
  // updateOrder,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/order")
  .post(protect, makeOrder)
  // .get(protect, getOrder)
  .put(protect, addItemToOrder)
  .delete(protect, deleteItemInOrder);

export default router;
