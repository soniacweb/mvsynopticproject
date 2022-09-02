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
    res.status(400);
    throw new Error("Unable to create a new order");
  }
});

const addItemToOrder = asyncHandler(async (req, res) => {
  const { orderId, itemObject, qty } = req.body;
  console.log("hello addItemToOrder", req);

  const newItem = await Order.findOneAndUpdate(
    { _id: orderId },
    {
      $push: {
        orderItems: [
          {
            itemObject,
            qty,
          },
        ],
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

const deleteItemInOrder = asyncHandler(async (req, res) => {
  const { _id, qty } = req.body;

  const itemToDelete = await Order.findOneAndDelete(
    { _id },
    {
      orderItems: {
        // item_id,
        name,
        qty,
        image,
        price,
      },
    }
  );

  const updatedOrderItems = await Order.save();
  if (updatedOrderItems) {
    res.status(201).json(updatedOrderItems);
  } else {
    res.status(400);
    throw new Error("Unable to delete item.");
  }
});

const updateOrderQty = asyncHandler(async (req, res) => {
  // res.send('Success!')
  const orderItems = await Order.findById(req.order._id);

  if (orderItems) {
    orderItems.inStock = req.body.inStock || orderItems.inStock;

    const updatedOrder = await orderItems.save();
    res.json({
      _id: updatedOrder._id,
      inStock: updatedOrder.inStock,
    });
  } else {
    res.status(404);
    throw new Error("OrderItem not found");
  }
});

export { makeOrder, addItemToOrder, deleteItemInOrder, updateOrderQty };
