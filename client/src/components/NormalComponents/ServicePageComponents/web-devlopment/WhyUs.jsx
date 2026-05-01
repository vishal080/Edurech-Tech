const WhyUs = () => {
  const points = [
    {
      number: "01",
      title: "Clear Talk",
      desc: "We skip the technical jargon. We talk to you like a partner, explaining exactly what we're doing and why it helps your business.",
    },
    {
      number: "02",
      title: "Always There",
      desc: "Building the site is just the start. We provide ongoing support to keep your digital home running smoothly 24/7.",
    },
    {
      number: "03",
      title: "Results Driven",
      desc: "We don’t just build 'pretty' sites. We build tools designed to get you more calls, more sales, and more growth.",
    },
  ];

  return (
    <section className="bg-[#020617] px-6 md:px-16 md:py-5">
      <div className="max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="relative order-2 md:order-1">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-orange-400/30"></div>

          <div className="space-y-10">
            {points.map((item, index) => (
              <div key={index} className="flex gap-6">

                {/* Number */}
                <div className="relative z-10 flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-orange-400 text-orange-400 text-sm font-semibold bg-[#020617]">
                    {item.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 max-w-md">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 leading-tight mb-6">
            Why working with us feels{" "}
            <span className="text-orange-400">different.</span>
          </h2>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/officeImg.jpg"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow */}
            <div className="absolute -inset-2 bg-orange-500/10 blur-2xl rounded-2xl -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;