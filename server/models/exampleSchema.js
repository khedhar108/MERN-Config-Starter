import mongoose from "mongoose";
//*File name => UserSchema.js /userSchema  {PascalCase/camelCase} or user.models.js     --according your company
const miniSchema = new mongoose.Schema({
  key1: { type: "string", unique: true },
  key2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ModelName",
  },
});
// Defining Schema----registration
const exampleSchema = new mongoose.Schema(
  {
    // no use of semicolon ";" here only comma for seperation
    name: String, //simple
    email: { type: String, required: true, unique: true, trim: true }, //advanced
    //connection one model key to anothermodel
    anotherModelRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "modelNameOrcollection", //! ref takes mongoose.model("collectionName")
    },
    complexField: [miniSchema], // adding short Schema in existing schema to simplify complexity
  },
  { timestamps: true } // crearedAt and UpdatedAt fields
);
const collectionOrnameOfModel = mongoose.model("nameOfModel", exampleSchema);
export { collectionOrnameOfModel }; // userModel--camelCase
