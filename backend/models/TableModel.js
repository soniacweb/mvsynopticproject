import mongoose from "mongoose";

const TableSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    spaces: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Table = mongoose.model("Table", TableSchema);

export default Table;
