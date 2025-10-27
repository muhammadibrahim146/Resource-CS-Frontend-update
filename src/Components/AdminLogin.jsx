import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      alert("Please enter your email and password!");
      return;
    }

    // Dummy check — replace with your backend auth later
    if (
      credentials.email === "admin@resourcecs.com" &&
      credentials.password === "admin123"
    ) {
      alert("Login successful!");
      // redirect to admin dashboard here
    } else {
      alert("Invalid credentials!");
    }

    setCredentials({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-gray-400 text-sm">
            Secure access to your Resource.CS dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-blue-500" size={20} />
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Admin Email"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-blue-500" size={20} />
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 cursor-pointer hover:scale-105  hover:bg-blue-700 transition-all duration-200 py-3 rounded-lg font-semibold text-white mt-2"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-500 text-xs text-center mt-6">
          © {new Date().getFullYear()} Resource.CS — Admin Panel
        </p>
      </div>
    </div>
  );
}
