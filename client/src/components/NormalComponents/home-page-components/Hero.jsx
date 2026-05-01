import { useMemo } from "react";
import { Link } from "react-router-dom"

const Hero = () => {

  // generate particles only once
  const particles = useMemo(() =>
    [...Array(18)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 6
    })), []
  );

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center
      bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] overflow-hidden"
    >

      {/* GRID (hero::before replacement) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-90 animate-[gridMove_20s_linear_infinite]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23ff6b00' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* PARTICLES */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute w-[4px] h-[4px] bg-[#ff6b00] rounded-full animate-[floatParticle_6s_ease-in-out_infinite]"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 md:max-w-[835px] max-w-[370px] px-6">

        {/* TITLE */}
        <h1 className="text-[2rem] sm:text-[2.4rem] md:text-[3.5rem] mb-4 font-bold leading-tight
bg-gradient-to-br from-[#ff6b00] to-[#ff9500] bg-clip-text text-transparent
animate-[slideInUp_1s_ease-out]">
          Transform Your Digital Future
        </h1>

        {/* SUBTEXT */}
        <p className="text-[1.2rem] text-[#cccccc] mb-8
        animate-[slideInUp_1s_ease-out_0.2s_both]">
          Leading IT services and consulting company specializing in cutting-edge technology solutions, professional profiles, and strategic digital marketing
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center flex-wrap
        animate-[slideInUp_1s_ease-out_0.4s_both]">

          <Link
            to="/contact-page"
            className="px-[30px] py-[12px] rounded-full font-bold text-white
    bg-gradient-to-br from-[#ff6b00] to-[#ff9500]
    transition-all duration-300
    hover:-translate-y-[2px]
    hover:shadow-[0_10px_30px_rgba(255,107,0,0.3)]"
          >
            Book Your Expert Call
          </Link>

          <Link
            to="/contact-page"
            className="px-[30px] py-[12px] rounded-full font-bold
    text-[#ff6b00] border-2 border-[#ff6b00]
    transition-all duration-300
    hover:-translate-y-[2px]
    hover:shadow-[0_10px_30px_rgba(255,107,0,0.3)]"
          >
            Get Started
          </Link>

        </div>
      </div>

    </section>
  );
};

export default Hero;