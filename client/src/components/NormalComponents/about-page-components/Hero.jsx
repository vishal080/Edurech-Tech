import React from "react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative text-center text-white flex flex-col items-center justify-center overflow-hidden
            min-h-[40vh]"
        >
            {/* background layer */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#667eea] to-[#764ba2]"></div>

            <div className="relative z-[2] max-w-[800px] mx-auto px-8">
                <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold animate-fadeUp">
                    About Us
                </h1>

                <p className="text-[1.2rem] animate-fadeUp delay-300">
                    Empowering businesses and careers through innovative technology solutions and professional guidance
                </p>
            </div>
        </section>
    );
};

export default Hero;