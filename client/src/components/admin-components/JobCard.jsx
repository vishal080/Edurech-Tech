import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  // get all jobs
  const getAllJobs = async () => {
    try {
      const response = await api.get("/api/jobs");
      setJobs(response.data.jobs);
      toast.success("Jobs fetched successfully");
    } catch (error) {
      console.log("Error fetching jobs", error);
      toast.error(
        error.response?.data?.message || "Internal server error to fetch jobs"
      );
    }
  };

  // useEffect to call get all jobs
  useEffect(() => {
    getAllJobs();
  }, []);

  // delte function
  const deleteJob = async (id) => {
    try {
      await api.delete(`http://localhost:8000/api/admin/jobs/${id}`);
      toast.success("job delete successfully")
    } catch (error) {
      console.log("Error deleting jobs", error);
      toast.error(
        error.response?.data?.message || "Internal server error to delete jobs"
      );
    }
  }

  return (
    <section className="md:py-2">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
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
                💼
              </div>

              <h3 className="text-lg font-semibold mb-1 text-[#333]">
                {job.title}
              </h3>

              <p className="text-[#666] mb-4">{job.company}</p>

              <ul className="space-y-2 mb-6 text-sm">
                <li className="relative pl-5 text-[#555]">
                  <span className="absolute left-0 text-[#ff6b35] font-bold">✓</span>
                  Location: {job.location}
                </li>

                <li className="relative pl-5 text-[#555]">
                  <span className="absolute left-0 text-[#ff6b35] font-bold">✓</span>
                  Experience: {job.experience}
                </li>

                <li className="relative pl-5 text-[#555]">
                  <span className="absolute left-0 text-[#ff6b35] font-bold">✓</span>
                  Salary: {job.salary}
                </li>
              </ul>

              {/* Admin Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/admin/edit-job/${job._id}`)}
                  className="flex-1 py-2 rounded-full text-white font-semibold
                  bg-blue-500 cursor-pointer hover:bg-blue-600 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteJob(job._id)}
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

export default JobCard;