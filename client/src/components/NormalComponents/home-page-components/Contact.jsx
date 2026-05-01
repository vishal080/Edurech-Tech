import { useState } from "react";
import api from "../../../service/api.js";
import { toast } from "react-toastify";

const Contact = () => {
  // useStates
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/contact", {
        name,
        email,
        contactNumber,
        service,
        message
      })

      setName("");
      setEmail("");
      setContactNumber("");
      setService("");
      setMessage("");

      // alert("contact form submition successfully")
      toast.success("contact form submition successfully!")
    } catch (error) {
      toast.error(error.response?.data?.message || "contact form submition failed!")
    }
  }

  return (
    <section id="contact" className="pt-5 pb-8 md:pt-6 md:pb-10 bg-[#111111] text-white">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-6 text-orange-500 animate-fadeUp">
        Get In Touch
      </h2>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        id="contact-form"
        className="md:max-w-2/5 max-w-2xl mx-4 md:mx-auto px-8 md:px-14 py-8 rounded-2xl
        bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]
        space-y-4 animate-fadeUp delay-200"
      >

        {/* Name */}
        <div>
          <label className="text-sm font-semibold">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-2 rounded-lg bg-[#0a0a0a] border border-[#333]
            focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            transition-all duration-300"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-2 rounded-lg bg-[#0a0a0a] border border-[#333]
            focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            transition-all duration-300"
          />
        </div>

        {/* Mobile */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Contact No</label>
          <input
            type="tel"
            name="user_phone"
            placeholder="Mobile No"
            required
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full p-2 mt-2 rounded-lg bg-[#0a0a0a] border border-[#333]
            focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            transition-all duration-300"
          />
        </div>

        {/* Service Dropdown */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Service Interested In</label>
          <select
            name="user_service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-2 mt-2 rounded-lg bg-[#0a0a0a] border border-[#333]
            text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            transition-all duration-300"
          >
            <option value="">Select a service</option>
            <option value="it-consulting">IT Consulting</option>
            <option value="technical-support">Technical Support</option>
            <option value="profile-resume">Profile & Resume Creation</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="cybersecurity">Cybersecurity</option>
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 mt-2 rounded-lg bg-[#0a0a0a] border border-[#333]
            focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            transition-all duration-300 resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-full font-semibold
          bg-gradient-to-r from-orange-500 to-orange-400
          hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,107,0,0.35)]
          active:scale-95 cursor-pointer
          transition-all duration-300"
        >
          Send Message
        </button>

      </form>
    </section>
  );
};

export default Contact;