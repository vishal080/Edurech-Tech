import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SoftwareDevHero = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] px-6 pt-2 md:pt-10 pb-8 md:pt-6 md:px-16">
            <div className="max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-6  items-center">
                {/* LEFT CONTENT */}
                <div>
                    {/* Badge */}
                    <div className="inline-block bg-[#0b1a2e] border border-white/10 px-4 py-2 rounded-full mb-6">
                        <p className="text-orange-400 text-xs tracking-widest">
                            SOFTWARE DEVELOPMENT
                        </p>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mt-4">
                        Custom <br />
                        <span className="text-orange-500">Software</span> <br />
                        Solutions
                    </h1>

                    <p className="text-gray-400 mt-4 text-sm md:text-base max-w-md">
                        We build powerful, custom-engineered software that solves your
                        business challenges and scales with your ambition. No shortcuts,
                        just excellence.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        <button
                            onClick={() => {
                                navigate("/contact-page")
                            }}
                            className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition px-5 py-2 rounded-lg flex items-center gap-2">
                            Start Your Project <ArrowRight size={16} />
                        </button>

                        <button
                            onClick={() => {
                                navigate("/portfolio")
                            }}
                            className="bg-[#1f2937] cursor-pointer hover:bg-[#374151] transition px-5 py-2 rounded-lg">
                            View Portfolio
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="bg-gradient-to-r from-[#1f2937] to-[#111827] rounded-xl p-6">
                    <img
                        src="/softwareImage.jpg"
                        alt="Software Engineering"
                        className="rounded-lg w-full object-cover"
                    />
                </div>

            </div>
        </section>
    )
}

export default SoftwareDevHero
