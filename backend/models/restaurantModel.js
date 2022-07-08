import mongoose from "mongoose";

const RestaurantSchema = mongoose.Schema(
  {
    tablesList: [
      {
        table: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Table",
        },
      },
    ],

    // location: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;
