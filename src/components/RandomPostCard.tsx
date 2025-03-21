import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const RandomPostCard = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch a random post
  const fetchRandomPost = async (): Promise<void> => {
    setLoading(true);
    try {
      // First, get all posts
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const allPosts = await response.json();

      // Generate a random index
      const randomIndex = Math.floor(Math.random() * allPosts.length);
      const randomPost: Post = allPosts[randomIndex];

      setPost(randomPost);
      setError(null);
    } catch (err) {
      setError('Failed to fetch post. Please try again.');
      console.error('Error fetching post:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a random post on initial render
  useEffect(() => {
    fetchRandomPost();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        {/* Card Header */}
        <div className="bg-indigo-600 p-4">
          <h2 className="text-xl font-bold text-white">Random Post</h2>
        </div>
        
        {/* Card Content */}
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center py-4">{error}</div>
          ) : post ? (
            <div>
              <div className="mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  ID: {post.id}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3 capitalize">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {post.body}
              </p>
              
              <button
                onClick={fetchRandomPost}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Load New Random Post
              </button>
            </div>
          ) : (
            <div className="text-center py-4">No post found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomPostCard;
