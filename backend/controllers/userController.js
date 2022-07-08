import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// authenticate user and send back data
// get token
// post request /api/users/login
// access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);

  if (user && (await user.matchPassword(password))) {
    // bcrypt in user model
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      dob: user.dob,
      // isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// get user profile- find the user
// get request /api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res) => {
  // res.send('Success!')
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      dob: user.dob,
      // isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//update
// put/update /api/users/profile
// private
const updateUserProfile = asyncHandler(async (req, res) => {
  // res.send('Success!')
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      dob: updatedUser.dob,
      // isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Register new user
// post request /api/users
// access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, dob, password } = req.body;
  //   res.send({ email, password, })
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400); // bad request
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    dob,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      dob: user.dob,
      // isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400); // bad request
    throw new Error("Invalid user data");
  }
});

export { authUser, getUserProfile, registerUser, updateUserProfile };
