import { exampleModel } from "../models/exampleSchema.js";
const userData = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "profession": "Software Engineer"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "profession": "Data Scientist"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bob@example.com",
      "profession": "Web Developer"
    },
    {
      "id": 4,
      "name": "Alice Brown",
      "email": "alice@example.com",
      "profession": "UX Designer"
    },
    {
      "id": 5,
      "name": "Charlie Wilson",
      "email": "charlie@example.com",
      "profession": "Network Administrator"
    }
  ]
}

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
 
  // sending static data form here only for learning purposes
  static logic2 = async (req, res) => {
    try {
      res.status(200).send(userData)
    } catch (error) {
      console.log(error.message)
    }
  };
}

export default MyController;
