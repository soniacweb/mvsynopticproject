import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";

// Routes imports
import userRoutes from "./routes/userRoutes.js";
import foodMenuRoutes from "./routes/foodMenuRoutes.js";
import drinksMenuRoutes from "./routes/drinksMenuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import tableRoutes from "./routes/tableRoutes.js";
import morgan from "morgan";
import cors from "cors";

// db
dotenv.config();
connectToDB();

// app
const app = express();

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("adding cors");
  app.use(cors({ origin: true, credentials: true }));
}

// routes
app.use(express.json()); // to parse req.body for post requests

app.use("/api", foodMenuRoutes);
app.use("/api", drinksMenuRoutes);
app.use("/api/users", userRoutes);
app.use("/api", orderRoutes);

// app.use("/api/location", locationRoutes);
app.use("/api/tables", tableRoutes);

//PORT

const PORT = process.env.PORT || 8080;

// listener

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
