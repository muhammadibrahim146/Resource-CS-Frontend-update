import { useState } from "react";

export default function TechEvents() {
  const [events] = useState([
    {
      id: 1,
      title: "Tech Innovators Summit 2025",
      date: "March 12–14, 2025",
      location: "Karachi, Pakistan",
      description:
        "Tech Innovators Summit 2025 is Pakistan’s biggest technology conference bringing together industry leaders, startups, and innovators to discuss the future of technology. The event will focus on emerging trends in Artificial Intelligence, Cloud Computing, and Software Development. Expect keynote sessions, product showcases, and networking opportunities with top tech professionals from across the country.",
    },
    {
      id: 2,
      title: "AI Revolution Expo",
      date: "April 20–22, 2025",
      location: "Lahore, Pakistan",
      description:
        "AI Revolution Expo focuses on artificial intelligence applications across multiple industries in Pakistan. Learn from AI researchers and industry experts about machine learning models, neural networks, and AI-driven automation. The event also includes workshops for developers who want to integrate AI into their products and businesses.",
    },
    {
      id: 3,
      title: "Web Dev Connect 2025",
      date: "May 8–10, 2025",
      location: "Islamabad, Pakistan",
      description:
        "Web Dev Connect 2025 is a national conference for frontend, backend, and full-stack developers in Pakistan. The event covers topics such as React.js, Next.js, Node.js, and API integration. Developers will get hands-on experience through coding sessions, workshops, and expert talks focusing on building scalable and high-performance web applications.",
    },
    {
      id: 4,
      title: "Cybersecurity World Conference",
      date: "June 15–17, 2025",
      location: "Karachi, Pakistan",
      description:
        "The Cybersecurity World Conference highlights Pakistan’s efforts in strengthening digital defense and information security. This event will explore topics like ethical hacking, network security, and data protection laws. Cybersecurity experts from both public and private sectors will share real-world case studies and best practices.",
    },
    {
      id: 5,
      title: "Cloud & DevOps Expo 2025",
      date: "July 10–12, 2025",
      location: "Lahore, Pakistan",
      description:
        "Cloud & DevOps Expo 2025 focuses on automation, continuous deployment, and cloud infrastructure. Developers and IT professionals will learn how to build scalable and efficient cloud systems using AWS, Azure, and Google Cloud. The event also features DevOps tool demonstrations and workshops on containerization with Docker and Kubernetes.",
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 mt-20 text-center">
        Upcoming <span className="text-blue-500">Tech Events</span> in Pakistan
      </h1>

      <div className="flex flex-col gap-0 max-w-4xl w-full">
        {events.map((event) => (
          <div
            key={event.id}
            className=" pl-6 py-10 hover:border-blue-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              {event.title}
            </h2>
            <p className="text-gray-400 text-sm mb-1">📅 {event.date}</p>
            <p className="text-gray-400 text-sm mb-4">📍 {event.location}</p>
            <p className="text-gray-300 leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
