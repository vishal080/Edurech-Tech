import mongoose, { Schema } from "mongoose";

// Create Schema
const projectSchema = new Schema({
    projectName: {
        type: String,
        required: [true, "Project Name is required"],
        trim: true,
    },
    projectDescription: {
        type: String,
        required: [true, "Project Description is required"],
        trim: true,
    },
    techStack: {
        type: [String],
        required: [true, "Tech stack is required"],
    },
    liveLink: {
        type: String,
        required: [true, "Demo link is required"],
        match: [/^https?:\/\/.+/, "Please enter a valid URL"],
    },
    githubLink: {
        type: String,
        required: [true, "Github link is required"],
        match: [/^https?:\/\/.+/, "Please enter a valid URL"],
    }
}, { timestamps: true });

// Create and export model
export const Project = mongoose.model("Project", projectSchema);