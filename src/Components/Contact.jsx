import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields!");
      return;
    }
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 mt-20 tracking-wide">
          Contact <span className="text-[#155dfc]">Us</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
          Have questions, suggestions, or collaboration ideas? Reach out to us —
          we’d love to hear from you!
        </p>
      </div>

      {/* Contact Container */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10 bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-lg">
        
        {/* Contact Info Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Get in Touch
            </h2>
            <p className="text-gray-400 mb-6">
              Fill out the form or reach us directly through the contact
              details below. We usually respond within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-blue-500" size={20} />
                <span>support@resourcecs.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="text-blue-500" size={20} />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-blue-500" size={20} />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 bg-gray-800 p-6 rounded-2xl shadow-md"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
          />
          <button
            type="submit"
            className="bg-[#155dfc] cursor-pointer hover:bg-blue-700 transition-colors duration-200 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Text */}
      {/* <p className="text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Resource.CS — All Rights Reserved.
      </p> */}
    </div>
  );
}
