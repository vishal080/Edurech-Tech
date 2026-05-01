import { Router } from "express";
import { getContactInfo, submitContactForm } from "../controllers/contact.controller.js";
import { adminAuth } from "../middleware/adminAuth.middleware.js";

const router = Router();

// Contact form submission route
router.post("/contact", submitContactForm)

// Admin api
router.get("/admin/contact", adminAuth, getContactInfo)

export default router;