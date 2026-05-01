import { Code, Cpu, Brain, Megaphone, User, GraduationCap } from "lucide-react";
import Card from "./Card";

const Services = () => {
    const services = [
        {
            icon: Code,
            title: "Web Development",
            desc: "High-performance, scalable web architectures built with modern frameworks.",
            slug: "web-services"
        },
        {
            icon: Cpu,
            title: "Software Development",
            desc: "Custom enterprise software solutions for complex business challenges.",
            slug: "software-services"
        },
        {
            icon: Brain,
            title: "AI/ML Solutions",
            desc: "Machine learning models that turn raw data into predictive insights.",
            slug: "aiml-services"
        },
        {
            icon: Megaphone,
            title: "Digital Marketing",
            desc: "SEO, content, and performance marketing to boost growth.",
            slug: "digital-services"
        },
        {
            icon: User,
            title: "Profile Marketing",
            desc: "Build authority and trust with strong personal branding.",
            slug: "profile-making-services"
        },
        {
            icon: GraduationCap,
            title: "IT Training",
            desc: "Hands-on training programs to upskill teams and individuals.",
            slug: "traning-services"
        },
    ];

    return (
        <section className="px-6 pt-8 md:pt-20 md:px-16 max-w-[1250px] mx-auto">

            {/* Heading */}
            <div className="mb-6">
                <div className="inline-block bg-[#0b1a2e] border border-white/10 px-4 py-2 rounded-full mb-4">
                    <p className="text-orange-400 text-xs tracking-widest">
                        OUR SERVICES
                    </p>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-[#cbd5f5] leading-tight">
                    What We <span className="text-orange-400">Offer</span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl">
                    We provide cutting-edge solutions to help businesses grow, scale, and
                    innovate in the digital era.
                </p>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>

        </section>
    );
}

export default Services;
