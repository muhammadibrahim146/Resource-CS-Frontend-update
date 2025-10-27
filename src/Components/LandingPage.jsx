import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import video from "../assets/140578-775389242_small.mp4";
import tech2 from "../assets/tech2.jpg";
import pic0 from "../assets/pic0.jpg";
import WhyChoose from "./WhyChoose";
import { useNavigate } from "react-router-dom";
// import pic1 from '../assets/pic1.jpeg'
// import pic2 from '../assets/pic1.jpg'
// import tech1 from '../assets/pic1.png'

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
    document.head.appendChild(link);

    gsap.to("#main", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -10%",
        end: "top -80%",
        scrub: 1,
      },
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full text-white overflow-x-hidden">
      <video
        className="vidtop h-full w-full fixed object-cover z-[-1]"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        id="main"
        className="overflow-hidden relative bg-[rgba(0,0,0,0.466)] h-full w-full m-0 p-0"
      >
        {/* Page 1 */}
        <div className="page1 h-screen w-full relative flex justify-center items-center flex-col text-center z-[10] px-4">
          <h1
  id="tophead1"
  className="headline font-[900] text-white text-center 
             text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] mb-[-24px] sm:mb-[-70px] sm:mt-16"
  data-text="LEARN. TRANSFORM."
>
  LEARN. TRANSFORM.
</h1>

<h1
  id="tophead2"
  className="headline font-[900] text-white text-center mt-6
             text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem]"
  data-text="ACHIEVE."
>
  ACHIEVE.
