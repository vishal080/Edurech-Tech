import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../service/api";
import Sidebar from "../../components/admin-components/Sidebar";
import Topbar from "../../components/admin-components/Topbar";

const CreateProject = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    techStack: "",
    liveLink: "",
    githubLink: "",
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // convert comma-separated techStack string to array
      const techStackArray = formData.techStack
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== "");

      await api.post("/api/admin/addProject", {
        ...formData,
        techStack: techStackArray,
      });

      toast.success("Project created successfully!");
      navigate("/admin/projects");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error creating project"
      );
      console.log("Create project error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar open={open} />

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <main className="flex-1 flex flex-col overflow-hidden">
        <Topbar open={open} setOpen={setOpen} />

        <div className="p-8 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Add New Project</h1>
              <p className="text-gray-500">
                Fill in the details to add a new portfolio project.
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/projects")}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              ← Back
            </button>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-6"
          >
            {/* Project Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                required
                placeholder="e.g. E-Commerce Platform"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Describe the project, its features, and purpose…"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
              />
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tech Stack <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                required
                placeholder="e.g. React, Node.js, MongoDB, Express"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <p className="text-xs text-gray-400 mt-1">
                Separate technologies with commas
              </p>
            </div>

            {/* Live Link & GitHub Link — side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Live Demo Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="liveLink"
                  value={formData.liveLink}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GitHub Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                  required
                  placeholder="https://github.com/user/repo"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Creating…" : "Add Project"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/admin/projects")}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateProject;
