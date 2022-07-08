import jwt from "jsonwebtoken";

// passing in a user id as thats what i want for the payload
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
