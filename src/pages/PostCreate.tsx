import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api"; // axios 설정된 api.ts 파일 사용
import { motion } from "framer-motion";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/posts", { title, content, author });
      navigate("/"); // 게시글 작성 후 목록 페이지로 이동
    } catch (error) {
      console.error("게시글 작성 오류:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          게시글 작성
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">제목</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">내용</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg h-32"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">작성자</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              onClick={() => navigate("/")}
            >
              취소
            </button>
            <motion.button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✅ 작성 완료
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PostCreate;
