import React from "react";

const Values = () => {
  const values = [
    { icon: "🌟", title: "Excellence", desc: "Exceptional quality in every project." },
    { icon: "🤝", title: "Integrity", desc: "Honesty and transparency in relationships." },
    { icon: "💡", title: "Innovation", desc: "Creative solutions using modern technologies." },
    { icon: "🎯", title: "Results-Driven", desc: "We focus on measurable outcomes." },
  ];

  return (
    <section className="pt-6 md:pt-10 md:pb-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 relative inline-block left-1/2 -translate-x-1/2">
          Our Core Values
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e]" />
        </h2>

        {/* Grid */}
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-8">

          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[15px] text-center
                         shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                         transition-transform duration-300 hover:-translate-y-2.5"
            >

              {/* Icon */}
              <div className="w-[70px] h-[70px] mx-auto mb-4 rounded-full
                              flex items-center justify-center text-2xl text-white
                              bg-gradient-to-br from-[#ff6b35] to-[#f7931e]">
                {v.icon}
              </div>

              {/* Title */}
              <h3 className="text-[1.3rem] text-[#333] font-semibold mb-4">
                {v.title}
              </h3>

              {/* Description */}
              <p className="text-[#666] leading-7">
                {v.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;