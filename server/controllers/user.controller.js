import { asyncHandler } from "../utils/asyncHandler";

//* const myController = asyncHandler(async (req,res) => {});
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "User registered ",
  });
});

export { registerUser };
