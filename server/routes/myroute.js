import MyController from "../controllers/MyController";

const router = express.Router();
router.get('/api/....', MyController.logic1)
// router.get('/api/...gr.', MyController.logic2)
// router.get('/api/..rtr..', MyController.logic3)
router.get('/api/:dynamic', MyController.logic4)


export default router;