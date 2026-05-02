// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors"
import adminRoutes from "./routes/admin.route.js"

// import Routes
import contactRoutes from "./routes/contact.route.js";
import jobRoutes from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import projectRoute from "./routes/project.route.js";

// Initialize Express app
const app = express();


// Middlewares.........................................
// Middleware to parse JSON bodies
app.use(express.json());

// cors
app.use(cors({
    origin: [
        // "https://edurechtech.com",
        "https://www.edurechtech.com",
        "http://localhost:5173"
    ],
    credentials: true, // Allow cookies to be sent
}))

// cookiesimport cookieParser from "cookie-parser";
app.use(cookieParser());


// Api routes............................................ 
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Api EndPoints........................................
app.use("/api", contactRoutes);
app.use("/api", jobRoutes);
app.use("/api", applicationRoute);
app.use("/api", projectRoute);

app.use("/api", adminRoutes)

export default app;