import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // get all projects
  const getAllProjects = async () => {
    try {
      const response = await api.get("/api/getProject");
      setProjects(response.data.projects);
      toast.success("Projects fetched successfully");
    } catch (error) {
      console.log("Error fetching projects", error);
      toast.error(
        error.response?.data?.message || "Internal server error to fetch projects"
      );
    }
  };

  // useEffect to call get all projects
  useEffect(() => {
    getAllProjects();
  }, []);

  // delete function
  const deleteProject = async (id) => {
    try {
      await api.delete(`/api/admin/deleteProject/${id}`);
      toast.success("Project deleted successfully");
      // refresh the list after delete
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.log("Error deleting project", error);
      toast.error(
        error.response?.data?.message || "Internal server error to delete project"
      );
    }
  };

  return (
    <section className="md:py-2">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group relative bg-white p-6 rounded-2xl overflow-hidden
              shadow-[0_10px_30px_rgba(0,0,0,0.1)]
              border-2 border-transparent
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
              hover:border-[#ff6b35]"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#ff6b35] to-[#f7931e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Icon */}
              <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-xl text-white mb-4 bg-gradient-to-br from-[#ff6b35] to-[#f7931e]">
                🚀
              </div>

              <h3 className="text-lg font-semibold mb-1 text-[#333]">
                {project.projectName}
              </h3>

              <p className="text-[#666] mb-4 text-sm line-clamp-2">
                {project.projectDescription}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <ul className="space-y-2 mb-6 text-sm">
                <li className="relative pl-5 text-[#555]">
                  <span className="absolute left-0 text-[#ff6b35] font-bold">✓</span>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                </li>

                <li className="relative pl-5 text-[#555]">
                  <span className="absolute left-0 text-[#ff6b35] font-bold">✓</span>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub Repo
                  </a>
                </li>
              </ul>

              {/* Admin Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/admin/edit-project/${project._id}`)}
                  className="flex-1 py-2 rounded-full text-white font-semibold
                  bg-blue-500 cursor-pointer hover:bg-blue-600 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(project._id)}
                  className="flex-1 py-2 rounded-full text-white font-semibold
                  bg-gradient-to-r from-[#ff6b35] to-[#f7931e] cursor-pointer transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
