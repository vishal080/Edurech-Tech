import { Brain, Cloud, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative pt-22 md:pt-16 min-h-screen flex items-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] overflow-hidden">
            {/* Floating Glow */}
            <div className="absolute inset-0 z-[1]">
                <div className="absolute top-[10%] left-[10%] w-16 h-16 rounded-full bg-orange-400/10 blur-xl animate-pulse"></div>
                <div className="absolute top-[30%] right-[15%] w-24 h-24 rounded-full bg-purple-500/10 blur-xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-[20%] left-[20%] w-20 h-20 rounded-full bg-orange-300/10 blur-xl animate-pulse delay-2000"></div>
            </div>

            {/* Main Layout */}
            <div className="relative z-[2] px-6 md:px-16 max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    {/* Badge */}
                    <div className="inline-block bg-[#0b1a2e] border border-white/10 px-4 py-2 rounded-full mb-6">
                        <p className="text-orange-400 text-xs tracking-widest">
                            OUR CAPABILITIES
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#cbd5f5]">
                        Building the{" "}
                        <span className="text-orange-400">Digital</span>
                        <br />
                        <span className="text-orange-400">Future</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed">
                        We deliver specialized technology services designed to scale your
                        vision. From precision-engineered software to data-driven AI models,
                        we are the vanguard of your digital transformation.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={() => {
                                navigate("/contact-page")
                                window.scrollTo(0, 0);
                            }}
                            className="px-6 py-3 bg-orange-400 cursor-pointer text-black font-semibold rounded-xl hover:bg-orange-300 transition">
                            Get Started
                        </button>
                        <button
                            onClick={() => {
                                navigate("/contact-page")
                                window.scrollTo(0, 0);
                            }}
                            className="px-6 py-3 border cursor-pointer border-white/20 text-white rounded-xl hover:bg-white/10 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative hidden md:block">

                    {/* Glow */}
                    <div className="absolute -inset-10 bg-orange-500/10 blur-3xl rounded-full"></div>

                    {/* Card */}
                    <div className="relative bg-[#0b1a2e]/80 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl space-y-5">

                        <div className="flex items-center gap-4">
                            <Brain className="text-orange-400" />
                            <div>
                                <p className="text-white font-semibold">AI Solutions</p>
                                <p className="text-gray-400 text-sm">Smart Automation</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Cloud className="text-purple-400" />
                            <div>
                                <p className="text-white font-semibold">Cloud Services</p>
                                <p className="text-gray-400 text-sm">Scalable Infra</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Code className="text-blue-400" />
                            <div>
                                <p className="text-white font-semibold">Development</p>
                                <p className="text-gray-400 text-sm">Modern Apps</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;