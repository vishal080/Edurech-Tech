const StrategicImpact = () => {
    const data = [
        {
            title: "Operational Speed",
            desc: "Automate repetitive cognitive tasks and clear bottlenecks in hours, not months.",
        },
        {
            title: "Data-Driven Insights",
            desc: "Extract signal from noise. Base every strategic move on verified probabilistic models.",
        },
        {
            title: "Risk Mitigation",
            desc: "Identify anomalies and fraud patterns before they impact your bottom line.",
        },
        {
            title: "Scalable Intelligence",
            desc: "Deploy systems that learn and improve as your data volume grows over time.",
        },
    ];
    return (
        <section className="bg-[#020C1B] px-6 md:px-16 pb-8 md:py-24">
            <div className="max-w-[1250px] mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-start">

                {/* LEFT */}
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-4 gap-y-15">
                        Strategic{" "}
                        <span className="text-[#FF8C42]">Impact</span>
                    </h2>

                    <p className="text-gray-400 max-w-md">
                        Implementing machine learning isn’t just about code—
                        it’s about measurable business outcomes that redefine
                        your competitive edge.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                    {data.map((item, index) => (
                        <div key={index} className="relative pl-8">

                            {/* FULL HEIGHT BASE LINE */}
                            <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-700"></div>

                            {/* ORANGE ACCENT SEGMENT */}
                            <div className="absolute left-0 top-0 h-8 w-[2px] bg-[#FF8C42]"></div>

                            {/* CONTENT */}
                            <h3 className="text-lg font-semibold text-gray-200 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StrategicImpact