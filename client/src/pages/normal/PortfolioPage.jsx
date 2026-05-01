import { useEffect, useState } from "react";
import api from "../../service/api";
import Navbar from "../../components/NormalComponents/home-page-components/Navbar";
import Footer from "../../components/NormalComponents/home-page-components/Footer";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/api/getProject");
        setProjects(response.data.projects || []);
      } catch (error) {
        console.log("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest projects and see what we've been building. Each project reflects our passion for clean code and modern design.
          </p>

          {/* Decorative line */}
          <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden
                    border border-gray-800
                    transition-all duration-500
                    hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(255,107,53,0.15)]
                    hover:border-orange-500/40"
                >
                  {/* Top gradient bar */}
                  <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <div className="p-6">
                    {/* Project icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-xl text-white mb-5 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                      🚀
                    </div>

                    {/* Project Name */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {project.projectName}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.projectDescription}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full
                            bg-orange-500/10 text-orange-400 border border-orange-500/20
                            transition-all duration-300
                            group-hover:bg-orange-500/20 group-hover:border-orange-500/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 text-center text-sm font-semibold rounded-xl
                          bg-gradient-to-r from-orange-500 to-orange-400 text-white
                          hover:shadow-lg hover:shadow-orange-500/30
                          active:scale-[0.97] transition-all duration-300"
                      >
                        Live Demo ↗
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 text-center text-sm font-semibold rounded-xl
                          border border-gray-700 text-gray-300
                          hover:border-orange-500/50 hover:text-orange-400 hover:bg-orange-500/5
                          active:scale-[0.97] transition-all duration-300"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PortfolioPage;
