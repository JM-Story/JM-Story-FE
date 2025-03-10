import { posts } from "../data";

const PostList = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📜 게시글 목록</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.content}</p>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <span>✍️ {post.author}</span>
              <span>{post.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
