import { Code, Database, Cloud, Layers } from "lucide-react";
import Toolbox from "../Toolbox";

const WebDevTechTools = () => {
    const tools = [
        { title: "HTML", subtitle: "HTML5", icon: Code },
        { title: "CSS", subtitle: "CSS3", icon: Code },
        { title: "JS", subtitle: "JavaScript", icon: Code },
        { title: "SQL & Data", subtitle: "SQL & Data", icon: Database },
        { title: "Cloud Services", subtitle: "Cloud Services", icon: Cloud },
        { title: "Modern Frameworks", subtitle: "Frameworks", icon: Layers },
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

export default WebDevTechTools
