import { CheckCircle } from "lucide-react";

const Strategic = () => {
  const points = [
    "Accelerated Time-to-Market",
    "Reduced Operational Overhead",
    "Enhanced Customer Retention",
  ];

  const cards = [
    {
      title: "Efficiency First",
      desc: "Automate repetitive workflows and eliminate bottlenecks with intelligent software that works as hard as you do.",
    },
    {
      title: "Bulletproof Reliability",
      desc: "Experience 99.9% uptime with robust testing frameworks and redundant systems designed for mission-critical tasks.",
    },
    {
      title: "Future-Ready",
      desc: "Stay ahead of the curve with technology that integrates seamlessly with AI, Cloud, and Edge computing paradigms.",
    },
  ];

  return (
    <section className="bg-[#0b1220] text-white py-6 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Strategic Yields for the <br />
            <span className="text-orange-500">Modern Enterprise</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-md">
            We don’t just write code; we deliver business outcomes. Our
            software is built to increase your operational velocity and
            market presence.
          </p>

          {/* Points */}
          <div className="mt-6 space-y-3">
            {points.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-orange-500" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:border-orange-500 transition"
            >
              <h3 className="font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Strategic;