</h1>
          <h3 id="subtophead" className="text-xl sm:text-2xl md:text-3xl font-[900] text-white mt-6">
            YOUR ULTIMATE COMPUTER SCIENCE LEARNING HUB!
          </h3>
          <p className="m-0 text-base sm:text-lg md:text-xl lg:text-[1.5rem] text-white mt-6 max-w-3xl">
            Discover curated learning resources, stay updated with tech events,
            and accelerate your Computer Science journey with our comprehensive
            platform designed for students.
          </p>
        </div>

        {/* Page 2 */}
        <div className="page2 w-full z-[10]">
          {/* Horizontal Scroller */}
          <div
            id="scroller"
            className="whitespace-nowrap overflow-x-auto overflow-y-hidden relative z-[10]"
          >
            <div id="scroller-in" className="inline-block whitespace-nowrap">
              {["CAREER PATHS", "ROADMAPS", "RESOURCES", "TECH EVENTS"].map(
                (item, i) => (
                  <h4
                    key={i}
                    className="inline-block text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-[900] mt-0 mb-8 mr-12"
                  >
                    {item}
                  </h4>
                )
              )}
            </div>
          </div>

          {/* About Section */}
          <div
            id="about"
            className="flex flex-col lg:flex-row w-full relative min-h-[420px] top-8 z-[12] items-center px-4 justify-center"
          >
            <img
              className="h-40 sm:h-52 md:h-64 w-40 sm:w-52 md:w-56 rounded-[10px] object-cover my-6 mx-auto lg:mx-10"
              src={pic0}
              alt="about 1"
            />
            <div className="text-center lg:text-left max-w-3xl px-4">
              <h2 className="mt-0 text-3xl text-center sm:text-4xl md:text-5xl font-[900]">
                ABOUT US
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center my-6">
                We are dedicated to guiding students and professionals in exploring Computer Science career paths. Our platform provides structured roadmaps, curated resources, and updates on upcoming tech events to help learners stay ahead in the fast-evolving tech world. Whether you aim to become a software developer, data scientist, AI engineer, or cybersecurity expert, we make the journey clearer and easier. Our mission is to empower learners with the right knowledge, tools, and opportunities to build successful careers in technology.
              </p>
            </div>
            <img
              className="h-40 sm:h-52 md:h-64 w-40 sm:w-52 md:w-56 rounded-[10px] object-cover my-6 mx-auto lg:mx-10"
              src={tech2}
              alt="about 2"
            />
          </div>

          {/* Cards Section */}
          <div className="cardscont bg-black min-h-[80vh] flex flex-col lg:flex-row items-center justify-evenly mt-16 sm:mb-0 mb-16 gap-6 px-4">
            {/* {[ */}
              {/* { */}
                {/* title: "CAREER PATHS",
                text: "Explore diverse career paths in Computer Science, from software development and data science to cybersecurity, AI, and cloud computing. Each path offers unique opportunities, skills, and growth potential. Whether you’re starting as a beginner or planning your next move, our detailed guides and resources help you understand roles, required skills, and industry demand.",
                bg: {pic2},
              },
              {
                title: "RESOURCES",
                text: "Access a wide range of curated resources to boost your Computer Science journey. From beginner-friendly tutorials and coding challenges to advanced books, tools, and frameworks, we’ve got everything to support your learning. Stay updated with the latest technologies and explore practical guides, open-source projects, and community platforms.",
                bg: {tech1},
              },
              {
                title: "COMMUNITY",
                text: "Join a vibrant community of learners, developers, and tech enthusiasts passionate about Computer Science. Connect, collaborate, and share knowledge through discussions, forums, and events. Our community is a space where you can ask questions, get guidance, and support others in their learning journey. From beginners to professionals, everyone is welcome to exchange ideas, explore opportunities, and grow together.",
                bg: {pic1},
              }, */}
            {/* ].map((card, i) => ( */}
              <div
                className={`cards ancr card1 bg-no-repeat bg-center bg-cover group relative w-full sm:w-[90%] md:w-[70%] lg:w-[30%] h-[390px] rounded-[20px]`}
              >
                <div className="overlay h-full w-full flex flex-col bg-[#1d1d1dc7] justify-center items-center text-white px-3 py-2 opacity-0 gap-3 z-10 rounded-[20px] transition-all ease-in-out duration-700 text-center group-hover:opacity-100">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-[900]">
                    CAREER PATHS
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg font-[500]">
                    Explore diverse career paths in Computer Science, from software development and data science to cybersecurity, AI, and cloud computing. Each path offers unique opportunities, skills, and growth potential. Whether you’re starting as a beginner or planning your next move, our detailed guides and resources help you understand roles, required skills, and industry demand.
                  </p>
                </div>
              </div>
              <div
                className={`cards ancr card2 bg-no-repeat bg-center bg-cover group relative w-full sm:w-[90%] md:w-[70%] lg:w-[30%] h-[390px] rounded-[20px]`}
              >
                <div className="overlay h-full w-full flex flex-col bg-[#1d1d1dc7] justify-center items-center text-white px-3 py-2 opacity-0 gap-3 z-10 rounded-[20px] transition-all ease-in-out duration-700 text-center group-hover:opacity-100">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-[900]">
                    RESOURCES
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg font-[500]">
                    Access a wide range of curated resources to boost your Computer Science journey. From beginner-friendly tutorials and coding challenges to advanced books, tools, and frameworks, we’ve got everything to support your learning. Stay updated with the latest technologies and explore practical guides, open-source projects, and community platforms.
                  </p>
                </div>
              </div>
              <div
                className={`cards ancr card3 bg-no-repeat bg-center bg-cover group relative w-full sm:w-[90%] md:w-[70%] lg:w-[30%] h-[390px] rounded-[20px]`}
              >
                <div className="overlay h-full w-full flex flex-col bg-[#1d1d1dc7] justify-center items-center text-white px-3 py-2 opacity-0 gap-3 z-10 rounded-[20px] transition-all ease-in-out duration-700 text-center group-hover:opacity-100">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-[900]">
                    COMMUNITY
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg font-[500]">
                    Join a vibrant community of learners, developers, and tech enthusiasts passionate about Computer Science. Connect, collaborate, and share knowledge through discussions, forums, and events. Our community is a space where you can ask questions, get guidance, and support others in their learning journey. From beginners to professionals, everyone is welcome to exchange ideas, explore opportunities, and grow together.
                  </p>
                </div>
              </div>
            {/* ))} */}
          </div>

          <WhyChoose />
        </div>

        {/* Page 3 */}
        <div id="page3" className="px-4">
          {/* Waiting Section */}
          <div className="waitingcont mt-16">
            <div className="text-center font-[900] text-2xl sm:text-3xl md:text-4xl lg:text-[3.1rem] mb-12 text-white">
              WHAT ARE YOU WAITING FOR?
            </div>
            <div className="optionscont flex flex-col sm:flex-row gap-6 justify-center items-center">
              {["CAREER PATHS", "ROADMAPS", "TECH EVENTS"].map((opt, i) => (
                <div
                id={`option${i+1}`}
                  key={i}
                  onClick={() => navigate("")}
                  className="options ancr text-black bg-[#155dfc] h-[120px] sm:h-[150px] text-lg sm:text-xl md:text-2xl font-[900] w-[90%] sm:w-[300px] md:w-[350px] lg:w-[420px] flex justify-center items-center rounded-[20px] transition-all ease-in-out duration-700 hover:text-transparent"
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4">
                Ready to Supercharge Your Learning?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium mb-6">
                Join thousands of Computer Science students who trust{" "}
                <span className="font-bold text-[#155dfc]">Resource.CS</span> to
                level up their skills, stay updated, and unlock new career
                opportunities.
              </p>
              <button className="bg-white text-[#155dfc] font-[600] px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-200 cursor-pointer">
                Join Free Today
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}




