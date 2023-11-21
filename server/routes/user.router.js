import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
const router = Router();

// router.route('/path').httpMethod()
// prefix + route = http://localhost:Port/api/v1/users/register
router.route('/register').get(
registerUser
)

export default router