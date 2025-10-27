// Community.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImagePlus, Trash2 } from "lucide-react";
import { useAuth } from "./Appcontext";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const { user, token } = useAuth();

  // Fetch all posts
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("❌ Error fetching posts:", err));
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Create new post
  const handlePost = async (e) => {
    e.preventDefault();
    if (!token) return alert("Please login first!");

    if (!caption && !image) return alert("Add caption or image!");

    try {
      const formData = new FormData();
      formData.append("caption", caption); // ✅ backend expects "caption"
      if (image) formData.append("image", image);

      const res = await axios.post(
        "http://localhost:5000/api/posts/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // ✅ send token if using JWT
          },
          withCredentials: true,
        }
      );

      console.log("✅ Post created:", res.data);
      setCaption("");
      setImage(null);
      setPosts([res.data.post, ...posts]); // ✅ backend returns post inside res.data.post
    } catch (error) {
      console.error("❌ Error creating post:", error.response || error);
      alert(error.response?.data?.message || "Failed to create post");
    }
  };

  // Delete post
  const handleDelete = async (postId) => {
    if (!token) return alert("Please login first!");
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setPosts(posts.filter((p) => p._id !== postId));
    } catch (error) {
      console.error("❌ Error deleting post:", error.response || error);
      alert(error.response?.data?.message || "Failed to delete post");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-10 mt-20">
          <span className="text-[#155dfc]">Community </span>Feed
        </h1>

        {/* Create Post */}
        <div className="bg-gray-900 rounded-2xl p-5 shadow-lg border border-gray-800">
          <textarea
            name="caption"
            placeholder="What's on your mind?"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full bg-gray-800 rounded-xl p-3 text-white resize-none focus:outline-none"
            rows={4}
          />

          {image && (
            <p className="text-gray-400 text-sm mt-2">
              📸 Image ready to upload: {image.name}
            </p>
          )}

          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-white">
              <ImagePlus size={20} />
              <span>Add Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <button
              onClick={handlePost}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium"
            >
              Post
            </button>
          </div>
        </div>

        {/* Feed */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">
              No posts yet. Be the first to share something!
            </p>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-lg"
              >
                <p className="text-gray-300 whitespace-pre-line">{post.caption}</p>
                {post.image && (
                  <img
                    src={post.image} // ✅ use Cloudinary URL directly
                    alt="Post"
                    className="rounded-xl mt-4 max-h-72 object-cover w-full"
                  />
                )}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-gray-500 text-sm">
                    Posted by {post.user?.name || "Anonymous"}
                  </span>
                  {post.user?._id === user?.id && (
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
