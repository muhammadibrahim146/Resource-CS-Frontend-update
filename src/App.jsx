import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CareerPaths from "./Components/CareerPaths";
import Roadmaps from "./Components/Roadmaps";
import Resources from "./Components/Resources";
import Community from "./Components/Community";
import Events from "./Components/Events";
import SingleCareer from "./Components/SingleCareer";
import SingleRoadmap from "./Components/SingleRoadmap";
import Contact from "./Components/Contact";
import AdminLogin from "./Components/AdminLogin";
import AdminPanel from "./Components/AdminPanel";
import LoginSignup from "./Components/LoginSignup";
// import Navbar from './Components/Navbar';

function App() {

  const location = useLocation();
  const hideLayout = location.pathname === "/admin-login" || location.pathname === "/admin-panel";
  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/career-paths" element={<CareerPaths />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path={`/career-path/:id`} element={<SingleCareer />} />
        <Route path={`/roadmap/:id`} element={<SingleRoadmap />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tech-events" element={<Events />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-panel' element={<AdminPanel />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
