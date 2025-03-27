import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../api/api";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("게시글 목록 조회 오류:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {/* 게시글 생성 버튼 */}
      <div className="mb-8 flex justify-end">
        <motion.button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/create")}
        >
          ➕ 게시글 작성
        </motion.button>
      </div>

      {/* 게시글 목록 */}
      <div className="space-y-8">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
            <p className="text-gray-600 mb-4 border-b pb-4">{post.content}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span className="flex items-center"><span className="mr-2">👤</span>{post.author}</span>
              <span className="flex items-center"><span className="mr-2">📅</span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PostList;