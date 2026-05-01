import { useParams } from "react-router-dom"
import WebServices from "./WebServices"
import SoftwareServices from "./SoftwareServices"
import AIMLServices from "./AIMLServices"
import DegitalServices from "./DegitalServices"
import ProfileMarketingServices from "./ProfileMarketingServices"
import TrainingServices from "./TrainingServices"

const SubServices = () => {
    // useParams to get serviceType from url
    const { serviceType } = useParams();

    // Conditional Rendering
    if (serviceType === "web-services") return <WebServices />;
    if (serviceType === "software-services") return <SoftwareServices />;
    if (serviceType === "aiml-services") return <AIMLServices />;
    if (serviceType === "digital-services") return <DegitalServices />;
    if (serviceType === "profile-making-services") return <ProfileMarketingServices />;
    if (serviceType === "traning-services") return <TrainingServices />;

    return (
        <div className="text-white p-10">
            <h1 className="text-2xl">Service Not Found...</h1>
        </div>
    )
}

export default SubServices
