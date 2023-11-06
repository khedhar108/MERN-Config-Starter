import MyController from "../controllers/MyController.js";
import express from "express";
const router = express.Router();
router.get("/api/jokes", MyController.logic2);
// router.post('/api/...gr.', MyController.logic2)
// router.put('/api/..rtr..', MyController.logic3)
// router.get('/api/:dynamic', MyController.logic4)

export default router;
