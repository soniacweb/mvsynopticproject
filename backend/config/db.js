import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected ${connection.connection.host}`);
  } catch (error) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
};
export default connectToDB;
