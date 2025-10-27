import React from "react";

export default function LearningResources() {
  const resources = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "Learn to create visually appealing, responsive, and interactive web interfaces using HTML, CSS, JavaScript, and modern frontend frameworks.",
      links: [
        { name: "freeCodeCamp - Frontend Libraries", url: "https://www.freecodecamp.org/learn/front-end-development-libraries/" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn" },
        { name: "React Official Docs", url: "https://react.dev/" },
        { name: "YouTube - Free Frontend Course", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
      ],
    },
    {
      id: 2,
      title: "Backend Developer",
      desc: "Build and maintain the logic, database, and APIs that power applications behind the scenes using Node.js, Express, and PostgreSQL.",
      links: [
        { name: "Node.js Docs", url: "https://nodejs.org/en/docs" },
        { name: "Express.js Guide", url: "https://expressjs.com/" },
        { name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
        { name: "YouTube - Node.js Crash Course", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
      ],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      desc: "Combine frontend and backend technologies to build complete, dynamic, and high-performance web applications.",
      links: [
        { name: "The Odin Project", url: "https://www.theodinproject.com/" },
        { name: "MERN Stack Guide", url: "https://www.mongodb.com/mern-stack" },
        { name: "YouTube - Full Stack MERN Course", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
      ],
    },
    {
      id: 4,
      title: "Mobile App Developer",
      desc: "Design and build cross-platform mobile applications using frameworks like React Native or Flutter.",
      links: [
        { name: "React Native Docs", url: "https://reactnative.dev/" },
        { name: "Flutter Official Docs", url: "https://flutter.dev/docs" },
        { name: "YouTube - React Native Course", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
      ],
    },
    {
      id: 5,
      title: "Data Scientist",
      desc: "Extract insights from complex datasets using statistics, programming, and machine learning tools like Python, Pandas, and TensorFlow.",
      links: [
        { name: "Kaggle Courses", url: "https://www.kaggle.com/learn" },
        { name: "Scikit-Learn Docs", url: "https://scikit-learn.org/stable/user_guide.html" },
        { name: "YouTube - Data Science Course", url: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
      ],
    },
    {
      id: 6,
      title: "Machine Learning Engineer",
      desc: "Develop, train, and deploy intelligent systems using algorithms, deep learning models, and neural networks.",
      links: [
        { name: "TensorFlow Docs", url: "https://www.tensorflow.org/learn" },
        { name: "Fast.ai Courses", url: "https://course.fast.ai/" },
        { name: "YouTube - Machine Learning Course", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      ],
    },
    {
      id: 7,
      title: "Cybersecurity Specialist",
      desc: "Protect computer systems and networks from digital attacks using ethical hacking and penetration testing tools.",
      links: [
        { name: "TryHackMe", url: "https://tryhackme.com/" },
        { name: "OWASP", url: "https://owasp.org/" },
        { name: "YouTube - Cybersecurity Course", url: "https://www.youtube.com/watch?v=inWWhr5tnEA" },
      ],
    },
    {
      id: 8,
      title: "Cloud Engineer",
      desc: "Design and manage scalable cloud infrastructure on platforms like AWS, Azure, and Google Cloud.",
      links: [
        { name: "AWS Training", url: "https://aws.amazon.com/training/" },
        { name: "Azure Docs", url: "https://learn.microsoft.com/en-us/azure/" },
        { name: "Google Cloud Training", url: "https://cloud.google.com/training" },
        { name: "YouTube - AWS Cloud Course", url: "https://www.youtube.com/watch?v=ulprqHHWlng" },
      ],
    },
    {
      id: 9,
      title: "DevOps Engineer",
      desc: "Automate and optimize software delivery pipelines with tools like Docker, Kubernetes, Jenkins, and CI/CD.",
      links: [
        { name: "Docker Docs", url: "https://docs.docker.com/" },
        { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/" },
        { name: "YouTube - DevOps Tutorial", url: "https://www.youtube.com/watch?v=9pZ2xmsSDdo" },
      ],
    },
    {
      id: 10,
      title: "Game Developer",
      desc: "Develop interactive games using Unity or Unreal Engine with focus on game design, logic, and rendering.",
      links: [
        { name: "Unity Learn", url: "https://learn.unity.com/" },
        { name: "Unreal Engine Docs", url: "https://docs.unrealengine.com/" },
        { name: "YouTube - Unity Game Dev", url: "https://www.youtube.com/watch?v=IlKaB1etrik" },
      ],
    },
    {
      id: 11,
      title: "UI/UX Designer",
      desc: "Create visually engaging and user-centered interfaces that enhance digital experiences.",
      links: [
        { name: "Figma Learn", url: "https://help.figma.com/hc/en-us" },
        { name: "Adobe XD Tutorials", url: "https://helpx.adobe.com/xd/tutorials.html" },
        { name: "YouTube - UI/UX Crash Course", url: "https://www.youtube.com/watch?v=3Y03OSNwT-I" },
      ],
    },
    {
      id: 12,
      title: "Blockchain Developer",
      desc: "Develop decentralized applications (DApps) and smart contracts using Solidity and blockchain frameworks.",
      links: [
        { name: "Solidity Docs", url: "https://docs.soliditylang.org/" },
        { name: "Ethereum Dev Portal", url: "https://ethereum.org/en/developers/" },
        { name: "YouTube - Blockchain Course", url: "https://www.youtube.com/watch?v=gyMwXuJrbJQ" },
      ],
    },
    {
      id: 13,
      title: "Database Administrator",
      desc: "Manage, secure, and optimize databases for reliability and performance using SQL, PostgreSQL, and MySQL.",
      links: [
        { name: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
        { name: "MySQL Docs", url: "https://dev.mysql.com/doc/" },
        { name: "YouTube - SQL Full Course", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      ],
    },
    {
      id: 14,
      title: "Software Tester / QA Engineer",
      desc: "Ensure software reliability by performing functional, performance, and automation testing.",
      links: [
        { name: "Selenium Docs", url: "https://www.selenium.dev/documentation/" },
        { name: "Cypress Docs", url: "https://docs.cypress.io/" },
        { name: "YouTube - QA Testing Course", url: "https://www.youtube.com/watch?v=H1lemG2w3nA" },
      ],
    },
    {
      id: 15,
      title: "AI Researcher",
      desc: "Work on cutting-edge artificial intelligence algorithms, computer vision, and natural language processing.",
      links: [
        { name: "DeepLearning.ai", url: "https://www.deeplearning.ai/" },
        { name: "Google AI", url: "https://ai.google/" },
        { name: "YouTube - AI Research Basics", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
      ],
    },
    {
      id: 16,
      title: "Network Engineer",
      desc: "Design, configure, and manage computer networks and communication systems.",
      links: [
        { name: "Cisco Networking Academy", url: "https://www.netacad.com/" },
        { name: "CompTIA Network+ Guide", url: "https://www.comptia.org/certifications/network" },
        { name: "YouTube - Networking Full Course", url: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
      ],
    },
  ];

  const isYouTube = (url) => url.includes("youtube.com") || url.includes("youtu.be");

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-14 mt-20 text-white">
        <span className="text-[#155dfc]"> Learning Resources </span> for Career Paths
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 border border-gray-700 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-blue-300 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-300 mb-4">{item.desc}</p>

            <ul className="space-y-2">
              {item.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline flex items-center gap-2 ${
                      isYouTube(link.url)
                        ? "text-red-400"
                        : "text-blue-400"
                    }`}
                  >
                    {isYouTube(link.url) ? "▶️" : "🔗"} {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
