import { useInView } from "react-intersection-observer";

const About = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <section
            id="about"
            ref={ref}
            className="md:pt-12 pt-10 pb-6 md:pb-4 bg-gray-50"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Section Title */}
                <h2
                    className={`text-4xl md:text-5xl font-bold mb-12 relative inline-block
                    transition-all duration-700
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                    Edurech Technology

                    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-14px] w-20 h-1 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e]"></span>
                </h2>

                {/* Paragraph 1 */}
                <p
                    className={`text-lg leading-8 text-gray-600 mb-6 transition-all duration-700 delay-150
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                    At Edurech Technology, we bridge the gap between innovative technology solutions and professional career development.
                    Founded with a vision to empower businesses and individuals alike, we specialize in delivering comprehensive IT services
                    while providing expert guidance to international professionals navigating the US job market.
                </p>

                {/* Paragraph 2 */}
                <p
                    className={`text-lg leading-8 text-gray-600 transition-all duration-700 delay-300
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                    Our unique approach combines technical excellence with deep understanding of career challenges faced by OPT, H1B, Green Card,
                    and USC candidates. We don't just build digital solutions – we build careers and dreams.
                </p>

            </div>
        </section>
    );
};

export default About;