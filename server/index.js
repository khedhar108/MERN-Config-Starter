// Dotenv
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./configuration/connectDB.js";
// Routes
import User from "./routes/myroute.js";

// Database Connection

// import cors from "cors"; //Solving errors while connecting --back end to front end.

const app = express();
const PORT = process.env.PORT || 3000;

// Registering middleware- app.use()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// registering all routes
app.use("/", User);

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
