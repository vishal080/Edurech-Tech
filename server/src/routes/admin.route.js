// const express = require("express")
import express from "express";
import { adminLogin, adminLogout } from "../controllers/admin.controller.js";
import { adminAuth } from "../middleware/adminAuth.middleware.js";

const router = express.Router();

// Authentication routes
router.post("/admin/login", adminLogin);
router.get("/admin/logout", adminLogout);

// protected route
router.get("/admin/me", adminAuth, (req, res) => {
    res.status(200).json({
        success: true,
        admin: req.admin,
    });
});

export default router;