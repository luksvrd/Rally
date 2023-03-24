// This is where we connect Node to MongoDB using Mongoose
import mongoose from "mongoose";
import config from "./config.js";

const init = async () => {
  mongoose
    .connect(
      // ⚠️ ASSUMPTION: You have included the database name in the URL.
      `${config.mongoURL}`
    )
    .then(() => {
      console.info("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err.message);
    });
};

export default init;
