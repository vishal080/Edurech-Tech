import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebDevHero = () => {
    let navigate = useNavigate();

    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] px-6 pt-2 pb-6 md:pt-6 md:px-16">
            <div className="max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-6  items-center">

                {/* LEFT CONTENT */}
                <div>
                    {/* Badge */}
                    <div className="inline-block bg-[#0b1a2e] border border-white/10 px-4 py-2 rounded-full mb-6">
                        <p className="text-orange-400 text-xs tracking-widest">
                            Modern Web Solutions
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-gray-200">
                        Web <br />
                        Development,{" "}
                        <span className="text-orange-400">Simplified.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed">
                        Think of a website as your business's digital home. We don't just
                        build walls and a roof; we create a space where your customers feel
                        welcome, find what they need instantly, and keep coming back. We
                        turn complex code into clear results.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-6">
                        <button
                            onClick={() => {
                                navigate("/contact-page")
                            }}
                            className="bg-orange-400 cursor-pointer text-black px-6 py-3 rounded-xl font-medium hover:bg-orange-300 transition flex items-center gap-2">
                            Start Your Project <ArrowRight size={18} />
                        </button>

                        <button
                            onClick={() => navigate("/portfolio")}
                            className="border border-white/10 px-6 py-3 cursor-pointer rounded-xl text-gray-300 hover:border-orange-400 hover:text-white transition">
                            View Portfolio
                        </button>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/computerImg.jpg"
                            alt="Web Development"
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

export default WebDevHero;