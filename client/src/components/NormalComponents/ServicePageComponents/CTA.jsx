import { useNavigate } from "react-router-dom";

import React from 'react'

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 max-w-[1250px] mx-auto md:pt-20 md:pb-20 pt-6 pb-6 md:px-16">

      <div className="bg-[#0a0a0a] border border-orange-500 rounded-3xl p-6 sm:p-10 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Build Your Future with{" "}
          <span className="text-orange-400">Edurech</span>
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
          Partner with{" "}
          <span className="text-orange-400">Edurech Technology</span> to build
          scalable, modern, and future-ready digital solutions for your business.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => {
              navigate("/contact-page")
              window.scrollTo(0, 0);
            }}
            className="bg-orange-400 text-black cursor-pointer px-6 py-3 rounded-xl font-medium hover:bg-orange-300 transition">
            Start Your Project
          </button>

          <button
            onClick={() => {
              navigate("/portfolio")
              window.scrollTo(0, 0);
            }}
            className="border cursor-pointer border-orange-500 px-6 py-3 rounded-xl text-white hover:bg-white/5 transition">
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA