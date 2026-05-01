import { Job } from "../models/job.model.js";

// Create jobs controller
const createJobs = async (req, res) => {
    try {
        // get data from frontend(req.body)
        const { title, company, location, experience, salary, description } = req.body;

        // validation
        if (!title || !company || !location) {
            return res.status(400).json({
                message: "All Fields are required"
            })
        }

        // create jobs
        const createdJob = await Job.create({
            title,
            company,
            location,
            experience,
            salary,
            description
        })

        // return response
        return res.status(201).json({
            message: "Job created successfully",
            createdJob
        })

    } catch (error) {
        console.log("createJobs error : ", error)
        return res.status(500).json({
            message: "Internal server error during create jobs"
        })
    }
}

// Update jobs controller
const updateJobs = async (req, res) => {
    try {
        // get id from req.params;
        const { id } = req.params;

        // update job
        const job = await Job.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        // check job exists
        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            })
        }

        // return response
        return res.status(200).json({
            message: "Job updated successfully",
            job
        })
    } catch (error) {
        console.log("updateJob error : ", error)
        return res.status(500).json({
            message: "Internal server error during update jobs"
        })
    }
}

// Delete jobs controller
const deleteJobs = async (req, res) => {
    try {
        // get id from params
        const { id } = req.params;

        // delete job
        const job = await Job.findByIdAndDelete(id);

        if (!job) {
            return res.status(400).json({
                message: "Job not found"
            })
        }

        // return response
        return res.status(200).json({
            message: "Job deleted successfully"
        })
    } catch (error) {
        console.log("error delete jobs : ", error)
        return res.status(500).json({
            message: "Internal server error during delete jobs"
        })
    }
}

// Get jobs controller
const getJobs = async (_, res) => {
    try {
        // Get jobs from DB
        const jobs = await Job.find();

        // validation
        if (jobs.length === 0) {
            return res.status(404).json({
                message: "No jobs available"
            })
        }

        // return response
        return res.status(200).json({
            message: "Jobs fetch successfully",
            jobs
        })
    } catch (error) {
        console.log("Internal Server Error to fetch jobs: ", error);
        return res.status(500).json({
            message: "Internal Server Error to fetch jobs"
        })
    }
}

// Get single job by ID
const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            })
        }

        return res.status(200).json({
            message: "Job fetched successfully",
            job
        })
    } catch (error) {
        console.log("getJobById error: ", error);
        return res.status(500).json({
            message: "Internal server error to fetch job"
        })
    }
}

// export controllers
export {
    createJobs,
    updateJobs,
    deleteJobs,
    getJobs,
    getJobById,
}