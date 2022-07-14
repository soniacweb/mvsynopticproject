import mongoose from "mongoose";
import dotenv from "dotenv";

// import users from "./data/users.js";
import { food } from "./data/food.js";
import { drinks } from "./data/drinks.js";

import User from "./models/userModel.js";
import FoodMenu from "./models/foodMenuModel.js";
import DrinksMenu from "./models/drinksMenuModel.js";
import Order from "./models/orderModel.js";
import Table from "./models/tableModel.js";

import connectToDB from "./config/db.js";

dotenv.config();

connectToDB();

const importData = async () => {
  try {
    // avoids importing anything that's already in the db
    await User.deleteMany();
    await FoodMenu.deleteMany();
    await DrinksMenu.deleteMany();
    await Order.deleteMany();
    await Table.deleteMany();

    // import users
    // const createdUsers = await User.insertMany(users);

    // add sample menus
    const sampleFoodMenu = food.map((meal) => {
      return { ...meal };
    });

    const sampleDrinksMenu = drinks.map((drink) => {
      return { ...drink };
    });

    await FoodMenu.insertMany(sampleFoodMenu);
    await DrinksMenu.insertMany(sampleDrinksMenu);
    // console.log("data imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // avoids importing anything that's already in the db
    await Order.deleteMany();
    await FoodMenu.deleteMany();
    await DrinksMenu.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();
    await Table.deleteMany();
    console.log("data deleted");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();
