import { useState } from "react";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin() {
  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAdmin } = useAuth();

  // useNavigate
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/admin/login",
        {
          email,
          password
        });

      setAdmin(true);
      // navigate to admin dashboard
      navigate("/admin-dashboard")

      // set empty
      setEmail("");
      setPassword("");

      // toast
      toast.success("Admin login successfull")
    } catch (error) {
      toast.error(error.response?.data?.message || "Error during Admin Login")
      console.log("Login Error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] min-h-screen flex items-center justify-center p-4">

      <main className="w-full max-w-md animate-fade-in">

        {/* Brand Header */}
        <header className="text-center mb-8">

          <div
            className="inline-flex items-center justify-center w-12 md:w-14 md:h-14 h-12 rounded-2xl bg-gradient-to-br from-[#ff6b00] to-[#ff9500] mb-4 shadow-lg shadow-orange-500/20">
            <img
              src="/logo-icon.png"
              alt="icon"
              className="h-8 rounded-sm w-8"
            />
          </div>

          <h1 className="text-3xl font-bold text-white tracking-tight">
            Admin Login
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Secure access for IT infrastructure management
          </p>

        </header>

        {/* Login Form */}
        <section className="bg-[#141414] border border-white/10 rounded-2xl p-8 shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="admin@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">

              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-300">
                  Password
                </label>

                <a
                  href="#"
                  className="text-xs font-medium text-[#ff9500] hover:text-[#ff6b00]"
                >
                  Forgot Password?
                </a>
              </div>

              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition"
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-[#ff6b00] to-[#ff9500] text-white font-semibold py-3.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.98] transition-all transform duration-200"
            >
              Sign In
            </button>

          </form>

        </section>

        {/* Footer */}
        <footer className="mt-8 text-center space-y-4">

          <p className="text-xs text-gray-500">
            © 2023 IT Global Services. All rights reserved.
          </p>

          <div className="flex justify-center space-x-4 text-xs text-gray-400">

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <span className="text-gray-700">|</span>

            <a href="#" className="hover:text-white">
              Contact Support
            </a>

          </div>

        </footer>

      </main>

    </div>
  );
}