import { BarChart3, Search, Users, Zap } from "lucide-react";
import Toolbox from "../Toolbox";

const ProfileTechStack = () => {
    const tools = [
        { title: "Analytics", subtitle: "Data Insights", icon: BarChart3 },
        { title: "SEO", subtitle: "Search Optimization", icon: Search },
        { title: "CRM", subtitle: "Client Relations", icon: Users },
        { title: "Automation", subtitle: "Smart Workflows", icon: Zap },
        { title: "Analytics", subtitle: "Data Insights", icon: BarChart3 },
        { title: "SEO", subtitle: "Search Optimization", icon: Search },
        
    ];

    return (
        <div>
            <Toolbox
                title="Our Technology Vanguard"
                subtitle="We leverage an elite suite of tools to measure and scale your professional influence."
                tools={tools}
            />
        </div>
    );
};

export default ProfileTechStack;
