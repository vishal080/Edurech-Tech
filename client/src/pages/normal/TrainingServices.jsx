import TrainingHero from '../../components/NormalComponents/ServicePageComponents/it-training/TrainingHero'
import TrainingTechStack from '../../components/NormalComponents/ServicePageComponents/it-training/TrainingTechStack'
import TrainingFeatures from '../../components/NormalComponents/ServicePageComponents/it-training/TrainingFeatures'
import TrainingEdge from '../../components/NormalComponents/ServicePageComponents/it-training/TrainingEdge'
import CTA from "../../components/NormalComponents/ServicePageComponents/CTA"

const TrainingServices = () => {
    return (
        <main className="bg-[#020c1b] text-white pt-14 md:pt-5 min-h-screen">
            <TrainingHero />
            <TrainingTechStack />
            <TrainingFeatures />
            <TrainingEdge />
            <CTA />
        </main>
    )
}

export default TrainingServices