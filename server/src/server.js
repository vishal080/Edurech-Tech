import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/db.js";

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// Connect to MongoDB
connectDB();