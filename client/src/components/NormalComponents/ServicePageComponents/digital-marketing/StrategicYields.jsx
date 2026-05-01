import { TrendingUp, BarChart3, Crown } from "lucide-react";

const StrategicYields = () => {
    const points = [
        {
            icon: TrendingUp,
            title: "Exponential Growth",
            desc: "Scalable frameworks that compound over time, ensuring your marketing spend works harder with every cycle.",
        },
        {
            icon: BarChart3,
            title: "Real-Time Analytics",
            desc: "Full transparency through custom dashboards. Watch your ROI grow in real-time with granular attribution data.",
        },
        {
            icon: Crown,
            title: "Brand Authority",
            desc: "Position your company as the de-facto leader in your niche through expert content and elite placement.",
        },
    ];

    return (
        <section className="bg-[#020617] px-6 md:px-16 py-2 md:py-20">
            <div className="max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* LEFT — Image with stat overlay */}
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/laptopImage.jpg"
                            alt="Marketing Analytics Dashboard"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Stat overlay */}
                    <div
                        className="absolute bottom-4 left-4 rounded-xl px-5 py-3"
                        style={{
                            background: "rgba(249,115,22,0.95)",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <div className="text-2xl font-bold text-black leading-none">
                            +340%
                        </div>
                        <div className="text-xs font-medium text-black/70 mt-0.5">
                            Avg. Client Growth
                        </div>
                    </div>

                    {/* Glow */}
                    <div className="absolute -inset-2 bg-orange-500/10 blur-2xl rounded-2xl -z-10"></div>
                </div>

                {/* RIGHT — Content */}
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 leading-tight mb-8">
                        Strategic{" "}
                        <span className="text-orange-400">Yields</span>
                    </h2>

                    <div className="space-y-8">
                        {points.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex gap-5">

                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-orange-400/30 bg-orange-400/10">
                                        <Icon size={18} className="text-orange-400" />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-200">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1 max-w-md">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StrategicYields;
