import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../service/api";
import Sidebar from "../../components/admin-components/Sidebar";
import Topbar from "../../components/admin-components/Topbar";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    experience: "",
    salary: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Fetch job data
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await api.get(`/api/jobs/${id}`);
        const job = response.data.job;

        setFormData({
          title: job.title || "",
          company: job.company || "",
          location: job.location || "",
          experience: job.experience || "",
          salary: job.salary || "",
          description: job.description || "",
        });
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Error fetching job details"
        );
        console.log("Fetch job error:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.put(`/api/admin/jobs/${id}`, formData);
      toast.success("Job updated successfully!");
      navigate("/admin-dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating job");
      console.log("Update job error:", error);
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

        <div className="p-4 md:p-2 overflow-y-auto">

          {/* Loading */}
          {fetching ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-gray-500 text-lg">
                Loading job details...
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-8 space-y-4"
              >

                {/* Job Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Frontend Developer"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Google"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                {/* Location + Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Bangalore, India"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Experience
                    </label>

                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                    >
                      <option value="">Select experience</option>
                      <option value="Fresher">Fresher</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>

                </div>

                {/* Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salary
                  </label>

                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="e.g. ₹6,00,000 - ₹10,00,000"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe the role, responsibilities, requirements…"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row md:gap-118 gap-4">

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Updating…" : "Update Job"}
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/admin-dashboard")}
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

export default EditJob;