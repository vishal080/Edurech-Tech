import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../service/api";
import Sidebar from "../../components/admin-components/Sidebar";
import Topbar from "../../components/admin-components/Topbar";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    techStack: "",
    liveLink: "",
    githubLink: "",
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await api.get(`/api/getProject/${id}`);
        const project = response.data.project;

        setFormData({
          projectName: project.projectName || "",
          projectDescription: project.projectDescription || "",
          techStack: project.techStack?.join(", ") || "",
          liveLink: project.liveLink || "",
          githubLink: project.githubLink || "",
        });
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Error fetching project details"
        );
        console.log("Fetch project error:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // convert comma-separated techStack string to array
      const techStackArray = formData.techStack
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== "");

      await api.put(`/api/admin/updateProject/${id}`, {
        ...formData,
        techStack: techStackArray,
      });

      toast.success("Project updated successfully!");
      navigate("/admin/projects");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating project");
      console.log("Update project error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-hidden">

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

        {/* Topbar */}
        <Topbar open={open} setOpen={setOpen} />

        <div className="p-4 md:p-8 overflow-y-auto">

          {/* Loading */}
          {fetching ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-gray-500 text-lg">
                Loading project details...
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-8 space-y-4"
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

                {/* Live Link + GitHub Link */}
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

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Updating…" : "Update Project"}
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/admin/projects")}
                    className="w-full cursor-pointer sm:w-auto px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>

                </div>

              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EditProject;
