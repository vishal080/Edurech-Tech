import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth.middleware.js";
import { createProject, deleteProject, getProject, getProjectById, updateProject } from "../controllers/project.controller.js";

const router = Router();

// admin route
router.post("/admin/addProject", adminAuth, createProject);
router.put("/admin/updateProject/:id", adminAuth, updateProject);
router.delete("/admin/deleteProject/:id", adminAuth, deleteProject)

// user route
router.get("/getProject", getProject);
router.get("/getProject/:id", getProjectById);

export default router;