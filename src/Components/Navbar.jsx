import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAuth } from "./Appcontext"; // ✅ import

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // ✅ access global user

  useEffect(() => {
    gsap.to(".navbar", {
      backgroundColor: "black",
      duration: 0.5,
      height: "13.2%",
      scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });
  }, []);

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "";

  // ✅ handle logout function
  const handleLogout = () => {
    logout(); // clears token + user
    navigate("/login"); // redirects to login page
  };

  return (
    <div className="navbar fixed z-[99] flex justify-between items-center sm:px-14 px-2.5 w-full py-1 sm:py-2.5">
      {/* Logo */}
      <div className="logocont h-[97px] w-[186px]">
        <img
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="logo cursor-pointer sm:hover:h-[94px] transition-all ease-in-out ancr sm:h-24 h-20 hover:h-[78px]"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Desktop Links */}
      {user && (
        <div className="nav hidden sm:flex items-center gap-3 sm:gap-12">
          <NavLink to="/career-paths" className="text-white hover:text-[#155dfc]">
            CAREER PATHS
          </NavLink>
          <NavLink to="/roadmaps" className="text-white hover:text-[#155dfc]">
            ROADMAPS
          </NavLink>
          <NavLink to="/resources" className="text-white hover:text-[#155dfc]">
            RESOURCES
          </NavLink>
          <NavLink to="/tech-events" className="text-white hover:text-[#155dfc]">
            TECH EVENTS
          </NavLink>
          <NavLink to="/community" className="text-white hover:text-[#155dfc]">
            COMMUNITY
          </NavLink>
        </div>
      )}

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {!user && (
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#155dfc] text-white px-10 py-2.5"
          >
            Get started <ArrowRight className="w-4 h-4" />
          </Link>
        )}

        {user && (
          <div
            onClick={handleLogout} // ✅ logout click se login page redirect
            title="Logout"
            className="bg-[#155dfc] w-10 h-10 flex items-center justify-center rounded-full text-white font-bold cursor-pointer hover:bg-[#0e46c7] transition-all"
          >
            {userInitial}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;



