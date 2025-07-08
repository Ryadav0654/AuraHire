import { Router } from "express";
import upload from "../middleware/multer";
import {
  resumeUploadController,
  getResume,
  getResumeById,
} from "../controllers/resume.controller";

const router: Router = Router();

router.post("/upload", upload, resumeUploadController);
router.get("/get-resume", getResume);
router.get("/get-resume/:id", getResumeById);

export default router;
