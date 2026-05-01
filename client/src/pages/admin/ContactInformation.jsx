import { useState } from "react";
import Sidebar from "../../components/admin-components/Sidebar";
import Topbar from "../../components/admin-components/Topbar";
import ContactTable from "../../components/admin-components/ContactTable";

const ContactInformation = () => {
    // useState
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
        <div className="flex min-h-screen bg-slate-50 overflow-hidden">

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

                {/* Topbar */}
                <Topbar open={open} setOpen={setOpen} />

                <div className="p-8 overflow-y-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold">Contact Informations</h1>
                        <p className="text-gray-500">
                            View all contact details of applicants.
                        </p>
                    </div>

                    <ContactTable />
                </div>
            </main>
        </div>
    )
}

export default ContactInformation;
