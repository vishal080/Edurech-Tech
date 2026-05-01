import { Share2, FileText, Newspaper } from "lucide-react";
import Card from "../Card";

const CoreEcosystem = () => {
    const data = [
        {
            icon: Share2,
            title: "LinkedIn Help",
            desc: "Optimization of your digital footprint to attract high-value profiles and recruiters automatically.",
        },
        {
            icon: FileText,
            title: "Narrative Bio",
            desc: "We craft a compelling personal story that positions your experience as a critical solution for industry needs.",
        },
        {
            icon: Newspaper,
            title: "Curated Content",
            desc: "Thought leadership strategy that keeps you relevant in your niche 24/7.",
        },
    ];

    return (
        <section className="bg-[#020617] px-6 md:px-16 py-6 md:py-20">
            <div className="max-w-[1250px] mx-auto w-full">

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-1">
                        Core Ecosystem
                    </h2>
                    <div className="w-16 h-1 bg-orange-400 rounded-full mt-3"></div>
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

export default CoreEcosystem;
