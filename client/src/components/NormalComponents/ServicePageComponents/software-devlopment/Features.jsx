import { Rocket, ShieldCheck, RefreshCw } from "lucide-react";
import Card from "../Card";

const Features = () => {
    const features = [
        {
            icon: Rocket,
            title: "Scalable Apps",
            desc: "Architecture designed to handle growth from 100 to 100 million users without breaking a sweat.",
        },
        {
            icon: ShieldCheck,
            title: "Secure Code",
            desc: "Battle-tested security protocols baked into every line of code to protect your data and users.",
        },
        {
            icon: RefreshCw,
            title: "Easy Updates",
            desc: "Modular structures that allow for rapid feature additions and painless maintenance cycles.",
        },
    ];

    return (
        <section className="bg-[#0b1220] text-white pt-4 md:py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-6">
                    Engineered for Excellence
                </h2>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white hide-card-btn">
                    {features.map((item, index) => (
                        <Card key={index} {...item} showBtn={false} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;