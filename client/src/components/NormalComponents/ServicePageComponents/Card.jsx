import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card = ({ icon: Icon, title, desc, slug, showBtn = true }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-gradient-to-b from-[#0a192f] to-[#020c1b] p-6 rounded-2xl border border-gray-800 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,115,0,0.2)] transition-all duration-300">

      <div className="mb-4 w-15 h-15 flex items-center justify-center rounded-xl bg-[#112240] group-hover:bg-orange-400 transition">
        <Icon className="text-orange-400 group-hover:text-black" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{desc}</p>

      {showBtn && (
        <button
          onClick={() => {
            navigate(`/services-page/${slug}`);
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 text-orange-400 cursor-pointer text-sm group-hover:translate-x-1 transition"
        >
          Learn More <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
};

export default Card;