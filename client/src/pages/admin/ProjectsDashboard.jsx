import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin-components/Sidebar";
import Topbar from "../../components/admin-components/Topbar";
import ProjectCard from "../../components/admin-components/ProjectCard";

const ProjectsDashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">

      {/* Sidebar */}
      <Sidebar open={open} />

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Topbar */}
        <Topbar open={open} setOpen={setOpen} />

        {/* Content */}
        <div className="p-6 md:px-14 overflow-y-auto">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                All Projects
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                Manage all portfolio projects.
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/create-project")}
              className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
            >
              Add New Project
            </button>

          </div>

          <ProjectCard />

        </div>
      </main>
    </div>
  );
};

export default ProjectsDashboard;
