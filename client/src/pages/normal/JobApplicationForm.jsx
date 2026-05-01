import { useState } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const JobApplicationForm = () => {

    // individual states
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [resume, setResume] = useState(null);

    // get job id
    const { id } = useParams();

    // navigate
    const navigate = useNavigate();

    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post(`/api/jobs/${id}/apply`, {
                name,
                phone,
                email,
                experience,
                resume
            });

            toast.success("Job apply successfully");

            navigate("/");

            // reset form
            setName("");
            setPhone("");
            setEmail("");
            setExperience("");
            setResume(null);

        } catch (error) {
            console.log("error", error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] min-h-screen flex items-center justify-center p-4">
            <main className="w-full max-w-2xl animate-fade-in">

                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        Job Application
                    </h1>

                    <p className="text-gray-400 mt-2 text-sm">
                        Fill your details to apply for this position
                    </p>
                </header>

                {/* Form Card */}
                <section className="bg-[#141414] border border-white/10 rounded-2xl p-8 shadow-2xl">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm text-gray-300">Full Name</label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm text-gray-300">Phone Number</label>

                            <input
                                type="tel"
                                maxLength="10"
                                placeholder="Enter phone number"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm text-gray-300">Email</label>

                            <input
                                type="email"
                                placeholder="your@email.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition"
                            />
                        </div>

                        {/* Experience */}
                        <div className="space-y-2">
                            <label className="text-sm text-gray-300">Experience</label>

                            <select
                                required
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition"
                            >
                                <option value="">Select Experience</option>
                                <option value="Fresher">Fresher</option>
                                <option value="1-2 years">1-2 years</option>
                                <option value="3-5 years">3-5 years</option>
                                <option value="5+ years">5+ years</option>
                            </select>
                        </div>

                        {/* Resume */}
                        <div className="space-y-2">
                            <label className="text-sm text-gray-300">
                                Upload Resume
                            </label>

                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => setResume(e.target.files[0])}
                                className="w-full text-sm text-gray-400"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-br from-[#ff6b00] cursor-pointer to-[#ff9500] text-white font-semibold py-3.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.98] transition-all duration-200"
                        >
                            Submit Application
                        </button>

                    </form>

                </section>

            </main>
        </div>
    );
};

export default JobApplicationForm;