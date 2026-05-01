import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileHero = () => {
    const navigate = useNavigate()
    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] px-6 pb-8 md:pt-6 md:px-16">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Glow orb top right */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(249,115,22,0.06)_0%,transparent_70%)]" />

            <div className="max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-6 items-center relative z-10">

                {/* LEFT CONTENT */}
                <div>
                    {/* Badge */}
                    <div className="inline-block bg-[#0b1a2e] border border-orange-400/25 px-4 py-2 rounded-full mb-6">
                        <p className="text-xs text-orange-400 font-semibold tracking-widest uppercase">Profile Marketing</p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-gray-200">
                        Build Your{" "}
                        <span className="text-orange-400">Digital</span>
                        <br />
                        Authority.
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed">
                        We transform professional identities into high-velocity personal
                        brands. At Edurech, we bridge the gap between your expertise
                        and global recognition using strategic narrative design.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-6">
                        <button
                            onClick={() => navigate("/contact-page")}
                            className="bg-orange-400 cursor-pointer text-black px-6 py-3 rounded-xl font-medium hover:bg-orange-300 transition flex items-center gap-2">
                            Launch Your Brand <ArrowRight size={18} />
                        </button>

                        <button
                            onClick={() => navigate("/contact-page")}
                            className="border cursor-pointer border-white/10 px-6 py-3 rounded-xl text-gray-300 hover:border-orange-400 hover:text-white transition">
                            View Process
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/profileMarketing.jpg"
                            alt="Professional Business Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* subtle glow behind image */}
                    <div className="absolute -inset-2 bg-orange-500/10 blur-2xl rounded-2xl -z-10"></div>
                </div>

            </div>
        </section>
    );
};

export default ProfileHero;
