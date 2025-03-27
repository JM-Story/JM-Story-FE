import { useNavigate } from "react-router-dom";
import PostList from "../components/PostList";
import { useState } from "react";
import { motion } from "framer-motion";

const PostPage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 게시글 생성 버튼 */}
      <div className="container mx-auto mt-6 flex justify-end">
        <motion.button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/create")}
        >
          ➕ 게시글 작성
        </motion.button>
      </div>

      {/* 기존 코드 (게시글 목록) */}
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto px-4">
          {activeTab === "posts" && <PostList />}
        </div>
      </div>
    </div>
  );
};

export default PostPage;