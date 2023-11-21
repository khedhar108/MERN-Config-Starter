// Dotenv- always on top of every file
import dotenv from "dotenv";
dotenv.config();


import { app } from "./app.js";
import connectDB from "./configuration/connectDB.js";

// Database Connection
const PORT = process.env.PORT || 3000;



const startPortAndConnectDatabase = async () => {
  try {
    // Database Connection
    await connectDB();
    // listening on PORT
    app.listen(PORT, () => {
      console.log(`listening at ➡️    http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startPortAndConnectDatabase();

/**==============================Basic logic to start the backend============
      import express from "express";
      const app = express();
      const PORT = 3080;

      app.get("/", (req, res) => {
        res.send("welcome");
      });

      app.listen(PORT, () => {
        console.log(`listening on port http://localhost:${PORT}`);
      });
 */
