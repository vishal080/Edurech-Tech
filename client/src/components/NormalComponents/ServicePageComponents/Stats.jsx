import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { num: 500, suffix: "+", label: "Happy Clients" },
  { num: 1000, suffix: "+", label: "Projects Completed" },
  { num: 50, suffix: "+", label: "Expert Team" },
  { num: 24, suffix: "/7", label: "Support Available" },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-[#020617] md:bg-[#373737] pb-16 md:pt-16 md:pb-16 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center px-6">

        {stats.map((s, i) => (
          <div
            key={i}
            className="p-4 sm:p-6 md:py-12 rounded-2xl bg-gradient-to-br from-[#111827] to-[#1f2937]
            hover:scale-105 transition duration-300 shadow-lg"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
              {inView && (
                <CountUp end={s.num} duration={2.5} />
              )}
              {s.suffix}
            </div>

            <div className="text-gray-400 mt-2 text-sm sm:text-base tracking-wide">
              {s.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;
