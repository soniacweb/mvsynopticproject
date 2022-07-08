// .post(protect, makeOrder)
//   .get(protect, getOrder)
//   .put(protect, updateOrder);

import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
// import generateToken from "../utils/generateToken.js";

// create empty NEW order
const makeOrder = asyncHandler(async (req, res) => {
  const { user, table } = req.body;

  const newOrder = await Order.create({
    user,
    table,
    orderItems: [],
    paymentMethod: "",
    paymentResult: {
      id: "",
      status: "",
      update_time: "",
      email_address: "",
    },
    total: 0.0,
    isPaid: false,
    paidAt: null,
  });

  //push newOrder into OrderItems in db
  if (newOrder) {
    res.status(201).json({
      _id: newOrder._id,
    });
  } else {
    res.status(400); // daddy nooooooooo
    throw new Error("Unable to create a new order for you");
  }
});

const addItemsToOrder = asyncHandler(async (req, res) => {
  const { _id, name, qty, image, price } = req.body;

  const newItem = await Order.findOneAndUpdate(
    { _id },
    {
      $push: {
        orderItems: {
          // item_id,
          name,
          qty,
          image,
          price,
        },
      },
    }
  );

  if (newItem) {
    res.status(201).json(newItem);
  } else {
    res.status(400);
    throw new Error(
      "Unfortunately we are unable to add this item to your order."
    );
  }
});

export { makeOrder, addItemsToOrder };
