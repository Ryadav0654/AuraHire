import { Router } from "express";
import { getResumeAtsResponse } from "../controllers/ats.controller";

const router: Router = Router();

router.post("/analyze", getResumeAtsResponse);

export default router;