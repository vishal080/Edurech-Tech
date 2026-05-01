import Header from "../Header"
import Footer from "../../home-page-components/Footer"
import { Outlet } from "react-router-dom"

const ServiceLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default ServiceLayout
