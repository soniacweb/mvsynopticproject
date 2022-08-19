import asyncHandler from "express-async-handler";
import Table from "../models/tableModel.js";

const getAllTables = asyncHandler(async (req, res) => {
  const tables = await Table.find({});
  res.json(tables);
});

const getTableById = asyncHandler(async (req, res) => {
  const table = await Table.findById(req.params.id);

  if (table) {
    res.json(table);
  } else {
    res.status(404);
    throw new Error("Table not found");
  }
});

export { getAllTables, getTableById };
