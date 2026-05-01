import { Router } from "express";
import { createJobs, deleteJobs, getJobs, getJobById, updateJobs } from "../controllers/job.controller.js";
import { adminAuth } from "../middleware/adminAuth.middleware.js";

const router = Router();

// Api end points (Admin Api's)
router.post("/admin/jobs", adminAuth, createJobs);
router.put("/admin/jobs/:id", adminAuth, updateJobs);
router.delete("/admin/jobs/:id", adminAuth, deleteJobs);

// User Api
router.get("/jobs", getJobs);
router.get("/jobs/:id", getJobById);

// export router
export default router;