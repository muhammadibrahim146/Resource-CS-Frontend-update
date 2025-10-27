// LoginSignup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./Appcontext";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? "http://localhost:5000/api/users/login"
        : "http://localhost:5000/api/users/register";

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.username,
            email: formData.email,
            password: formData.password,
            university: "Unknown",
            semester: 1,
          };

      const res = await axios.post(url, payload, { withCredentials: true });

      console.log("✅ Success:", res.data);

      // backend should return res.data.user and res.data.token
      login(res.data.user,res.data.token);
console.log(res.data.token,res.data);
      navigate("/");
    } catch (err) {
      console.error("❌ Axios Error:", err);
      alert("Login/Register failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-[#0d0d0d] p-8 rounded-2xl shadow-2xl border border-[#155dfc]/30">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#155dfc] tracking-wide">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:border-[#155dfc]"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:border-[#155dfc]"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:border-[#155dfc]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#155dfc] hover:bg-[#0e46c7] text-white font-semibold py-2 rounded-lg transition-all duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-5 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#155dfc] cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;



