const About = () => {
  return (
    <section id="about" className="pt-5 pb-8 md:pt-23 md:pb-23 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">
            Why Choose Edurech Technology?
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            We combine innovation with expertise to deliver exceptional IT services.
            Our team focuses on scalable, secure and modern digital solutions for
            startups, businesses and enterprises.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-4">

            {[
              { num: "500+", label: "Projects Completed" },
              { num: "100+", label: "Happy Clients" },
              { num: "5+", label: "Years Experience" },
              { num: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl
                bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]
                hover:shadow-[0_10px_25px_rgba(255,107,0,0.15)]
                transition-all duration-300"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {stat.num}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Right Side Visual */}
        <div className="bg-orange-500 h-[350px] rounded-2xl flex items-center justify-center text-7xl">
          🚀
        </div>

      </div>
    </section>
  );
};

export default About;
