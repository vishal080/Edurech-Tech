import React from "react";

const Topbar = ({ open, setOpen }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold text-slate-800">
          Jobs
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        <input
          type="text"
          placeholder="Search jobs..."
          className="hidden md:block w-64 px-3 py-2 border rounded-lg bg-slate-50 text-sm"
        />

        <button className="p-2 hover:bg-slate-100 rounded-full">
          🔔
        </button>

        {/* HAMBURGER (mobile only) */}
        <div
          className="md:hidden w-7 h-7 relative cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute h-[3px] w-7 bg-orange-500 transition-all duration-300 ${
              open ? "rotate-45 top-3" : "top-1"
            }`}
          ></span>

          <span
            className={`absolute h-[3px] w-7 bg-orange-500 transition-all duration-300 ${
              open ? "opacity-0" : "top-3"
            }`}
          ></span>

          <span
            className={`absolute h-[3px] w-7 bg-orange-500 transition-all duration-300 ${
              open ? "-rotate-45 top-3" : "top-5"
            }`}
          ></span>
        </div>

      </div>
    </header>
  );
};

export default Topbar;