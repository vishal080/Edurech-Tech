import Navbar from "../../components/NormalComponents/home-page-components/Navbar"
import Hero from "../../components/NormalComponents/home-page-components/Hero"
import Services from "../../components/NormalComponents/home-page-components/Services"
import About from "../../components/NormalComponents/home-page-components/About"
import Contact from "../../components/NormalComponents/home-page-components/Contact"
import Footer from "../../components/NormalComponents/home-page-components/Footer"


const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-5 md:pt-3">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
