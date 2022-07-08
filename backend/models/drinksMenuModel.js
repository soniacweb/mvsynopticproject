import mongoose from "mongoose";

const drinksMenuSchema = mongoose.Schema(
  {
    drinkName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    alcoholic: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const DrinksMenu = mongoose.model("DrinksMenu", drinksMenuSchema);

export default DrinksMenu;
