import { Smartphone, Zap, Shield } from "lucide-react";
import Card from "../Card";

const CoreEssentials = () => {
    const data = [
        {
            icon: Smartphone,
            title: "Mobile Friendly",
            desc: "Your site will look perfect and work smoothly on phones, tablets, and computers. We make sure your customers can reach you from anywhere.",
        },
        {
            icon: Zap,
            title: "Super Fast",
            desc: "No one likes waiting. We build sites that load instantly, keeping your visitors engaged and helping you rank higher on Google.",
        },
        {
            icon: Shield,
            title: "Safe & Secure",
            desc: "Security is not an option. We implement top-tier safety measures to protect your business data and your customers’ private information.",
        },
    ];

    return (
        <section className="bg-[#020617] px-6 md:px-16 py-4 md:py-20">
            <div className="max-w-[1250px] mx-auto w-full">

                {/* Heading */}
                <div className="mb-6 md:mt-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-3">
                        Core Essentials
                    </h2>
                    <p className="text-gray-400 max-w-xl">
                        Every line of code we write is focused on three main pillars that define a successful modern website.
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

export default CoreEssentials;