import PostList from "../components/PostList";
import { motion } from "framer-motion";

const PostPage = () => {

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 -left-48 -top-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute w-96 h-96 -right-48 -top-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute w-96 h-96 -left-48 -bottom-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* 상단 배너 */}
      <motion.div 
        className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Welcome to Our Community
          </motion.h1>
          <motion.p 
            className="text-white text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Share your stories and connect with others
          </motion.p>
        </div>
      </motion.div>

      {/* 중간 네비게이션 */}
      <div className="bg-white/80 backdrop-blur-sm shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 mx-2 rounded-lg transition-all duration-200 font-medium ${
              activeTab === "posts"
                ? "bg-blue-500 text-white shadow-lg"
                : "hover:bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("posts")}
          >
            게시글
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 mx-2 rounded-lg transition-all duration-200 font-medium ${
              activeTab === "about"
                ? "bg-blue-500 text-white shadow-lg"
                : "hover:bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("about")}
          >
            소개
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 mx-2 rounded-lg transition-all duration-200 font-medium ${
              activeTab === "contact"
                ? "bg-blue-500 text-white shadow-lg"
                : "hover:bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            연락처
          </motion.button>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "posts" && <PostList />}
            {activeTab === "about" && (
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  우리는 다양한 이야기를 공유하는 커뮤니티입니다. 여러분의 소중한 경험과 지식을 나누어주세요.
                </p>
              </div>
            )}
            {activeTab === "contact" && (
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact</h2>
                <div className="text-gray-600 text-lg space-y-4">
                  <motion.p 
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                  >
                    <span className="mr-3">📧</span>
                    Email: dlwjdals7073@gmail.com
                  </motion.p>
                  <motion.p 
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                  >
                    <span className="mr-3">📞</span>
                    Tel: 010-4365-4520
                  </motion.p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* 하단 배너 */}
      <motion.div 
        className="w-full bg-gray-800/90 backdrop-blur-sm py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center text-white">
          <p className="text-lg mb-4">함께 만들어가는 우리의 이야기</p>
          <p className="text-sm text-gray-400">© 2025 Our Community. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PostPage;