import Header from '../../components/NormalComponents/ServicePageComponents/Header'
import Footer from '../../components/NormalComponents/home-page-components/Footer'
import Hero from '../../components/NormalComponents/about-page-components/Hero'
import About from '../../components/NormalComponents/about-page-components/About'
import MissionVision from '../../components/NormalComponents/about-page-components/MissionVision'
import Values from '../../components/NormalComponents/about-page-components/Values'
import Team from '../../components/NormalComponents/about-page-components/Team'
import Testimonials from '../../components/NormalComponents/about-page-components/Testimonials'

const AboutPage = () => {
  return (
    <>
      <main className="pt-24 md:pt-12">
        <Hero />
        <About />
        <MissionVision />
        <Values />
        <Team />
        <Testimonials />
      </main>
    </>
  )
}

export default AboutPage
