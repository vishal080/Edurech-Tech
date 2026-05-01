import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../service/api";
import { toast } from "react-toastify";

const Hero = () => {
    // useState
    const [jobs, setJobs] = useState([]);

    // useNavigate
    const navigate = useNavigate();

    // fetch jobs
    const getJobs = async () => {
        try {
            const res = await api.get("/api/jobs");
            setJobs(res.data.jobs)
            toast.success("Fetching jobs successfully")
        } catch (error) {
            console.log("Error fetching jobs:", error);
            toast.error(error.response?.data?.message || "Failed to fetch jobs");
        }
    }

    // useEffect
    useEffect(() => {
        getJobs();
    }, [])

    return (
        <div>
            {/* Hero with Header overlaid */}
            <section
                className="relative h-[70vh] w-full flex items-center justify-center"
                style={{
                    backgroundImage: "url('/careerPage.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "420px",
                }}
            >

                {/* Careers title */}
                <h1
                    className="relative z-10 text-white font-bold"
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        letterSpacing: "0.02em",
                        textShadow: "0 2px 16px rgba(0,0,0,0.3)",
                    }}
                >
                    Careers
                </h1>
            </section>

            {/* Sub-heading */}
            <section className="text-center py-10">
                <h2 className="text-3xl font-bold text-gray-800">Career</h2>
                <p className="text-gray-500 mt-2 text-base">Job Opening in IT Company. Apply Now!</p>
            </section>

            {/* Jobs Section */}
            <section>
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

                        {jobs.map((job) => (
                            <div
                                key={job._id}
                                className="
                                group relative bg-white p-10 rounded-2xl overflow-hidden
                                shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                                border-2 border-transparent
                                transition-all duration-300
                                hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
                                hover:border-[#ff6b35]
        "
                            >

                                {/* Top gradient bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#ff6b35] to-[#f7931e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                                {/* Icon */}
                                <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center text-2xl text-white mb-6
                                    bg-gradient-to-br from-[#ff6b35] to-[#f7931e]">
                                    💼
                                </div>

                                <h3 className="text-xl font-semibold mb-2 text-[#333]">
                                    {job.title}
                                </h3>

                                <p className="text-[#666] mb-4">
                                    {job.company}
                                </p>

                                <ul className="space-y-2 mb-6">
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

                                <button
                                    onClick={() => navigate(`/job-application/${job._id}`)}
                                    className="inline-block cursor-pointer px-6 py-2 rounded-full text-white font-semibold
          bg-gradient-to-r from-[#ff6b35] to-[#f7931e]
          transition hover:scale-105
          hover:shadow-[0_5px_15px_rgba(255,107,53,0.4)]">
                                    Apply Now
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;