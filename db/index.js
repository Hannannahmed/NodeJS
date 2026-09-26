import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://hannanahmed1563_db_user:Test123@hannancluster0.r655amr.mongodb.net/shophub";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });