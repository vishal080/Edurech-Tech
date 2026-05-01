const services = [
  { icon: "💻", title: "IT Consulting", desc: "Strategic technology consulting solutions." },
  { icon: "🔧", title: "Technical Support", desc: "24/7 maintenance services." },
  { icon: "📄", title: "Resume Creation", desc: "Professional profile design." },
  { icon: "📱", title: "Digital Marketing", desc: "SEO & branding solutions." },
  { icon: "☁️", title: "Cloud Solutions", desc: "Secure cloud migration." },
  { icon: "🔒", title: "Cybersecurity", desc: "Protect business data." },
];

const Services = () => {
  return (
    <section id="services" className="pt-5 pb-8 md:pt-6 md:pb-10 bg-[#111111] text-white">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-4 md:mb-8 text-orange-500">
        Our Services
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl p-8 text-center
            bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]
            transition-all duration-300
            hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(255,107,0,0.15)] group"
          >
            {/* shine sweep */}
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transition-all duration-700 group-hover:left-[100%]" />

            {/* icon */}
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full text-3xl
              bg-gradient-to-br from-orange-500 to-orange-400">
              {s.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>

            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
