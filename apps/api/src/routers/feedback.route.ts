import { Router } from "express";
import { feedbackController, getFeedback } from "../controllers/feedback.controller";
const router: Router = Router();

router.post("/create", feedbackController);
router.get("/get-feedback", getFeedback);

export default router;