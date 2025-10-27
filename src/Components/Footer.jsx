import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
// import { useUser } from "@clerk/clerk-react";

function Footer() {

  // const user = useUser();
  
  return (
    <div className="w-full text-black flex flex-col items-center gap-10 py-10 px-4 sm:px-8 bg-[linear-gradient(to_left_bottom,#00d4ff,#0051ff)]">
      {/* Top Section */}
      <div className="z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-28 w-full max-w-6xl">
        {/* Logo + Text */}
        <div className="w-full lg:w-[290px] text-center lg:text-left">
          <NavLink to={"/"}>
            <img onClick={() => {window.scrollTo(0,0)}}
              className="mb-3 h-20 sm:h-24 mx-auto lg:mx-0 drop-shadow-[0_0_5px_black]"
              src={logo}
              alt="logo"
            />
          </NavLink>
          <p className="text-black text-sm sm:text-base font-medium">
            Empowering Computer Science students with curated resources and
            real-time opportunities.
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <NavLink
            to={"/career-paths"}
            onClick={() => window.scrollTo(0,0)}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            CAREER PATHS
          </NavLink>
          <NavLink
            to={"/roadmaps"}
            onClick={() => window.scrollTo(0,0)}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            ROADMAPS
          </NavLink>
          <NavLink
            to={"/resources"}
            onClick={() => window.scrollTo(0,0)}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            RESOURCES
          </NavLink>
        </div>

        {/* Right Links */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <NavLink
            to={"/tech-events"}
            onClick={() => window.scrollTo(0,0)}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            TECH EVENTS
          </NavLink>
          <NavLink
            to={"/community"}
            onClick={() => window.scrollTo(0,0)}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            COMMUNITY
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => window.scrollTo(0,0)}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            CONTACT US
          </NavLink>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-[90%] bg-black"></div>

      {/* Bottom Line */}
      <div className="text-xs sm:text-sm font-medium text-center">
        © 2025 Resource.CS — All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
