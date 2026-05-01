import Navbar from "../../components/NormalComponents/home-page-components/Navbar"
import Contact from "../../components/NormalComponents/home-page-components/Contact"
import Footer from "../../components/NormalComponents/home-page-components/Footer"

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
