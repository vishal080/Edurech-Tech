import { Code, Database, Cloud, Layers, Server, FileCode } from "lucide-react";
import Toolbox from "../Toolbox";

const TrainingTechStack = () => {
    const tools = [
        { title: "Python", subtitle: "Programming", icon: Code },
        { title: "Java", subtitle: "Enterprise", icon: FileCode },
        { title: "JavaScript", subtitle: "Web & Node", icon: Code },
        { title: "AWS", subtitle: "Cloud Services", icon: Cloud },
        { title: "Docker", subtitle: "Containers", icon: Server },
        { title: "React", subtitle: "Frontend", icon: Layers },
    ];

    return (
        <div>
            <Toolbox
                title="Industry Standard Technologies We Teach"
                subtitle="Master the tools that top companies demand from their engineering teams."
                tools={tools}
            />
        </div>
    );
};

export default TrainingTechStack;
