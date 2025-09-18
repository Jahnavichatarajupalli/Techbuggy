import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white rounded-2xl shadow-xl shadow-orange-200 border border-gray-200 p-10 w-full max-w-lg mt-16">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
