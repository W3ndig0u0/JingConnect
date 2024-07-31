import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../../../api';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data); // Assumes data is an array of posts
      } catch (error) {
        console.error('Failed to fetch posts:', error.response ? error.response.data : error.message);
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
    <div>
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <h4>Title: {post.title}</h4>
            <p>Creator: {post.creator}</p>
            <p>Message: {post.message}</p>
            <p>Likes: {post.likeCount}</p>
            <p>Date: {new Date(post.createdAt).toLocaleDateString()}</p>
            {post.selectedFile && <img src={post.selectedFile} alt={post.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
