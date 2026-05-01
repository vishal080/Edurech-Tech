import mongoose, { Schema } from "mongoose";

// Create jobApply Schema
const applicationSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    phone: {
        type: Number,
        required: [true, "phone number is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    experience: {
        type: String,
        enum: ["Fresher", "1-2 years", "3-5 years", "5+ years"],
        required: [true, "experience is required"],
    },
    resume: {
        type: String,
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: true
    }
},
    { timestamps: true }
)

// create model and export it
export const Application = mongoose.model("Application", applicationSchema)