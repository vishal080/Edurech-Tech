import { Cpu, Database, BarChart3, Cloud, Layers, Microchip } from "lucide-react";
import Toolbox from "../Toolbox";

const AiMlTechTools = () => {
    const tools = [
        { title: "TensorFlow", icon: Cpu },
        { title: "PyTorch", icon: Microchip },
        { title: "Scikit-Learn", icon: BarChart3 },
        { title: "AWS Sagemaker", icon: Cloud },
        { title: "Pandas", icon: Database },
        { title: "NVIDIA CUDA", icon: Layers },
    ];
    return (
        <div>
            <div>
                <Toolbox
                    title="Our Technology Toolbox"
                    subtitle="We use industry-leading tools to ensure your website is modern, scalable, and powerful."
                    tools={tools}
                />
            </div>
        </div>
    )
}

export default AiMlTechTools