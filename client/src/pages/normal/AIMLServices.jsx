import React from 'react'
import AiMlHero from '../../components/NormalComponents/ServicePageComponents/ai-ml-page-components/ai-ml-Hero'
import MasteringAi from '../../components/NormalComponents/ServicePageComponents/ai-ml-page-components/MasteringAi'
import StrategicImpact from '../../components/NormalComponents/ServicePageComponents/ai-ml-page-components/Strategic-Impact'
import AiMlTechTools from '../../components/NormalComponents/ServicePageComponents/ai-ml-page-components/Ai-Ml-Tech-Tools'
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