import React, { useState } from 'react';
import { createPosts } from '../../api';

const Form = () => {
  const [post, setPost] = useState({
    title: '',
    message: '',
    creator: '',
    selectedFile: '',
    likeCount: 0,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title: post.title,
        message: post.message,
        creator: post.creator,
        selectedFile: post.selectedFile,
        likeCount: post.likeCount,
      };
      await createPosts(newPost);
      setSuccess(true);
      setError(null);
      setPost({
        title: '',
        message: '',
        creator: '',
        selectedFile: '',
        likeCount: 0,
      });
    } catch (err) {
      setError('Failed to create post. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      {success && <p>Post created successfully!</p>}
      {error && <p>{error}</p>}
      <div>
        <label>Title</label>
        <input 
          type="text" 
          value={post.title} 
          onChange={(e) => setPost({ ...post, title: e.target.value })} 
        />
      </div>
      <div>
        <label>Message</label>
        <textarea 
          value={post.message} 
          onChange={(e) => setPost({ ...post, message: e.target.value })} 
        />
      </div>
      <div>
        <label>Creator</label>
        <input 
          type="text" 
          value={post.creator} 
          onChange={(e) => setPost({ ...post, creator: e.target.value })} 
        />
      </div>
      <div>
        <label>Selected File (URL)</label>
        <input 
          type="text" 
          value={post.selectedFile} 
          onChange={(e) => setPost({ ...post, selectedFile: e.target.value })} 
        />
      </div>
      <div>
        <label>Likes</label>
        <input 
          type="number" 
          value={post.likeCount} 
          onChange={(e) => setPost({ ...post, likeCount: parseInt(e.target.value, 10) || 0 })} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
