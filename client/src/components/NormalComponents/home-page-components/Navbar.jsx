import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useNavigate
  const navigate = useNavigate();

  // scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // prevent mobile bug on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileServicesOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // CONTACT SCROLL FUNCTION
  // const goToContact = () => {
  //   setOpen(false);
  //   setMobileServicesOpen(false);

  //   const section = document.getElementById("contact");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const services = [
    "IT Consulting", "Cloud Solutions", "AI & ML", "Software Development",
    "Web Development", "Mobile Apps", "Data Engineering", "DevOps",
    "Cybersecurity", "Resume & Profile"
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-[#0a0a0a]/95 shadow-[0_2px_20px_rgba(255,107,0,0.15)] backdrop-blur-md"
        : "bg-[#0a0a0a]/90 backdrop-blur-md"}`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center relative overflow-hidden">
            <span className="text-white font-bold">E</span>
            <div className="absolute w-4 h-4 bg-white rounded animate-pulse"></div>
          </div>
          <span className="uppercase tracking-wider text-white text-lg">
            EDURECH TECHNOLOGY
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">

          <li className="group relative">
            <Link to="/" className="text-white hover:text-orange-500 transition">Home</Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          {/* Services */}
          <li
            className="relative group"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <Link to="/service-page">
              <div className="flex items-center gap-1 text-white hover:text-orange-500 cursor-pointer transition">
                Services <ChevronDown size={22} />
              </div>
            </Link>

            <ul className={`absolute left-0 top-[45px] w-[260px] bg-[#0a0a0a]/95 backdrop-blur-md
              border border-orange-500/20 rounded-xl py-2 shadow-[0_15px_40px_rgba(0,0,0,0.6)]
              transition-all duration-300 origin-top
              ${desktopServicesOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-75 invisible"}`}
            >
              {services.map((service, i) => (
                <li key={i}>
                  <Link to="/service-page" className="block px-5 py-2 text-[0.95rem] text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 transition-all duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="group relative">
            <Link to="/about-page" className="text-white hover:text-orange-500 transition">About</Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link to="/portfolio" className="text-white hover:text-orange-500 transition">Portfolio</Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          {/* Contact */}
          <li className="group relative">
            <Link to="/contact-page" className="text-white hover:text-orange-500 transition">
              Contact
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          {/* Admin Button */}
          <li>
            <button
              onClick={() => navigate("/admin-login")}
              className="w-9 h-9 flex items-center justify-center border-2 cursor-pointer border-white bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition"
            >
              A
            </button>
          </li>

        </ul>

        {/* HAMBURGER → CROSS */}
        <div className="md:hidden w-7 h-7 relative cursor-pointer" onClick={() => setOpen(!open)}>
          <span className={`absolute h-[3px] w-7 bg-orange-500 transition-all duration-300 ${open ? "rotate-45 top-3" : "top-1"}`}></span>
          <span className={`absolute h-[3px] w-7 bg-orange-500 transition-all duration-300 ${open ? "opacity-0" : "top-3"}`}></span>
          <span className={`absolute h-[3px] w-7 bg-orange-500 transition-all duration-300 ${open ? "-rotate-45 top-3" : "top-5"}`}></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#0a0a0a]/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${open ? "max-h-[600px] py-4" : "max-h-0"}`}>
        <ul className="flex flex-col items-center gap-6">

          <li><Link to="/" onClick={() => setOpen(false)} className="text-white hover:text-orange-500">Home</Link></li>

          <li><Link to="/about-page" onClick={() => setOpen(false)} className="text-white hover:text-orange-500">About</Link></li>

          <li><Link to="/portfolio" onClick={() => setOpen(false)} className="text-white hover:text-orange-500">Portfolio</Link></li>

          {/* Services */}
          <li
            className="relative group"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <Link to="/service-page">
              <div className="flex items-center gap-1 text-white hover:text-orange-500 cursor-pointer transition">
                Services <ChevronDown size={22} />
              </div>
            </Link>

            <ul className={`absolute left-0 top-[45px] w-[260px] bg-[#0a0a0a]/95 backdrop-blur-md
              border border-orange-500/20 rounded-xl py-2 shadow-[0_15px_40px_rgba(0,0,0,0.6)]
              transition-all duration-300 origin-top
              ${desktopServicesOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-75 invisible"}`}
            >
              {services.map((service, i) => (
                <li key={i}>
                  <Link to="/service-page" className="block px-5 py-2 text-[0.95rem] text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 transition-all duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact-page" onClick={() => setOpen(false)} className="text-white hover:text-orange-500">
              Contact
            </Link>
          </li>

          {/* Admin Button */}
          <li>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/admin-login");
              }}
              className="w-9 border-2 border-white h-9 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition"
            >
              A
            </button>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;