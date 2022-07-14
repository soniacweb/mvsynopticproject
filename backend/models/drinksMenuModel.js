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
      required: false,
    },
    allergens: {
      type: Array,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const DrinksMenu = mongoose.model("DrinksMenu", drinksMenuSchema);

export default DrinksMenu;
