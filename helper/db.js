import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/events");

    console.log("Connect to the database");
  } catch (error) {
    throw new Error("Unable to connect to the database");
  }
};
