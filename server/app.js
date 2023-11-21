import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import User from "./routes/myroute.js";
import userRouter from "./routes/user.router.js";

const app = express();

// import cors from "cors"; //Solving errors while connecting --back end to front end.
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Registering middleware- app.use()
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// registering all routes- app.use("route_prefix", routerfile)
app.use("/", User);//! old way
//* production level approach 
app.use("api/v1/users", userRouter);

export { app };
