import React from "react";

const Testimonials = () => {
    const testimonials = [
        { quote: "Edurech transformed our online presence completely.", name: "Sarah Martinez", role: "CEO, TechStart Inc.", initials: "SM" },
        { quote: "I landed my dream job at Google thanks to them.", name: "Raj Kumar", role: "Software Engineer, Google", initials: "RK" },
        { quote: "Cloud migration was seamless and efficient.", name: "Jennifer Davis", role: "CTO, FinanceFlow", initials: "JD" },
    ];

    return (
        <section id="testimonials" className="pt-6 pb-8 bg-[#f8f9fa] md:pt-12 md:pb-14 text-[#333] relative z-[1]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-6">
                    Client Success Stories
                </h2>

                {/* Grid auto-fit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="
        bg-white px-4 py-6 md:px-6 md:py-10
        rounded-[15px]
        border border-[#e0e0e0]
        shadow-[0_8px_25px_rgba(0,0,0,0.1)]
        transition-transform duration-300
        hover:scale-105
      "
                        >

                            {/* Quote */}
                            <p className="text-[1rem] md:text-[1.1rem] italic mb-4 leading-7">
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-4">

                                {/* Avatar */}
                                <div
                                    className="
            w-[45px] h-[45px] md:w-[50px] md:h-[50px]
            rounded-full
            flex items-center justify-center
            font-bold text-[1.1rem] md:text-[1.2rem] text-white
            bg-gradient-to-br from-[#ff6b35] to-[#f7931e]
          "
                                >
                                    {t.initials}
                                </div>

                                {/* Info */}
                                <div>
                                    <h4 className="font-semibold mb-[2px]">
                                        {t.name}
                                    </h4>
                                    <p className="text-sm opacity-80">
                                        {t.role}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>

    );
};

export default Testimonials;