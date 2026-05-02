import DigitalHero from "../../components/NormalComponents/ServicePageComponents/digital-services-page-components/DigitalHero"
import CorePerformance from "../../components/NormalComponents/ServicePageComponents/digital-services-page-components/CorePerformance"
import StrategicYields from "../../components/NormalComponents/ServicePageComponents/digital-services-page-components/StrategicYields"
import MarketingStack from "../../components/NormalComponents/ServicePageComponents/digital-services-page-components/MarketingStack"
import CTA from "../../components/NormalComponents/ServicePageComponents/CTA"

const DegitalServices = () => {
  return (
    <main className="bg-[#020c1b] text-white pt-14 md:pt-5 min-h-screen">
      <DigitalHero />
      <CorePerformance />
      <StrategicYields />
      <MarketingStack />
      <CTA />
    </main>
  )
}

export default DegitalServices