import React from "react";

const Team = () => {
  const team = [
    { initials: "AR", name: "Alex Rodriguez", role: "Chief Technology Officer", desc: "15+ years in software & cloud architecture." },
    { initials: "SP", name: "Sophia Patel", role: "Career Development Director", desc: "Career coach & immigration expert." },
    { initials: "MJ", name: "Marcus Johnson", role: "Digital Marketing Lead", desc: "12+ years marketing expertise." },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Careers Launched" },
    { number: "50+", label: "H1B Success Stories" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <>
      {/* TEAM SECTION */}
      <section className="pt-6 pb-8 md:pt-12 md:pb-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 relative inline-block left-1/2 -translate-x-1/2">
            Our Leadership Team
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e]" />
          </h2>

          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-8">
            {team.map((m, i) => (
              <div
                key={i}
                className="bg-white p-8 text-center rounded-[15px]
                           shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                           transition-transform duration-300 hover:-translate-y-2.5"
              >
                <div className="w-[80px] h-[80px] mx-auto mb-4 rounded-full
                                flex items-center justify-center text-[1.8rem] font-bold text-white
                                bg-gradient-to-br from-[#ff6b35] to-[#f7931e]">
                  {m.initials}
                </div>

                <h3 className="text-[1.3rem] text-[#333] font-semibold mb-1">
                  {m.name}
                </h3>

                <div className="text-[#ff6b35] font-bold mb-4">
                  {m.role}
                </div>

                <p className="text-[#666] leading-7">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* STATS SECTION */}
      <section className="py-20 text-white text-center bg-gradient-to-br from-[#ff6b35] to-[#f7931e]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">Our Impact</h2>

          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-8">

            {stats.map((stat, i) => (
              <div key={i} className="p-4">

                <div className="text-5xl font-bold mb-2 animate-countUp">
                  {stat.number}
                </div>

                <div className="text-lg opacity-90">
                  {stat.label}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Team;