import mongoose, { Schema } from "mongoose"

// Create Schema 
const jobSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    company: {
        type: String,
        required: [true, "Company name is required"],
        trim: true,
    },
    location: {
        type: String,
        required: [true, "Location is required"]
    },
    experience: {
        type: String,
        enum: ["Fresher", "1-2 years", "3-5 years", "5+ years"]
    },
    salary: {
        type: String
    },
    description: {
        type: String,
    }
},
    { timestamps: true }
)

// Create model and export it
export const Job = mongoose.model("Job", jobSchema);