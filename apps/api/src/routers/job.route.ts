import { Router } from "express";
import {
  createJobs,
  getJobById,
  getJobs,
} from "../controllers/jobs.controller";

const router: Router = Router();

router.post("/create", createJobs);
router.get("/get-jobs", getJobs);
router.get("/get-jobs/:id", getJobById);

export default router;
