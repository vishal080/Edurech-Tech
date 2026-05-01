import { BarChart3, Target, Mail, Search, MonitorSmartphone, PieChart } from "lucide-react";
import Toolbox from "../Toolbox";

const MarketingStack = () => {
    const tools = [
        { title: "Google Ads", subtitle: "PPC Platform", icon: BarChart3 },
        { title: "HubSpot", subtitle: "CRM & Inbound", icon: Target },
        { title: "Mailchimp", subtitle: "Email Marketing", icon: Mail },
        { title: "SEMrush", subtitle: "SEO & Analytics", icon: Search },
        { title: "Meta Ads", subtitle: "Social Advertising", icon: MonitorSmartphone },
        { title: "Hotjar", subtitle: "Behavior Analytics", icon: PieChart },
    ];

    return (
        <div>
            <Toolbox
                title="Our Marketing Stack"
                subtitle="We integrate with the world's most powerful platforms to deliver seamless results."
                tools={tools}
            />
        </div>
    );
};

export default MarketingStack;
