import React,{useState} from 'react';
import road11 from '../assets/web.jpg'
import road12 from '../assets/mobile.jpg'
import road1 from '../assets/road1.jpg'
import road2 from '../assets/road2.jpg'
import road3 from '../assets/road3.jpg'
import road4 from '../assets/road4.jpg'
import road5 from '../assets/road5.png'
import road6 from '../assets/road6.jpg'
import road7 from '../assets/road7.jpg'
import road8 from '../assets/road8.jpg'
import road9 from '../assets/road9.jpg'
import road10 from '../assets/road10.jpg'
import road13 from '../assets/road13.jpg'
import road15 from '../assets/road15.jpg'
import road16 from '../assets/road16.jpg'
import road144 from '../assets/road144.jpg'
import { Link } from 'react-router-dom'

function Roadmaps() {

  const [data] = useState([
      {
        id: 1,
        title: "Frontend Developer",
        image: road144,
        shortDesc: "Design and build beautiful, interactive user interfaces."
      },
      {
        id: 2,
        title: "Backend Developer",
        image:  road10,
        shortDesc: "Develop robust APIs, databases, and server-side applications."
      },
      {
        id: 3,
        title: "Full Stack Developer",
        image:  road11,
        shortDesc: "Work on both frontend and backend to build complete applications."
      },
      {
        id: 4,
        title: "Mobile App Developer",
        image:  road12,
        shortDesc: "Build mobile applications for Android and iOS platforms."
      },
      {
        id: 5,
        title: "Data Scientist",
        image: road1,
        shortDesc: "Analyze and interpret complex data to drive strategic decisions."
      },
      {
        id: 6,
        title: "Machine Learning Engineer",
        image: road2,
        shortDesc: "Design, build and deploy machine learning models."
      },
      {
        id: 7,
        title: "Cybersecurity Specialist",
        image: road3,
        shortDesc: "Protect systems, networks, and programs from digital attacks."
      },
      {
        id: 8,
        title: "Cloud Engineer",
        image: road4,
        shortDesc: "Design and maintain cloud infrastructure for scalable apps."
      },
      {
        id: 9,
        title: "DevOps Engineer",
        image: road5,
        shortDesc: "Automate software delivery and manage development operations."
      },
      {
        id: 10,
        title: "Game Developer",
        image: road6,
        shortDesc: "Design and develop interactive games across platforms."
      },
      {
        id: 11,
        title: "UI/UX Designer",
        image: road7,
        shortDesc: "Craft user-friendly and aesthetically pleasing designs."
      },
      {
        id: 12,
        title: "Blockchain Developer",
        image: road8,
        shortDesc: "Develop decentralized applications and smart contracts."
      },
      {
        id: 13,
        title: "Database Administrator",
        image: road9,
        shortDesc: "Manage and optimize databases for performance and security."
      },
      {
        id: 14,
        title: "Software Tester / QA Engineer",
        image:  road15,
        shortDesc: "Ensure software quality through testing and debugging."
      },
      {
        id: 15,
        title: "AI Researcher",
        image: road13,
        shortDesc: "Work on cutting-edge AI innovations and algorithms."
      },
      {
        id: 16,
        title: "Network Engineer",
        image:  road16,
        shortDesc: "Design and maintain computer networks and communication systems."
      }
    ]);

  return (
    <div className="min-h-screen bg-black py-16 flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mt-24 text-center text-white mb-10">
        Explore Role Based <span className="text-blue-500">Roadmaps</span>
      </h1> 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {data.map((path) => (
          <div
            key={path.id}
            className="bg-blue-950 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 p-4 hover:bg-blue-300 group hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={path.image}
              alt={path.title}
              className="h-48 w-full rounded-xl object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold group-hover:text-blue-700 text-white">{path.title}</h2>
              <p className="text-white group-hover:text-gray-700 mt-2">{path.shortDesc}</p>
              <Link
                to={`/roadmap/${path.id}`}
                onClick={() => window.scrollTo(0,0)}
                className="mt-4 inline-block text-white font-bold hover:text-[#155dfc] hover:scale-110 group-hover:text-gray-700 hover:translate-x-3 text-[35px] transition"
              >
                →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Roadmaps