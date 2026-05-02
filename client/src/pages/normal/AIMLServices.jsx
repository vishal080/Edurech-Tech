import AiMlHero from "../../components/NormalComponents/ServicePageComponents/ai-ml/AiMlHero"
import MasteringAi from "../../components/NormalComponents/ServicePageComponents/ai-ml/MasteringAi"
import StrategicImpact from "../../components/NormalComponents/ServicePageComponents/ai-ml/StrategicImpact"
import AiMlTechTools from "../../components/NormalComponents/ServicePageComponents/ai-ml/AiMlTechTools"
import CTA from "../../components/NormalComponents/ServicePageComponents/CTA"

const AIMLServices = () => {
  return (
    <main className="bg-[#020c1b] text-white pt-14 md:pt-5 min-h-screen">
      <AiMlHero />
      <MasteringAi />
      <StrategicImpact />
      <AiMlTechTools />
      <CTA />
    </main>
  )
}

export default AIMLServices