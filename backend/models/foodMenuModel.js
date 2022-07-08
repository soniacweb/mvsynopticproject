import mongoose from "mongoose";

const foodMenuSchema = mongoose.Schema(
  {
    dishName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    allergens: {
      type: String,
      required: true,
    },
    dietryRequirements: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    spiceRating: {
      type: Number,
      required: true,
      default: 0,
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

const FoodMenu = mongoose.model("FoodMenu", foodMenuSchema);

export default FoodMenu;
