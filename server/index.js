// Dotenv
import dotenv from "dotenv";
dotenv.config();
import express from "express";
// Routes
import User from "./routes/myroute.js";
// Database Connection 
import connectdb from "./config/connectdb.js";
// import cors from "cors"; //Solving errors while connecting --back end to front end.

const app = express();
const PORT = process.env.PORT || 3000;
// const MONGODB_URL = process.env.MONGODB_URL;

// Registering middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//----------      --------
// Database Connection
// connectDB(MONGODB_URL);

// registering all routes
// app.use("/", User);
// -------      -------

app.get("/", (req, res) => {
  res.send("Welcome to backend!");
});

const startPortAndDatabase = async () => {
  try {
    // await connectdb()
    app.listen(PORT, () => {
      console.log(`listening at  http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startPortAndDatabase();

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
