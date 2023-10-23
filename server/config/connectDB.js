import mongoose from "mongoose";
// Dotenv
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

async function connectdb() {
  console.log("conntecting to db....");
  await mongoose.connect(MONGODB_URL, {
    //   useNewUrlParser:true,
    //   useUnifiedTopology:true,
  });
  console.log("Connected Successfully..");
}

export default connectdb;
