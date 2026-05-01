import ProfileHero from '../../components/NormalComponents/ServicePageComponents/profile-marketing/ProfileHero'
import CoreEcosystem from '../../components/NormalComponents/ServicePageComponents/profile-marketing/CoreEcosystem'
import ProfileYields from '../../components/NormalComponents/ServicePageComponents/profile-marketing/ProfileYields'
import ProfileTechStack from '../../components/NormalComponents/ServicePageComponents/profile-marketing/ProfileTechStack'
import CTA from "../../components/NormalComponents/ServicePageComponents/CTA"

const ProfileMarketingServices = () => {
    return (
        <main className="bg-[#020c1b] text-white pt-14 md:pt-5 min-h-screen">
            <ProfileHero />
            <CoreEcosystem />
            <ProfileYields />
            <ProfileTechStack />
            <CTA />
        </main>
    )
}

export default ProfileMarketingServices
