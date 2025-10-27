import React from 'react'
import { Link, useParams } from 'react-router-dom';
import roadmap1 from '../assets/roadmap1.png'
import roadmap2 from '../assets/roadmap2.png'
import roadmap3 from '../assets/roadmap3.png'
import roadmap4 from '../assets/roadmap4.png'
import roadmap5 from '../assets/roadmap5.png'
import roadmap6 from '../assets/roadmap6.png'
import roadmap7 from '../assets/roadmap7.png'
import roadmap8 from '../assets/roadmap8.png'
import roadmap9 from '../assets/roadmap9.png'
import roadmap10 from '../assets/roadmap10.png'
import roadmap11 from '../assets/roadmap11.png'
import roadmap12 from '../assets/roadmap12.png'
import roadmap13 from '../assets/roadmap13.png'
import roadmap14 from '../assets/roadmap14.png'
import roadmap15 from '../assets/roadmap15.png'
import roadmap16 from '../assets/roadmap16.png'

const SingleRoadmap = () => {

     const data = {
      1: {
        id: 1,
        title: "Frontend Developer",
        image: roadmap1,
        },
      2: {
        id: 2,
        title: "Backend Developer",
        image: roadmap2,
      },
      3: {
        id: 3,
        title: "Full Stack Developer",
        image: roadmap3,
      },
      4: {
        id: 4,
        title: "Mobile App Developer",
        image: roadmap4,
      },
      5: {
        id: 5,
        title: "Data Scientist",
        image: roadmap5,
      },
      6: {
        id: 6,
        title: "Machine Learning Engineer",
        image: roadmap6,
      },
      7: {
        id: 7,
        title: "Cybersecurity Specialist",
        image: roadmap7,
      },
      8: {
        id: 8,
        title: "Cloud Engineer",
        image: roadmap8,
      },
      9: {
        id: 9,
        title: "DevOps Engineer",
        image: roadmap9,
      },
      10: {
        id: 10,
        title: "Game Developer",
        image: roadmap10,
      },
      11: {
        id: 11,
        title: "UI/UX Designer",
        image: roadmap11,
      },
      12: {
        id: 12,
        title: "Blockchain Developer",
        image: roadmap12,
      },
      13: {
        id: 13,
        title: "Database Administrator",
        image: roadmap13,
      },
      14: {
        id: 14,
        title: "Software Tester / QA Engineer",
        image: roadmap14,
      },
      15: {
        id: 15,
        title: "AI Researcher",
        image: roadmap15,
      },
      16: {
        id: 16,
        title: "Network Engineer",
        image: roadmap16,
      },
    };

    const id = parseInt(useParams().id)
    const road = data[id];

    return road ? (
      <div className="bg-black text-white min-h-screen py-20 px-6 sm:px-16">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mt-16 mb-10 text-[#155dfc]">
        {road.title} <span className='text-white'>Roadmap</span>
      </h1>

      <img src={road.image} alt="" className='mx-auto' />

      {/* Roadmap & Resources Links */}
      <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
        <Link to={'/resources'}
        onClick={() => window.scrollTo(0,0)}
          className="bg-[#155dfc] hover:bg-[#00d4ff] cursor-pointer hover:text-black text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md"
        >
          Learning Resources
        </Link>
        <Link
          to="/roadmaps"
          onClick={() => window.scrollTo(0,0)}
          className="bg-transparent border border-gray-500 hover:bg-gray-800 text-gray-300 font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          ← Back to Roadmaps
        </Link>
      </div>
    </div>
  ) : (
    <div className='bg-black h-[100vh] text-center flex justify-center items-center text-2xl'>
        <div>
            Roadmap not found
            </div>
            </div>
  )
}

export default SingleRoadmap