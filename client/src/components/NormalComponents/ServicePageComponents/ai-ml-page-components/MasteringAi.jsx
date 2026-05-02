import { LineChart, MessageSquareText, Eye } from "lucide-react";
import Card from "../Card";

const MasteringAi = () => {
    const data = [
        {
            icon: LineChart,
            title: "Predictive Analytics",
            desc: "Turn historical data into future foresight. We build models that forecast market trends, demand spikes, and customer behavior with surgical precision.",
        },
        {
            icon: MessageSquareText,
            title: "Natural Language",
            desc: "Teach systems to understand human nuance. Our NLP engines power advanced sentiment analysis, automated support, and semantic document processing.",
        },
        {
            icon: Eye,
            title: "Computer Vision",
            desc: "Automate visual inspection and spatial awareness. From object detection in manufacturing to facial recognition, we give your business eyes.",
        },
    ];

    return (
        <section className="bg-[#020C1B] px-6 md:px-16 py-6 md:py-20">
            <div className="max-w-[1250px] mx-auto w-full">

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-4">
                        Mastering the{" "}
                        <span className="text-[#FF8C42]">AI Domain</span>
                    </h2>

                    {/* Accent Line */}
                    <div className="w-16 h-[3px] bg-[#FF8C42] rounded"></div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
                    {data.map((item, index) => (
                        <Card key={index} {...item} showBtn={false} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MasteringAi