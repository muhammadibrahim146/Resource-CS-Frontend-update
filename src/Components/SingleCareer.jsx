import React from 'react'
import { useParams } from 'react-router-dom'
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

const SingleCareer = () => {

    const data = {
  1: {
    id: 1,
    title: "Frontend Developer",
    image: road144,
    shortDesc: "Design and build beautiful, interactive user interfaces.",
    description:
      "A Frontend Developer focuses on creating the visual and interactive elements of a website or application that users see and interact with. They use technologies like HTML, CSS, and JavaScript, along with frameworks such as React, Angular, or Vue.js. Their job involves ensuring responsive design, optimizing website performance, and collaborating with designers and backend developers to create a seamless user experience.",
  },
  2: {
    id: 2,
    title: "Backend Developer",
    image: road10,
    shortDesc: "Develop robust APIs, databases, and server-side applications.",
    description:
      "A Backend Developer handles the logic, database interactions, and server-side operations of an application. They build APIs, manage databases, and ensure that data is stored and retrieved efficiently. Common technologies include Node.js, Express, Python, Django, Java, and SQL. Their main goal is to ensure that the system runs smoothly behind the scenes, handling authentication, data management, and server security.",
  },
  3: {
    id: 3,
    title: "Full Stack Developer",
    image: road11,
    shortDesc: "Work on both frontend and backend to build complete applications.",
    description:
      "A Full Stack Developer works on both client-side and server-side development, making them versatile professionals capable of building complete web applications. They handle UI design, server logic, database management, and API integration. They often work with technologies like React, Node.js, MongoDB, and Express, enabling them to bridge the gap between frontend and backend teams.",
  },
  4: {
    id: 4,
    title: "Mobile App Developer",
    image: road12,
    shortDesc: "Build mobile applications for Android and iOS platforms.",
    description:
      "A Mobile App Developer creates applications for smartphones and tablets using platforms like Android, iOS, or cross-platform frameworks such as Flutter and React Native. They design user interfaces, integrate APIs, manage local data, and optimize app performance. Their focus is on delivering smooth, responsive, and user-friendly apps that meet both functional and aesthetic requirements.",
  },
  5: {
    id: 5,
    title: "Data Scientist",
    image: road1,
    shortDesc: "Analyze and interpret complex data to drive strategic decisions.",
    description:
      "A Data Scientist collects, cleans, and analyzes large volumes of data to uncover valuable insights that help organizations make data-driven decisions. They use tools like Python, R, SQL, and machine learning libraries such as Pandas, NumPy, and Scikit-learn. Their work involves data visualization, statistical modeling, and predictive analysis to identify trends and patterns.",
  },
  6: {
    id: 6,
    title: "Machine Learning Engineer",
    image: road2,
    shortDesc: "Design, build and deploy machine learning models.",
    description:
      "A Machine Learning Engineer focuses on developing intelligent systems that can learn and improve from experience without explicit programming. They work with algorithms, neural networks, and frameworks like TensorFlow or PyTorch. Their tasks include data preprocessing, model training, performance tuning, and deploying models into production to solve real-world problems such as image recognition, recommendations, or automation.",
  },
  7: {
    id: 7,
    title: "Cybersecurity Specialist",
    image: road3,
    shortDesc: "Protect systems, networks, and programs from digital attacks.",
    description:
      "A Cybersecurity Specialist protects computer systems, networks, and data from unauthorized access, attacks, and breaches. They conduct security assessments, manage firewalls, and monitor suspicious activity. Their responsibilities include implementing encryption, securing servers, and creating policies to safeguard sensitive information against evolving cyber threats.",
  },
  8: {
    id: 8,
    title: "Cloud Engineer",
    image: road4,
    shortDesc: "Design and maintain cloud infrastructure for scalable apps.",
    description:
      "A Cloud Engineer designs, implements, and manages cloud-based infrastructure using platforms like AWS, Azure, or Google Cloud. They ensure that systems are scalable, secure, and cost-efficient. Their role involves deploying applications, managing databases, automating workflows, and ensuring high availability for enterprise-level solutions.",
  },
  9: {
    id: 9,
    title: "DevOps Engineer",
    image: road5,
    shortDesc: "Automate software delivery and manage development operations.",
    description:
      "A DevOps Engineer bridges the gap between development and operations teams by automating processes and improving system reliability. They use CI/CD pipelines, containerization tools like Docker and Kubernetes, and cloud infrastructure to streamline software delivery. Their work ensures faster deployments, better collaboration, and consistent performance across environments.",
  },
  10: {
    id: 10,
    title: "Game Developer",
    image: road6,
    shortDesc: "Design and develop interactive games across platforms.",
    description:
      "A Game Developer designs and builds engaging video games for consoles, PCs, and mobile devices. They use game engines like Unity or Unreal Engine to create interactive environments, gameplay mechanics, and animations. Their role includes coding game logic, optimizing performance, and collaborating with artists and designers to create immersive experiences.",
  },
  11: {
    id: 11,
    title: "UI/UX Designer",
    image: road7,
    shortDesc: "Craft user-friendly and aesthetically pleasing designs.",
    description:
      "A UI/UX Designer focuses on the look and feel of digital products. They conduct user research, create wireframes, and design visually appealing interfaces. Their goal is to enhance usability and create enjoyable user experiences through intuitive layouts, clear navigation, and engaging visual design using tools like Figma, Adobe XD, and Sketch.",
  },
  12: {
    id: 12,
    title: "Blockchain Developer",
    image: road8,
    shortDesc: "Develop decentralized applications and smart contracts.",
    description:
      "A Blockchain Developer builds decentralized applications (dApps) and smart contracts on platforms like Ethereum, Solana, or Polygon. They ensure data transparency, immutability, and security using blockchain protocols. Their work often involves cryptography, tokenization, and developing systems for digital identity, finance, and secure transactions.",
  },
  13: {
    id: 13,
    title: "Database Administrator",
    image: road9,
    shortDesc: "Manage and optimize databases for performance and security.",
    description:
      "A Database Administrator (DBA) is responsible for maintaining, securing, and optimizing databases. They handle database design, performance tuning, backups, and recovery processes. They work with systems like MySQL, PostgreSQL, or Oracle to ensure data integrity and fast access for applications and analytics.",
  },
  14: {
    id: 14,
    title: "Software Tester / QA Engineer",
    image: road15,
    shortDesc: "Ensure software quality through testing and debugging.",
    description:
      "A Software Tester or QA Engineer ensures that software products are bug-free and perform as expected. They write and execute test cases, perform manual and automated testing, and report issues to developers. Their focus is on maintaining software reliability, improving quality standards, and ensuring a smooth user experience before release.",
  },
  15: {
    id: 15,
    title: "AI Researcher",
    image: road13,
    shortDesc: "Work on cutting-edge AI innovations and algorithms.",
    description:
      "An AI Researcher explores and develops new algorithms, models, and theories in the field of artificial intelligence. They work on deep learning, reinforcement learning, and natural language processing to push the boundaries of machine intelligence. Their work contributes to innovations in robotics, healthcare, and automation.",
  },
  16: {
    id: 16,
    title: "Network Engineer",
    image: road16,
    shortDesc: "Design and maintain computer networks and communication systems.",
    description:
      "A Network Engineer designs, configures, and maintains computer networks such as LANs, WANs, and cloud-based systems. They ensure reliable communication between systems and secure data transmission. Their responsibilities include network troubleshooting, performance monitoring, and implementing network security measures.",
  },
};

    const id = parseInt(useParams().id)
    const career = data[id]; 
    
  return career ? (
      <div className="bg-black text-white min-h-screen py-20 px-6 sm:px-16">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mt-16 mb-10 text-[#155dfc]">
        {career.title}
      </h1>

      {/* Image + Description */}
      <div className="flex flex-col sm:flex-row items-center gap-10 mb-18 mt-10">
        <img
          src={career.image}
          alt={career.title}
          className="w-full sm:w-1/2 h-[450px] rounded-2xl shadow-lg object-cover"
        />
        <p className="text-lg sm:text-xl leading-8 text-gray-300 sm:w-[550px] text-center">
          {career.description}
        </p>
      </div>

      {/* Roadmap & Resources Links */}
      <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
        <Link to={`/roadmap/${id}`}
        onClick={() => window.scrollTo(0,0)}
          className="bg-[#155dfc] cursor-pointer hover:bg-[#00d4ff] hover:text-black text-white font-semibold py-3 px-6 rounded-xl transition ease-in-out duration-300 shadow-md"
        >
          View Roadmap
        </Link>
        <Link to={'/resources'}
        onClick={() => window.scrollTo(0,0)}
          className="bg-[#155dfc] hover:bg-[#00d4ff] cursor-pointer hover:text-black text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md"
        >
          Learning Resources
        </Link>
        <Link
          to="/career-paths"
          onClick={() => window.scrollTo(0,0)}
          className="bg-transparent border border-gray-500 hover:bg-gray-800 text-gray-300 font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          ← Back to Careers
        </Link>
      </div>
    </div>
  ) : (
    <div className='bg-black h-[100vh] text-center flex justify-center items-center text-2xl'>
        <div>
            Career Path not found
            </div>
            </div>
  )
}

export default SingleCareer