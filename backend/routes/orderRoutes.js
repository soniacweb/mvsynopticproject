import express from "express";
import {
  makeOrder,
  addItemToOrder,
  deleteItemInOrder,
  // updateOrderQty,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/order")
  .post(protect, makeOrder)
  .put(protect, addItemToOrder)
  // .put(protect, updateOrderQty)
  .delete(protect, deleteItemInOrder);

export default router;
