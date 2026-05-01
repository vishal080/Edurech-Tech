import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/normal/HomePage"
import AboutPage from "./pages/normal/AboutPage"
import CareerPage from "./pages/normal/CareerPage"
import ServicePage from "./pages/normal/ServicePage"
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard"
import CreateJob from "./pages/admin/CreateJob"
import EditJob from "./pages/admin/EditJob"
import ApplicationsPage from "./pages/admin/ApplicationsPage"
import JobApplicationForm from "./pages/normal/JobApplicationForm"
import ContactPage from "./pages/normal/ContactPage"
import ContactInformation from "./pages/admin/ContactInformation"
import ProtectedAdmin from "./components/auth-component/ProtectedAdmin"
import SubServices from "./pages/normal/SubServices"
import ServiceLayout from "./components/NormalComponents/ServicePageComponents/service-page-layout/ServiceLayout"
import ProjectsDashboard from "./pages/admin/ProjectsDashboard"
import CreateProject from "./pages/admin/CreateProject"
import EditProject from "./pages/admin/EditProject"
import PortfolioPage from "./pages/normal/PortfolioPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/career-page" element={<CareerPage />} />
      <Route path="/job-application/:id" element={<JobApplicationForm />} />
      <Route path="/contact-page" element={<ContactPage />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* service layout for render header and footer for every service page */}
      <Route element={<ServiceLayout />}>
        <Route path="/service-page" element={<ServicePage />} />
        <Route path="/services-page/:serviceType" element={<SubServices />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Route>

      <Route path="/portfolio" element={<PortfolioPage />} />

      {/* Admin routes */}
      <Route element={<ProtectedAdmin />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-job" element={<CreateJob />} />
        <Route path="/admin/edit-job/:id" element={<EditJob />} />
        <Route path="/admin/applications" element={<ApplicationsPage />} />
        <Route path="/admin/contact" element={<ContactInformation />} />
        <Route path="/admin/projects" element={<ProjectsDashboard />} />
        <Route path="/admin/create-project" element={<CreateProject />} />
        <Route path="/admin/edit-project/:id" element={<EditProject />} />
      </Route>
    </Routes >
  )
}

export default App