import { Award, Users, Rocket } from "lucide-react";

const TrainingEdge = () => {
    const points = [
        {
            icon: Award,
            title: "Skill Validation",
            desc: "Earn industry-recognized certifications that prove your proficiency to modern providers.",
        },
        {
            icon: Users,
            title: "Networking",
            desc: "Join an elite alumni voice and connect with leaders from top tech firms during our events.",
        },
        {
            icon: Rocket,
            title: "Competitive Advantage",
            desc: "Stay ahead of the curve with curriculum updates that reflect the very latest tech stacks.",
        },
    ];

    return (
        <section className="bg-[#020617] px-6 md:px-16 py-6 md:py-20">
            <div className="max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* LEFT — Image */}
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/IT_trainingImage.jpg"
                            alt="Professional working on laptop"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Glow */}
                    <div className="absolute -inset-2 bg-orange-500/10 blur-2xl rounded-2xl -z-10"></div>
                </div>

                {/* RIGHT — Content */}
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 leading-tight mb-8">
                        The Edge You{" "}
                        <span className="text-orange-400">Need</span>
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

export default TrainingEdge;
