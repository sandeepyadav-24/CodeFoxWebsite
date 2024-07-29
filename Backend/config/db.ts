import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      process.env.DB_URL ||
        "mongodb+srv://sandeepyadav004343:tunnoh-8tatsa-zuwKev@cluster.spnaci6.mongodb.net/"
    )
    .then(() => {
      console.log("MongoDB is Connected...");
    })
    .catch(() => {
      console.error("DB connection failed:");
    });
};

export default connectDB;
