import CTA from "../../components/NormalComponents/ServicePageComponents/CTA"
import Features from "../../components/NormalComponents/ServicePageComponents/software-devlopment/Features"
import SoftwareDevHero from "../../components/NormalComponents/ServicePageComponents/software-devlopment/SoftwareDevHero"
import SoftwareDevTechTools from "../../components/NormalComponents/ServicePageComponents/software-devlopment/SoftwareDevTechTools"
import Strategic from "../../components/NormalComponents/ServicePageComponents/software-devlopment/Strategic"

const SoftwareServices = () => {
  return (
    <main className="bg-[#020c1b] text-white pt-14 md:pt-5 min-h-screen">
      <SoftwareDevHero />
      <Features />
      <Strategic />
      <SoftwareDevTechTools />
      <CTA />
    </main>
  )
}

export default SoftwareServices
