import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/edurechTech`);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}

export default connectDB;