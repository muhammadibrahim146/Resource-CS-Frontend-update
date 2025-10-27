// src/pages/AdminPanel.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const AdminPanel = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    venue: "",
    date: "",
  });
  const [events, setEvents] = useState([]);
  const [feed, setFeed] = useState([]);
  const navigate = useNavigate();

  // ✅ Check Admin Auth
//   useEffect(() => {
//     if (localStorage.getItem("adminAuth") !== "true") navigate("/admin-login");
//   }, [navigate]);

  // ✅ Load existing data (simulate saved data)
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const fakeFeed = JSON.parse(localStorage.getItem("feed")) || [
      {
        id: 1,
        user: "Ali",
        content: "Excited for new hackathon!",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600",
      },
      {
        id: 2,
        user: "Sara",
        content: "Looking for team members for my next project!",
      },
    ];
    setEvents(savedEvents);
    setFeed(fakeFeed);
  }, []);

  // ✅ Upload new event
  const handleUpload = (e) => {
    e.preventDefault();
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEvent({ title: "", description: "", venue: "", date: "" });
    alert("Event uploaded successfully!");
  };

  // ✅ Delete community post
  const handleDeletePost = (id) => {
    const updatedFeed = feed.filter((post) => post.id !== id);
    setFeed(updatedFeed);
    localStorage.setItem("feed", JSON.stringify(updatedFeed));
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#155dfc] to-blue-800">
          Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-[#155dfc] cursor-pointer hover:scale-105 transition-all text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* GRID CONTAINER */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ===================== EVENT UPLOAD ===================== */}
        <div className="bg-[#111] border border-blue-800 rounded-2xl p-6 shadow-xl hover:shadow-blue-700/30 transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Upload Tech Event
          </h2>

          <form onSubmit={handleUpload} className="space-y-4">
            <input
              type="text"
              placeholder="Event Title"
              className="bg-[#1a1a1a] border border-gray-700 p-3 w-full rounded-lg focus:border-blue-500 outline-none text-gray-200"
              value={event.title}
              onChange={(e) => setEvent({ ...event, title: e.target.value })}
              required
            />

            <textarea
              placeholder="Event Description"
              className="bg-[#1a1a1a] border border-gray-700 p-3 w-full rounded-lg focus:border-blue-500 resize-none outline-none text-gray-200"
              rows="3"
              value={event.description}
              onChange={(e) =>
                setEvent({ ...event, description: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="Venue"
              className="bg-[#1a1a1a] border border-gray-700 p-3 w-full rounded-lg focus:border-blue-500 outline-none text-gray-200"
              value={event.venue}
              onChange={(e) => setEvent({ ...event, venue: e.target.value })}
              required
            />

            <input
              type="date"
              className="bg-[#1a1a1a] border border-gray-700 p-3 w-full rounded-lg focus:border-blue-500 outline-none text-gray-200"
              value={event.date}
              onChange={(e) => setEvent({ ...event, date: e.target.value })}
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-300 to-blue-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 cursor-pointer"
            >
              Upload Event
            </button>
          </form>

          {/* Event list */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Uploaded Events
            </h3>
            {events.length === 0 ? (
              <p className="text-gray-500 text-sm">No events yet.</p>
            ) : (
              <ul className="space-y-3">
                {events.map((ev, index) => (
                  <li
                    key={index}
                    className="bg-[#1a1a1a] border border-gray-700 p-4 rounded-lg"
                  >
                    <h4 className="font-semibold text-blue-400">
                      {ev.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">{ev.date}</p>
                    <p className="text-gray-300 text-sm mt-2">
                      {ev.description}
                    </p>
                    <p className="text-gray-400 text-sm mt-1 italic">
                      Venue: {ev.venue}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ===================== COMMUNITY FEED ===================== */}
        <div className="bg-[#111] border border-blue-800 rounded-2xl p-6 shadow-xl hover:shadow-blue-700/30 transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Community Feed Management
          </h2>

          {feed.length === 0 ? (
            <p className="text-gray-500 text-sm">No posts available.</p>
          ) : (
            <ul className="space-y-4">
              {feed.map((post) => (
                <li
                  key={post.id}
                  className="bg-[#1a1a1a] border border-gray-700 p-4 rounded-lg flex flex-col gap-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-blue-400">
                        {post.user}
                      </h4>
                      <p className="text-gray-300 text-sm">{post.content}</p>
                    </div>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="text-red-500 hover:text-red-700 font-semibold transition cursor-pointer bg-gray-700 border border-gray-400 px-1.5 py-0.5 rounded-md"
                    >
                      Delete
                    </button>
                  </div>

                  {/* ✅ Show image if available */}
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-40 object-cover rounded-lg border border-gray-700 mt-2"
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Resource.CS Admin Panel
      </p>
    </div>
  );
};

export default AdminPanel;
