import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({},{timestamps:true});
const Model = mongoose.model("Model", nameSchema);
export { Model };
