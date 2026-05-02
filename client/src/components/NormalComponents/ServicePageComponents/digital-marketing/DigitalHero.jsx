import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DigitalHero = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] px-6 pb-8 md:pt-6 md:px-16">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Glow orb top right */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(249,115,22,0.06)_0%,transparent_70%)]" />

            <div className="max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-6 items-center relative z-10">

                {/* LEFT CONTENT */}
                <div>
                    {/* Badge */}
                    <div className="inline-block bg-[#0b1a2e] border border-orange-400/25 px-4 py-2 rounded-full mb-6">
                        <p className="text-xs text-orange-400 font-semibold tracking-widest uppercase">The Digital Vanguard</p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-gray-200">
                        Mastering the{" "}
                        <span className="text-orange-400">Digital</span>
                        <br />
                        Landscape
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed">
                        We don't just follow trends; we engineer them. Deploying hyper-focused
                        marketing strategies that transform your digital presence into a dominant
                        market force.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-6">
                        <button
                            onClick={() => navigate("/contact-page")}
                            className="bg-orange-400 cursor-pointer text-black px-6 py-3 rounded-xl font-medium hover:bg-orange-300 transition flex items-center gap-2">
                            Analyze My Strategy <ArrowRight size={18} />
                        </button>

                        <button
                            onClick={() => navigate("/contact-page")}
                            className="border cursor-pointer border-white/10 px-6 py-3 rounded-xl text-gray-300 hover:border-orange-400 hover:text-white transition">
                            View Process
                        </button>
                    </div>
                </div>

                {/* RIGHT — Futuristic Dashboard Visual */}
                <div className="relative">
                    {/* Glow behind */}
                    <div className="absolute -inset-2 bg-cyan-500/10 blur-2xl rounded-2xl -z-10" />

                    {/* Dashboard frame */}
                    <div className="w-full rounded-2xl overflow-hidden relative bg-[#060d1a] border border-cyan-500/20 shadow-2xl p-5">

                        {/* Three monitor panels */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                            {/* Panel 1 — Bar chart */}
                            <div className="rounded-xl p-3 flex flex-col gap-2 bg-cyan-500/5 border border-cyan-500/15">
                                <div className="text-xs font-semibold mb-1 text-cyan-400">Traffic</div>
                                <div className="flex items-end gap-1 h-16">
                                    {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                                        <div
                                            key={i}
                                            className={`flex-1 rounded-sm ${i === 5 ? "bg-orange-500/85" : "bg-cyan-500/40"}`}
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                                <div className="text-xs text-gray-400">+34% MoM</div>
                            </div>

                            {/* Panel 2 — Donut gauge */}
                            <div className="rounded-xl p-3 flex flex-col items-center justify-center gap-2 bg-cyan-500/5 border border-cyan-500/15">
                                <div className="text-xs font-semibold text-cyan-400">Conversion</div>
                                <svg width="64" height="64" viewBox="0 0 64 64">
                                    <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(6,182,212,0.12)" strokeWidth="6" />
                                    <circle
                                        cx="32" cy="32" r="26" fill="none"
                                        stroke="#f97316" strokeWidth="6"
                                        strokeDasharray={`${2 * Math.PI * 26 * 0.72} ${2 * Math.PI * 26}`}
                                        strokeLinecap="round"
                                        transform="rotate(-90 32 32)"
                                    />
                                    <text x="32" y="36" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">72%</text>
                                </svg>
                            </div>

                            {/* Panel 3 — Line chart */}
                            <div className="rounded-xl p-3 flex flex-col gap-2 bg-cyan-500/5 border border-cyan-500/15">
                                <div className="text-xs font-semibold mb-1 text-cyan-400">Revenue</div>
                                <svg width="100%" height="64" viewBox="0 0 80 60" preserveAspectRatio="none">
                                    <polyline
                                        points="0,50 12,40 24,45 36,25 48,30 60,15 72,10 80,5"
                                        fill="none" stroke="#22d3ee" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    />
                                    <polyline
                                        points="0,50 12,40 24,45 36,25 48,30 60,15 72,10 80,5 80,60 0,60"
                                        fill="rgba(6,182,212,0.07)"
                                    />
                                </svg>
                                <div className="text-xs text-gray-400">↑ Growing</div>
                            </div>
                        </div>

                        {/* Bottom stats row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                            {[
                                { label: "Sessions", value: "128K", delta: "+22%", up: true },
                                { label: "Bounce Rate", value: "24%", delta: "−8%", up: false },
                                { label: "Avg. CPC", value: "$1.42", delta: "−12%", up: false },
                            ].map((stat) => (
                                <div key={stat.label} className="rounded-xl px-3 py-2 bg-white/[0.03] border border-white/[0.07]">
                                    <div className="text-xs text-gray-500">{stat.label}</div>
                                    <div className="text-base font-bold mt-0.5 text-gray-200">{stat.value}</div>
                                    <div className={`text-xs font-medium ${stat.up ? "text-orange-400" : "text-cyan-400"}`}>
                                        {stat.delta}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Scan line effect */}
                        <div
                            className="absolute inset-0 pointer-events-none rounded-2xl"
                            style={{
                                background:
                                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.015) 2px, rgba(6,182,212,0.015) 4px)",
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DigitalHero;
