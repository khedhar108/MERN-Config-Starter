import mongoose from "mongoose";
// Dotenv
import dotenv from "dotenv";
dotenv.config();
//!  Add .js extension  otherwiese get Error
import { DB_NAME } from "../constants.js";

const MONGODB_URL = `${process.env.MONGODB_URL}/${DB_NAME}`

async function connectDB() {
  try {
    console.log("conntecting to db....");
    const connectionInstance = await mongoose.connect(MONGODB_URL, {
      /*WHEN GETTING ERROR THEN USE: PREVIOUS VERSIONS */
      //   useNewUrlParser:true,
      //   useUnifiedTopology:true,
    });
    console.log("Connected Successfully 🙂");
    console.log(`\n MongoDb Connected !! DB Host: ${connectionInstance.connection.host}`)
    // console.log(connectionInstance)

  } catch (error) {
    console.log(`Error in connection MongoDB 😭: ${error}`);
    process.exit(1);
    /*The process.exit(code) method instructs Node.js to terminate the process synchronously with an exit status of code */
  }
}

export default connectDB;