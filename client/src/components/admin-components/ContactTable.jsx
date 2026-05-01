import { useEffect, useState } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";

const ContactTable = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllContacts = async () => {
        try {
            const response = await api.get("/api/admin/contact");
            setContacts(response.data.contacts);
            toast.success("Contacts fetched successfully!");
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Internal server error to fetch contacts"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllContacts();
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            {/* Loading */}
            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <p className="text-gray-500 text-lg">Loading Contacts...</p>
                </div>
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            {/* Header */}
                            <thead>
                                <tr className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white text-sm uppercase tracking-wider">
                                    <th className="px-6 py-4">#</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Phone</th>
                                    <th className="px-6 py-4">Service</th>
                                    <th className="px-6 py-4">Message</th>
                                </tr>
                            </thead>

                            {/* Body */}
                            <tbody className="divide-y divide-gray-100">
                                {contacts.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="text-center py-10 text-gray-400"
                                        >
                                            No contacts found.
                                        </td>
                                    </tr>
                                ) : (
                                    contacts.map((contact, index) => (
                                        <tr
                                            key={contact._id}
                                            className="hover:bg-orange-50 transition"
                                        >
                                            {/* Index */}
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {index + 1}
                                            </td>

                                            {/* Name */}
                                            <td className="px-6 py-4 font-medium text-gray-800">
                                                {contact.name}
                                            </td>

                                            {/* Email */}
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {contact.email}
                                            </td>

                                            {/* Phone */}
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {contact.contactNumber}
                                            </td>

                                            {/* Service Badge */}
                                            <td className="px-6 py-4">
                                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 capitalize">
                                                    {contact.service}
                                                </span>
                                            </td>

                                            {/* Message */}
                                            <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                                                {contact.message}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-slate-50 border-t border-gray-200 text-sm text-gray-500">
                        Total Contacts: {contacts.length}
                    </div>
                </>
            )}
        </div>
    );
};

export default ContactTable;