import React from 'react'

const Toolbox = ({ title, subtitle, tools }) => {
  return (
    <section className="bg-[#020617] px-6 md:px-16 py-8 md:py-20">
      <div className="max-w-[1250px] mx-auto w-full">

        {/* Heading */}
        <div className="text-center md:mb-14 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-3">
            {title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">

          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={index}
                className="group bg-[#0b1a2e] border border-white/10 rounded-xl p-5 text-center hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,115,0,0.15)] transition"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="text-orange-400 group-hover:scale-110 transition" />
                </div>

                <h3 className="text-sm font-semibold text-gray-200">
                  {tool.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {tool.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;