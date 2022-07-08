import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // specific user placing the order
      required: true,
      ref: "User",
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Table",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: false },
        price: { type: Number, required: true },
        meal: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "FoodMenu",
        },
        drink: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "DrinksMenu",
        },
      },
    ],
    paymentMethod: {
      type: String,
      required: false,
      default: "",
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    total: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
