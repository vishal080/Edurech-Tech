// import { Link } from "react-router-dom";

// const Footer = () => {
//   // Quicklinks array
//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-page" },
//     { name: "Services", path: "/service-page" },
//     { name: "Portfolio", path: "" },
//     { name: "Blog", path: "" },
//     { name: "Contact", path: "/contact-page" },
//     { name: "Career Opportunities", path: "/career-page" },
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-[#2c3e50] to-[#34495e] text-white pt-16 pb-6">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

//           {/* About */}
//           <div>
//             <h3 className="text-xl font-semibold text-orange-500 mb-5">
//               About Edurech Technology
//             </h3>
//             <p className="text-gray-300 leading-relaxed">
//               Leading the way in digital transformation, career development,
//               and technology solutions. We empower individuals and businesses
//               to achieve their full potential in the digital age.
//             </p>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-semibold text-orange-500 mb-5">
//               Our Services
//             </h3>
//             <ul className="space-y-2 text-gray-300">
//               {[
//                 "Digital Marketing Solutions",
//                 "Profile & Personal Branding",
//                 "Professional Resume Writing",
//                 "Interview Coaching",
//                 "Web Development",
//                 "IT Support & Consulting",
//               ].map((item, i) => (
//                 <li
//                   key={i}
//                   className="hover:text-orange-500 cursor-pointer transition"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Links */}
//           <div>
//             <h3 className="text-xl font-semibold text-orange-500 mb-5">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-gray-300">
//               {quickLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.path}
//                     className="hover:text-orange-500  transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-xl font-semibold text-orange-500 mb-5">
//               Get In Touch
//             </h3>

//             <div className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl">

//               <div className="flex items-center gap-3">
//                 <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">📧</span>
//                 <span className="text-gray-200">info@edurechtech.com</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">📞</span>
//                 <span className="text-gray-200">+1(408)709-5143</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">📍</span>
//                 <span className="text-gray-200">California US</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">in</span>
//                 <a
//                   href="https://linkedin.com/company/edurech-technology"
//                   target="_blank"
//                   className="hover:text-orange-500 transition"
//                 >
//                   LinkedIn
//                 </a>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">📷</span>
//                 <a
//                   href="https://www.instagram.com/edurechtechnology/"
//                   target="_blank"
//                   className="hover:text-orange-500 transition"
//                 >
//                   Instagram
//                 </a>
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
//           © 2025 Edurech Technology. All rights reserved. | Designed with ❤️ for your success
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;






import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-page" },
    { name: "Services", path: "/service-page" },
    { name: "Portfolio", path: "" },
    { name: "Blog", path: "" },
    { name: "Contact", path: "/contact-page" },
    { name: "Career Opportunities", path: "/career-page" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-black text-white pt-20 pb-8 relative">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70"></div>

      <div className="max-w-[1250px] mx-auto px-6 md:px-16">

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-5">
              About Edurech
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses and professionals with modern
              technology solutions, AI innovation, and digital
              transformation services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-5">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Digital Marketing",
                "Personal Branding",
                "Resume Writing",
                "Interview Coaching",
                "Web Development",
                "IT Consulting",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-orange-500 transition duration-300 cursor-pointer hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-orange-500 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-orange-500/10">
                  <Mail size={16} className="text-orange-500" />
                </span>
                info@edurechtech.com
              </div>

              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-orange-500/10">
                  <Phone size={16} className="text-orange-500" />
                </span>
                +1(408)709-5143
              </div>

              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-orange-500/10">
                  <MapPin size={16} className="text-orange-500" />
                </span>
                California, US
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="p-2 rounded-full bg-orange-500/10">
                  <Linkedin size={16} className="text-orange-500" />
                </span>
                <a
                  href="https://linkedin.com/company/edurech-technology"
                  target="_blank"
                  className="hover:text-orange-500 transition"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-orange-500/10">
                  <Instagram size={16} className="text-orange-500" />
                </span>
                <a
                  href="https://www.instagram.com/edurechtechnology/"
                  target="_blank"
                  className="hover:text-orange-500 transition"
                >
                  Instagram
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          © 2025 Edurech Technology. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;