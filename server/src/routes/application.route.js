import { Router } from "express";
import { applyJobs, getApplication } from "../controllers/application.controller.js";
import { adminAuth } from "../middleware/adminAuth.middleware.js";

const router = Router();

// job apply api (user api)
router.post("/jobs/:id/apply", applyJobs);

// admin api
router.get("/admin/applications", adminAuth, getApplication);

// export router
export default router;