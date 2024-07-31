import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../../../api';
import '../../../styles.css';  // Import your CSS file

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data); // Assumes data is an array of posts
      } catch (error) {
        console.error('Failed to fetch posts:', error.message);
      } finally {
        setLoading(false); // Always stop loading in either case
      }
    };

    getPosts(); 
  }, []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="container">
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.selectedFile} alt={post.creator} />
            <div className="post-card-content">
              <h4>{post.creator}</h4>
              <p><strong>Likes:</strong> {post.likeCount}</p>
              <p><strong>Date:</strong> {new Date(post.createdAt).toLocaleDateString()}</p>
              <div><p>{post.message}</p></div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
