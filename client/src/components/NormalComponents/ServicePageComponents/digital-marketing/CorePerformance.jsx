import { Search, MousePointerClick, Share2 } from "lucide-react";
import Card from "../Card";

const CorePerformance = () => {
    const data = [
        {
            icon: Search,
            title: "SEO Dominance",
            desc: "Comprehensive technical audits and strategic keyword mapping to ensure you own the search results that matter.",
        },
        {
            icon: MousePointerClick,
            title: "Precision PPC",
            desc: "Data-fuelled ad campaigns across Google and Social channels that optimize for conversions, not just clicks.",
        },
        {
            icon: Share2,
            title: "Social Velocity",
            desc: "Curated content ecosystems that build community and amplify your brand voice across digital spheres.",
        },
    ];

    return (
        <section className="bg-[#020617] px-6 md:px-16 py-6 md:py-20">
            <div className="max-w-[1250px] mx-auto w-full">

                {/* Heading */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200">
                        Core Performance Engines
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Precision tools designed for high-velocity growth.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white hide-card-btn">
                    {data.map((item, index) => (
                        <Card key={index} {...item} showBtn={false} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePerformance;
