import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  console.log(req.headers.authorization); // accessing the bearer token generated after a successful login
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decoded", decoded);

      req.user = await User.findById(decoded.id).select("-password"); // return everything from authorised user object but the password
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorised, token failed");
    }
  }

  if (!token) {
    res.status(401); // not authorised
    throw new Error("Not authorised");
  }
});

export { protect };
