import { Code2, Coffee, Cpu, Database, Cloud, Atom } from "lucide-react";
import Toolbox from "../Toolbox";

const SoftwareDevTechTools = () => {
    const tools = [
        { icon: Code2, title: "Python", subtitle: "Backend / AI" },
        { icon: Coffee, title: "Java", subtitle: "Enterprise Apps" },
        { icon: Cpu, title: "Go", subtitle: "High Performance" },
        { icon: Database, title: "PostgreSQL", subtitle: "Relational DB" },
        { icon: Cloud, title: "AWS", subtitle: "Cloud Services" },
        { icon: Atom, title: "React", subtitle: "Frontend UI" },
    ];

    return (
        <div>
            <Toolbox
                title="Our Technology Toolbox"
                subtitle="We use industry-leading tools to ensure your website is modern, scalable, and powerful."
                tools={tools}
            />
        </div>
    )
}

export default SoftwareDevTechTools
