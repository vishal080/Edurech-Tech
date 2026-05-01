import { BookOpen, FlaskConical, FolderKanban, Briefcase } from "lucide-react";

const TrainingFeatures = () => {
    const features = [
        {
            icon: BookOpen,
            title: "Expert Curriculum",
            desc: "Programs crafted by industry veterans who have built full-stack systems at scale, not books in educational filtering.",
            img: "/couligesImage.jpg",
        },
        {
            icon: FlaskConical,
            title: "Hands-on Labs",
            desc: "Access cloud-native environments to learn, break, and fix real applications in a sandbox-craft setting.",
            img: "/couligesImage2.jpg",
        },
        {
            icon: FolderKanban,
            title: "Case Studies",
            desc: "Work on real-world business problems, inspired by actual consulting projects from our portfolio.",
            img: "/couligesImage3.jpg",
        },
        {
            icon: Briefcase,
            title: "Job Placement",
            desc: "Our dedicated career track helps you bridge the gap between training and your first professional contract.",
            img: "/placements.jpg",
        },
    ];

    return (
        <section className="bg-[#020617] px-6 md:px-16 md:py-20">
            <div className="max-w-[1250px] mx-auto w-full">

                {/* Heading */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-3">
                        Engineered for Learning
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Our methods, logic, and platforms forge high-impact skill-sets that the market demands right now.
                    </p>
                </div>

                {/* Feature Grid — 2x2 with images */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`group bg-gradient-to-b from-[#0a192f] to-[#020c1b] rounded-2xl border border-gray-800 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,115,0,0.2)] transition-all duration-300 overflow-hidden flex flex-col ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                            >
                                {/* Text */}
                                <div className="p-6 flex-1 flex flex-col justify-center">
                                    <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-[#112240] group-hover:bg-orange-400 transition">
                                        <Icon className="text-orange-400 group-hover:text-black" size={20} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>

                                {/* Image */}
                                <div className="w-full sm:w-2/5 h-48 sm:h-auto">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrainingFeatures;
