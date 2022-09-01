import express from "express";
import {
  fetchAllTables,
  fetchTableById,
} from "../controllers/tableController.js";

const router = express.Router();

// get all tables
router.route("/").get(fetchAllTables);

// get single tables
router.route("/:id").get(fetchTableById);

export default router;
