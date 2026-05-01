import { Project } from "../models/project.model.js";

// Create Project controller
const createProject = async (req, res) => {
    try {
        // get details from frontend(req.body)
        const { projectName, projectDescription, techStack, liveLink, githubLink } = req.body;

        // validation
        if (
            !projectName ||
            !projectDescription ||
            !techStack ||
            !liveLink ||
            !githubLink ||
            !Array.isArray(techStack) ||
            techStack.lenght === 0
        ) {
            return res.status(400).json({
                message: "All fields are required!"
            })
        }

        // store in db
        const project = await Project.create({
            projectName,
            projectDescription,
            techStack,
            liveLink,
            githubLink
        })

        // success response
        return res.status(201).json({
            message: "Project add successfully!",
            project
        })
    } catch (error) {
        console.log("error during add project : ", error);

        res.status(500).json({
            message: "Internal server error during add project"
        })
    }
}

// Edit Project controller
const updateProject = async (req, res) => {
    try {
        // get id from req.params
        const { id } = req.params;

        // update project
        const project = await Project.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        // check project exists
        if (!project) {
            return res.status(404).json({
                message: "Projects not found"
            })
        }

        // return response
        return res.status(200).json({
            message: "Project updated successfully",
            project
        })
    } catch (error) {
        console.log("error during edit project : ", error);

        res.status(500).json({
            message: "Internal server error during edit project"
        })
    }
}

// Delete Project controller
const deleteProject = async (req, res) => {
    try {
        // get id from req.params
        const { id } = req.params;

        // delete project
        const project = await Project.findByIdAndDelete(id);

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            })
        }

        // return response
        return res.status(200).json({
            message: "Project delete successfully"
        })
    } catch (error) {
        console.log("error during get project : ", error);

        res.status(500).json({
            message: "Internal server error during get project"
        })
    }
}

// Get Project controller
const getProject = async (_, res) => {
    try {
        // get projects from databasee
        const projects = await Project.find();

        if (projects.length === 0) {
            res.status(404).json({
                message: "projects not found"
            })
        }

        return res.status(200).json({
            message: "projects fetch successfully",
            projects
        })
    } catch (error) {
        console.log("error during get project : ", error);

        res.status(500).json({
            message: "Internal server error during get project"
        })
    }
}

// Get single project by ID
const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id);

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            })
        }

        return res.status(200).json({
            message: "Project fetched successfully",
            project
        })
    } catch (error) {
        console.log("getProjectById error: ", error);
        return res.status(500).json({
            message: "Internal server error to fetch project"
        })
    }
}

// exports
export {
    createProject,
    getProject,
    getProjectById,
    updateProject,
    deleteProject,
}