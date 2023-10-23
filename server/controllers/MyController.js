import { exampleModel } from "../models/exampleSchema";

class MyController {
  static logic1 = async (req, res) => {
    try {
      // Extract the data from the request body- object destructuring
      const { name, email, mobileNumber, confirmPassword } = req.body;
      // write logic here with help of Model and save it---send response finally
      const obj = new exampleModel({
        name,
        email,
        mobile: mobileNumber,
        confirmPassword,
      });
        // Save the new user to the database
        const savedData = await obj.save();

        // response
        res.status(200).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ error });
    }
  };

  static logic2 = async (req, res) => {
    try {
    } catch (error) {}
  };
}

export default MyController;
