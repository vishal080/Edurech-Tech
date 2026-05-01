import React from "react";

const MissionVision = () => {
  return (
    <section className="md:pt-10 md:pb-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center relative inline-block left-1/2 -translate-x-1/2">
          Our Mission & Vision
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e]" />
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Mission Card */}
          <div className="bg-white p-10 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
                          transition-transform duration-300 hover:-translate-y-2">

            <h3 className="text-[1.8rem] font-semibold text-[#ff6b35] mb-4">
              Our Mission
            </h3>

            <p className="text-[#666] leading-8 text-[1.1rem]">
              To empower businesses and professionals with cutting-edge technology solutions and career guidance that transform
              challenges into opportunities.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-10 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
                          transition-transform duration-300 hover:-translate-y-2">

            <h3 className="text-[1.8rem] font-semibold text-[#ff6b35] mb-4">
              Our Vision
            </h3>

            <p className="text-[#666] leading-8 text-[1.1rem]">
              To be the leading technology partner that not only delivers exceptional digital solutions but also nurtures the
              career growth of professionals worldwide.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;