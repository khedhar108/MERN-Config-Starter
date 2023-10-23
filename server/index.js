// Dotenv
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors"; //Solving errors while connecting --back end to front end.

const app = express();
const PORT = process.env.PORT || 3000;
// const MONGODB_URL = process.env.MONGODB_URL;

// Registering middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//----------------------
// Database Connection
connectDB(MONGODB_URL);
// registering all routes
app.use("/", User);

const start = async () => {
  try {
    // await connectDB()
     app.listen(PORT, () => {
      console.log(`listening at  http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
