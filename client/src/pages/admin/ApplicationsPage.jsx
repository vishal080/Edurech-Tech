import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../service/api";
import Sidebar from "../../components/admin-components/Sidebar";
import Topbar from "../../components/admin-components/Topbar";

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  // fetch all applications
  const fetchApplications = async () => {
    try {
      const response = await api.get("/api/admin/applications");
      setApplications(response.data.applications);
      toast.success("Applications fetched successfully!");
    } catch (error) {
      console.log("Error fetching applications:", error);
      toast.error(
        error.response?.data?.message || "Error fetching applications"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar open={open} />

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <main className="flex-1 flex flex-col overflow-hidden">

        <Topbar open={open} setOpen={setOpen} />

        <div className="p-8 overflow-y-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Job Applications</h1>
            <p className="text-gray-500">
              View all applicant details and the jobs they applied for.
            </p>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <p className="text-gray-500 text-lg">
                Loading applications...
              </p>
            </div>
          ) : applications.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <p className="text-gray-500 text-lg">
                No applications found.
              </p>
            </div>
          ) : (
            /* Applications Table */
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  {/* Header */}
                  <thead>
                    <tr className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white text-sm uppercase tracking-wider">
                      <th className="px-6 py-4">#</th>
                      <th className="px-6 py-4">Applicant Name</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Phone</th>
                      <th className="px-6 py-4">Experience</th>
                      <th className="px-6 py-4">Applied For</th>
                      <th className="px-6 py-4">Company</th>
                      <th className="px-6 py-4">Resume</th>
                      <th className="px-6 py-4">Applied On</th>
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody className="divide-y divide-gray-100">
                    {applications.length === 0 ? (
                      <tr>
                        <td colSpan="9" className="text-center py-10 text-gray-400">
                          No applications found.
                        </td>
                      </tr>
                    ) : (
                      applications.map((app, index) => (
                        <tr
                          key={app._id}
                          className="hover:bg-orange-50 transition"
                        >
                          {/* Index */}
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {index + 1}
                          </td>

                          {/* Name */}
                          <td className="px-6 py-4 font-medium text-gray-800">
                            {app.name}
                          </td>

                          {/* Email */}
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {app.email}
                          </td>

                          {/* Phone */}
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {app.phone}
                          </td>

                          {/* Experience (same badge style as contact) */}
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                              {app.experience}
                            </span>
                          </td>

                          {/* Job */}
                          <td className="px-6 py-4 text-gray-700">
                            {app.job?.title || "N/A"}
                          </td>

                          {/* Company */}
                          <td className="px-6 py-4 text-gray-700">
                            {app.job?.company || "N/A"}
                          </td>

                          {/* Resume */}
                          <td className="px-6 py-4">
                            {app.resume ? (
                              <a
                                href={app.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm"
                              >
                                View
                              </a>
                            ) : (
                              <span className="text-gray-400 text-sm">N/A</span>
                            )}
                          </td>

                          {/* Date */}
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date(app.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-gray-200 text-sm text-gray-500">
                Total Applications: {applications.length}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ApplicationsPage;
